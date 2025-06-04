const WebSocket = require('ws');
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('WebSocket server');
});

// Create a WebSocket server by passing the HTTP server
const wss = new WebSocket.Server({ server });

// Handle new WebSocket connections
wss.on('connection', (ws) => {
    console.log('New client connected');
    // Handle incoming messages
    let tmp = 1;
    ws.on('message', (message) => {
        console.log('Received:', message.toString());
        // Echo the message back to the client
        ws.send(`Server received: ${message}`);
        setInterval(() => {
            tmp++;
            ws.send(`New message: ${tmp}`);
        }, 1000)
    });

    // Handle disconnections
    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

// Start the server
const PORT = 8001;

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});