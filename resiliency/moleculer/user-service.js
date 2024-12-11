const { ServiceBroker } = require("moleculer");
const ApiGateway = require("moleculer-web");
const axios = require("axios");

// Create the service broker
const broker = new ServiceBroker({
  logger: true,
  circuitBreaker: {
    enabled: true,
    threshold: 0.5, // 50% failure rate
    minRequestCount: 10,
    windowTime: 10000,
    halfOpenTime: 5000,
  },
  retryPolicy: {
    enabled: true,
    retries: 3,
    delay: 500,
    maxDelay: 2000,
    factor: 2,
    check: (err) => err && err.response && err.response.status >= 500,
  },
  bulkhead: {
    enabled: true,
    concurrency: 5,
    maxQueueSize: 10,
  },
});

// User Service
broker.createService({
  name: "user",
  actions: {
    async fetch(ctx) {
      const { userId } = ctx.params;
      if (Math.random() < 0.7) {
        this.logger.warn(`Simulated failure for user ${userId}`);
        await this.delayedError();
      }

      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        return response.data;
      } catch (error) {
        this.logger.error(`Error fetching user data: ${error.message}`);
        throw new Error("ServiceUnavailable");
      }
    },
  },

  methods: {
    delayedError() {
      return new Promise((_resolve, reject) => {
        setTimeout(() => {
          reject(new Error("Intentional Service Failure"));
        }, 3000);
      });
    },

    fallback(userId) {
      this.logger.warn(`Fallback activated for user ${userId}`);
      return {
        id: userId,
        name: "Temporary User",
        email: "temp@example.com",
        status: "UNAVAILABLE",
      };
    },
  },
});

// API Gateway Service
broker.createService({
  name: "api",
  mixins: [ApiGateway],
  settings: {
    routes: [
      {
        path: "/api",
        aliases: {
          // Map REST route to Moleculer action
          "GET /users/:userId": "user.fetch",
        },
        onError(req, res, err) {
          // Handle errors and send custom response
          res.writeHead(500, { "Content-Type": "application/json" });
          res.end(
            JSON.stringify({ message: "Service unavailable", error: err.message })
          );
        },
      },
    ],
  },
});

broker
  .start()
  .then(() => broker.logger.info("Moleculer services are up and running!"));
