const fs =  require('fs');

const readableStream =  fs.createReadStream('../input/leviathan.txt', {encoding: 'utf8', highWaterMark: 1*1024});

readableStream.on('data', (chunk) => {
    console.log('Received Data:', chunk);
});


readableStream.on('error', (err) => {
    console.log('Got an error:', err);
});


