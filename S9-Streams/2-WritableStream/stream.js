const fs =  require('fs');

const writableStream =  fs.createWriteStream('../output/writableStream.txt', {encoding: 'utf8'});


for (let i=0; i< 10000000; i++) {
    writableStream.write("\nHello World " + i );
}

writableStream.end(() => {
    console.log('Finished Writing data');
})

writableStream.on('error', (err) => {
    console.log('Got an error:', err);
});


