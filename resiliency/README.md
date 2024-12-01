## Why Do We Need Resilience Mechanisms?

1. Real-World Problem:
- External services can fail unexpectedly
- Network issues are common
- APIs might be temporarily unavailable
- You don't want your entire application to crash because one service is down

2. Specific Challenges in Microservices:
- Multiple services depend on each other
- One service failure can cascade to others
- Need mechanisms to handle temporary failures gracefully

What Oposssum Does:

Circuit Breaker Pattern:
- Monitors external service calls
- Tracks success and failure rates
- Prevents repeated calls to a failing service
- Acts like an electrical circuit breaker

Three Main States:
1. Closed State (Normal Operation)
- Calls go through normally
- Tracks error rate

2. Open State (Service Considered Unreliable)
- Stops making calls to the service
- Immediately returns a fallback response
- Prevents overwhelming a struggling service

3. Half-Open State (Recovery Attempt)
- Allows limited calls to check if service is recovering
- If calls succeed, returns to Closed State
- If calls fail, goes back to Open State

In Our Demo:
- We're using JSONPlaceholder as a mock external service
- Circuit breaker configured with:
  - 3-second timeout
  - 50% error threshold
  - 30-second reset timeout
- Fallback mechanism provides a temporary user object
- Logs circuit state changes

Real-World Example:
Imagine an e-commerce site:
- Payment service goes down
- Circuit breaker prevents repeated failed calls
- Fallback allows showing "Payment Temporarily Unavailable"
- Prevents entire checkout process from failing

Benefits:
- Improved application stability
- Graceful error handling
- Prevents system overload
- Automatic recovery mechanisms
- Detailed logging and monitoring

When to Use:
- External API calls
- Database connections
- Microservices communication
- Any potentially unreliable service interaction


refer: 
- https://medium.com/@sagargupta138/opossum-for-circuit-breakers-for-your-nodejs-systems-5a0893c83e2a
- https://medium.com/@erickzanetti/building-resilient-apis-with-node-js-47727d38d2a9
