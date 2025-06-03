const net = require('net');

const client = net.createConnection({ port: 8080 }, () => {
  console.log('Connected to chat server');
  // 
  process.stdin.pipe(client); // Writes anything which has been typed on the terminal to the stream
});

client.on('data', (data) => {
  console.log(`Received: ${data}`);
});

client.on('end', () => {
  console.log('Disconnected from chat server');
});

client.on('error', (err) => {
  console.error('Client error:', err);
});

process.stdin.on('end', () => {
  client.end();
});
