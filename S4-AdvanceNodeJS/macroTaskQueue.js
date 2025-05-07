const net = require('net');

console.log('Start');

const server = net.createServer(() => {});

server.listen(0, () => {
    const port = server.address().port;
    const socket = net.createConnection(port);
  
    socket.on('connect', () => {      //Phase 4
        
        setImmediate(() => {
            console.log("setImmediate inside I/O");
        });


        setTimeout(() => {
            console.log("SetTimeOut inside I/O");
        }, 0);


        process.nextTick(() => {
            setTimeout(() => {
                console.log("SetTimeOut inside nextTick");
            }, 0);
        
            console.log('process.nextTick 1')
        });
    });
});


/* 6 Phases (A)
1. Timer: setTimeout, setInterval
2. Pending Callback Phase: TCP Errors, DNS erros, deferred network calls
3. Idle / Prepare Phase: Internal purposes (NodeJS)
4. Poll Phase: network, DB call, fs
5. Check Phase: setImmediate
6. Close Phase: Connection closing


*/