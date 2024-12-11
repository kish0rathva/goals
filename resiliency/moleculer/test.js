const autocannon = require('autocannon');

autocannon({
  url: 'http://localhost:3000/api/users/1',
  connections: 10,
  pipelining: 1,
  duration: 10
},console.log);
