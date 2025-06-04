const express = require('express');
const app = express();
const port = 3000;

// Serve static files
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/otherMethods.html');
});

// Store some sample data
let stockPrices = {
    AAPL: 150.00,
    GOOGL: 2800.00,
    MSFT: 280.00
};

// Simulate price updates every 8 seconds
setInterval(() => {
    Object.keys(stockPrices).forEach(symbol => {
        // Random price change between -2 and +2
        const change = (Math.random() * 4 - 2).toFixed(2);
        stockPrices[symbol] = +(stockPrices[symbol] + parseFloat(change)).toFixed(2);
    });
}, 8000);

// 1. Regular Polling Endpoint ==> every 3 seconds
app.get('/api/stocks/polling', (req, res) => {
    res.json(stockPrices);
});

// 2. Long Polling Endpoint
app.get('/api/stocks/long-polling', (req, res) => {
    const currentPrices = { ...stockPrices };
    
    // Wait for price changes
    const checkForUpdates = setInterval(() => {
        const hasChanged = Object.keys(stockPrices).some(
            symbol => stockPrices[symbol] !== currentPrices[symbol]
        );
        
        if (hasChanged) {
            clearInterval(checkForUpdates);
            res.json(stockPrices);
        }
    }, 500);
    
    // Timeout after 30 seconds
    setTimeout(() => {
        clearInterval(checkForUpdates);
        if (!res.headersSent) {
            res.json(stockPrices);
        }
    }, 30000);
    
    // Clean up if client disconnects
    req.on('close', () => {
        clearInterval(checkForUpdates);
    });
});

// 3. Server-Sent Events Endpoint
app.get('/api/stocks/sse', (req, res) => {
    // Set headers for SSE
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive'
    });
    
    // Send initial data
    res.write(`data: ${JSON.stringify(stockPrices)}\n\n`);
    
    // Send updates when prices change
    const sendUpdates = setInterval(() => {
        if (!res.write(`data: ${JSON.stringify(stockPrices)}\n\n`)) {
            clearInterval(sendUpdates);
        }
    }, 2000);
    
    // Clean up if client disconnects
    req.on('close', () => {
        clearInterval(sendUpdates);
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});