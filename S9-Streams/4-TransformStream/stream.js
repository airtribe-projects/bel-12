const { Transform } = require('stream');
const fs = require('fs');

const lowercaseTransform = new Transform({
    transform(chunk, encoding, callback) {
        this.push(chunk.toString().toLowerCase());
        callback();
    }
})


const readableStream = fs.createReadStream('../input/leviathan.txt', { encoding: 'utf8' });
const writableStream = fs.createWriteStream('../output/leviathan_lowercase.txt');

readableStream
    .pipe(lowercaseTransform)
    .pipe(writableStream);


writableStream.on('finish', () => {
    console.log('Finished transforming and writing to file.');
});