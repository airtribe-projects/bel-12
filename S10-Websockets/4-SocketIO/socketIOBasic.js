const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http, 
    {
        cors: {
            origin: '*',
            methods: ['GET', 'POST'],
        },
    }
)

let score = {
    runs: 0,
    wickets: 0,
    overs: 0,
}

// Serve the main score page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/socketIOBasicClient.html');
});

// Serve the admin panel
app.get('/admin', (req, res) => {
    res.sendFile(__dirname + '/socketIOBasicAdmin.html');
});

io.on('connection', socket => {
    console.log('A user connected')
    // Send current score to newly connected client
    socket.emit('score update', score)

    // Listen for score updates from admin
    socket.on('update score', newScore => {
        score = newScore
        io.emit('score update', score)
    })

    socket.on('disconnect', () => {
        console.log('User disconnected')
    })
})

const PORT = process.env.PORT || 3000

http.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
