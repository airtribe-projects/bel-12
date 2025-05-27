const express = require('express');
const path = require('path');

const PORT = 8000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

app.listen(PORT, () => {
    console.log('Server running on port ', PORT);
});