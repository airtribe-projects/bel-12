const express = require('express');
const { RateLimiterMemory } = require('rate-limiter-flexible');
const helmet = require('helmet');

const app = express();

// Enable various HTTP security headers using helmet
// app.use(helmet());

// Configure rate limiter
const rateLimiter = new RateLimiterMemory({
    points: 1, // Number of requests
    duration: 10, // Per second
    blockDuration: 60 // Block for 1 minute if exceeded
});

// Middleware to handle rate limiting
const rateLimiterMiddleware = async (req, res, next) => {
    try {
        // Use IP address as key
        const key = req.ip;
        await rateLimiter.consume(key);
        next();
    } catch (err) {
        res.status(429).json({
            error: 'Too Many Requests',
            message: 'Please try again later'
        });
    }
};

// Apply rate limiting to all routes
app.use(rateLimiterMiddleware);

// Additional DDoS prevention middleware
app.use((req, res, next) => {
    // Limit payload size
    const contentLength = parseInt(req.headers['content-length'] || 0);
    if (contentLength > 1024 * 1024) { // 1MB limit
        return res.status(413).json({
            error: 'Payload Too Large',
            message: 'Request entity too large'
        });
    }

    // Add request timeout
    req.setTimeout(5000, () => {
        res.status(408).json({
            error: 'Request Timeout',
            message: 'Request took too long to process'
        });
    });

    next();
});

// Example protected route
app.get('/', (req, res) => {
    res.json({ message: 'Hello, protected world!' });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        error: 'Internal Server Error',
        message: 'Something went wrong'
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});