require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const {logger} =  require('./middlewares/logger');
const coursesRouter = require('./routes/coursesRoute');
const usersRouter = require('./routes/usersRoute');
const PORT = process.env.PORT;

const app = express();
app.use(logger);
app.use("/api/v1/courses", coursesRouter);
app.use("/api/v1/users", usersRouter);

app.get('/', (req, res, next) => {
    console.log("Hello world");
    res.send("Hello world!");  
});



mongoose.connect(process.env.MONGODB_URI, {}).then(() =>{
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
        console.log("Server started on port", PORT)
    });
}).catch(err => {
    console.log("Error connecting to MongoDB", err);
})



/*
Option 1:
Connection should be after the server start?

Option 2: Both are independent

Option 3: Connection should be before the server start?

App Bootstrapping

*/