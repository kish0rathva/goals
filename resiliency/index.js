const CircuitBreaker = require('opossum');
const axios = require('axios');
const winston = require('winston');
const express = require('express');

// Configure logging
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.simple(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'error.log', level: 'error' })
  ]
});

async function delayedError() {
  return new Promise((_resolve,reject) => {
    return setTimeout(() => {
      reject(new Error('Intentional Service Failure'))
    },3000);
  })
}
// Simulated external service call
async function fetchUserData(userId) {

  if (Math.random() < 0.7) {
    // This might take while to throw error in real world scenario
    logger.warn(`Simulated failure for user ${userId}`);
    await delayedError();
  }

  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    return response.data;
  } catch (error) {
    logger.error(`Error fetching user data: ${error.message}`);
    throw error;
  }
}

// Fallback function when service is unavailable
function fallbackUserData(userId) {
  logger.warn(`Fallback activated for user ${userId}`);
  return {
    id: userId,
    name: 'Temporary User',
    email: 'temp@example.com',
    status: 'UNAVAILABLE'
  };
}

// Circuit Breaker Configuration
function createUserDataCircuitBreaker() {
  const breaker = new CircuitBreaker(fetchUserData, {
    timeout: 3000, // 3 seconds
    errorThresholdPercentage: 50, // Open circuit if 50% of requests fail
    resetTimeout: 5000 // 5 seconds before trying again
  });

  // Add event listeners for circuit breaker states
  breaker.on('open', () => logger.warn('Circuit is OPEN'));
  breaker.on('close', () => logger.info('Circuit is CLOSED'));
  breaker.on('halfOpen', () => logger.info('Circuit is HALF-OPEN'));

  // Set fallback
  breaker.fallback(fallbackUserData);

  return breaker;
}

const app = express();
const port = 3011

const userCircuitBreaker = createUserDataCircuitBreaker();

app.get('/circuit/users/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const userData = await userCircuitBreaker.fire(id);
    res.send(userData)
  }catch(error) {
    res.status(500).send({message: "something went wrong!"})
  }
})

app.get('/users/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const userData = await fetchUserData(id);
    res.send(userData)
  }catch(error) {
    res.status(500).send({message: "something went wrong!"})
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


