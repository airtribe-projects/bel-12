// server.js
const express = require('express');
const app = express();
const PORT = 8002;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/ping', (req, res) => {
      res.send("pong");
});

app.listen(PORT, () => {
  console.log('Server running on port' , PORT);
});