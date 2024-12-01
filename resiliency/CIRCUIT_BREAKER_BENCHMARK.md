## Performance Testing

### Autocannon Load Tests

This project includes two autocannon test files for performance evaluation:

- `tests/circuit-breaker.test.js`
- `tests/test.js`

#### Running Tests

To run the load tests, navigate to the `tests` directory and use Node.js to execute the test files:

```bash
# Run circuit breaker test
node tests/circuit-breaker.test.js

# Run general test
node tests/test.js
```
---

Without circuit breaker: 

```json
{
  title: undefined,
  url: 'http://localhost:3011/users/1',
  socketPath: undefined,
  connections: 10,
  sampleInt: 1000,
  pipelining: 1,
  workers: undefined,
  duration: 10.03,
  samples: 10,
  start: 2024-12-01T19:08:18.021Z,
  finish: 2024-12-01T19:08:28.046Z,
  errors: 0,
  timeouts: 0,
  mismatches: 0,
  non2xx: 31,
  resets: 0,
  '1xx': 0,
  '2xx': 13,
  '3xx': 0,
  '4xx': 0,
  '5xx': 31,
  statusCodeStats: { '200': { count: 13 }, '500': { count: 31 } },
  latency: {
    average: 2128.73,
    mean: 2128.73,
    stddev: 1283.27,
    min: 137,
    max: 3011,
    p0_001: 137,
    p0_01: 137,
    p0_1: 137,
    p1: 137,
    p2_5: 139,
    p10: 143,
    p25: 394,
    p50: 3002,
    p75: 3004,
    p90: 3009,
    p97_5: 3010,
    p99: 3011,
    p99_9: 3011,
    p99_99: 3011,
    p99_999: 3011,
    totalCount: 44
  },
  requests: {
    average: 4.41,
    mean: 4.41,
    stddev: 5.63,
    min: 7,
    max: 14,
    total: 44,
    p0_001: 0,
    p0_01: 0,
    p0_1: 0,
    p1: 0,
    p2_5: 0,
    p10: 0,
    p25: 0,
    p50: 0,
    p75: 11,
    p90: 12,
    p97_5: 14,
    p99: 14,
    p99_9: 14,
    p99_99: 14,
    p99_999: 14,
    sent: 54
  },
  throughput: {
    average: 1725.5,
    mean: 1725.5,
    stddev: 2158.92,
    min: 3528,
    max: 5442,
    total: 17253,
    p0_001: 0,
    p0_01: 0,
    p0_1: 0,
    p1: 0,
    p2_5: 0,
    p10: 0,
    p25: 0,
    p50: 0,
    p75: 4119,
    p90: 4167,
    p97_5: 5443,
    p99: 5443,
    p99_9: 5443,
    p99_99: 5443,
    p99_999: 5443
  }
}
```

With circuit-breaker: 

```json
{
  title: undefined,
  url: 'http://localhost:3011/circuit/users/1',
  socketPath: undefined,
  connections: 10,
  sampleInt: 1000,
  pipelining: 1,
  workers: undefined,
  duration: 10.02,
  samples: 10,
  start: 2024-12-01T19:09:04.371Z,
  finish: 2024-12-01T19:09:14.389Z,
  errors: 0,
  timeouts: 0,
  mismatches: 0,
  non2xx: 0,
  resets: 0,
  '1xx': 0,
  '2xx': 37213,
  '3xx': 0,
  '4xx': 0,
  '5xx': 0,
  statusCodeStats: { '200': { count: 37213 } },
  latency: {
    average: 2.08,
    mean: 2.08,
    stddev: 29.7,
    min: 1,
    max: 511,
    p0_001: 0,
    p0_01: 0,
    p0_1: 0,
    p1: 0,
    p2_5: 0,
    p10: 0,
    p25: 0,
    p50: 0,
    p75: 0,
    p90: 1,
    p97_5: 1,
    p99: 1,
    p99_9: 504,
    p99_99: 509,
    p99_999: 511,
    totalCount: 37213
  },
  requests: {
    average: 3721.8,
    mean: 3721.8,
    stddev: 5657.4,
    min: 24,
    max: 14609,
    total: 37213,
    p0_001: 24,
    p0_01: 24,
    p0_1: 24,
    p1: 24,
    p2_5: 24,
    p10: 24,
    p25: 27,
    p50: 28,
    p75: 5491,
    p90: 14447,
    p97_5: 14615,
    p99: 14615,
    p99_9: 14615,
    p99_99: 14615,
    p99_999: 14615,
    sent: 37223
  },
  throughput: {
    average: 1189156,
    mean: 1189156,
    stddev: 1802711.63,
    min: 9251,
    max: 4660271,
    total: 11892958,
    p0_001: 9255,
    p0_01: 9255,
    p0_1: 9255,
    p1: 9255,
    p2_5: 9255,
    p10: 9255,
    p25: 12127,
    p50: 12767,
    p75: 1753087,
    p90: 4607999,
    p97_5: 4661247,
    p99: 4661247,
    p99_9: 4661247,
    p99_99: 4661247,
    p99_999: 4661247
  }
}
```
---

## Performance Comparison

### Without Circuit Breaker
- **Total Requests**: 44
- **Successful Requests**: 13 (29.5%)
- **Failed Requests**: 31 (70.5%)
- **Average Latency**: 2,128.73 ms
- **Status Codes**: 
  - 200 OK: 13
  - 500 Internal Server Error: 31

### With Circuit Breaker
- **Total Requests**: 37,213
- **Successful Requests**: 37,213 (100%)
- **Failed Requests**: 0
- **Average Latency**: 2.08 ms
- **Status Codes**:
  - 200 OK: 37,213

## Key Benefits Demonstrated

1. **Request Success Rate**
   - Without Circuit Breaker: 29.5% success
   - With Circuit Breaker: 100% success

2. **Latency Improvement**
   - Without Circuit Breaker: 2,128.73 ms average
   - With Circuit Breaker: 2.08 ms average
   - **99.9% Latency Reduction**

3. **Error Handling**
   - Prevented cascading failures
   - Maintained system stability
   - Provided consistent service
