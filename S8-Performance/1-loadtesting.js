const autocannon = require('autocannon');

const instance = autocannon({
    url: 'http://localhost:8000',
    connections: 10,
    pipelining: 1,
    duration: 10
}, console.log);

// Track progress
autocannon.track(instance, { renderProgressBar: true });


// Load testing for 1000 RPS, 1500 ==> 80% 5xx (1 server)

// Real world scenario ==> 10000 RPS
// I instance
// min: 5 ma: 15
// Database
// Vertical Scaling depending on workload
// HA out of box (High availability)
// PS S(2 cpu, 4 GB ram), 4cpu, 8 GBRAM ==> 10 -15 mintues
// CPU, RAM, DISK, NETWORK
// 
// PSS + SS

