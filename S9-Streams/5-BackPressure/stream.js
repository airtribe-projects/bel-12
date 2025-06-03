const fs = require('fs');
const readableStream = fs.createReadStream('../input/leviathan.txt', { highWaterMark: 128 * 1024 }); // 64 KB
const writableStream = fs.createWriteStream('../output/backpressureFile.txt', { highWaterMark: 64*1024 }); // 100 bytes


ReadableSteram --> Bufffer --> WritableStream

readableStream.on('data', (chunk) => {
    console.log(`Read ${chunk.length} bytes`);

    if (!writableStream.write(chunk)) {
        console.log("Buffer full. Pausing Readable Stream");
        readableStream.pause();
    }
    
    // console.log(writableStream.write(chunk));


})

writableStream.on('drain', () => {
    console.log("Resuming readable stream");
    readableStream.resume();
})

readableStream.on('end', () => {
  console.log('Readable stream ended');
  writableStream.end();
});

readableStream.on('error', (err) => {
  console.error('Error reading file:', err);
});

writableStream.on('error', (err) => {
  console.error('Error writing file:', err);
});