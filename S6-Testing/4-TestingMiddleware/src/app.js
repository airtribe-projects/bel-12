const express = require("express");
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

const coursesRouter = require('./routes/coursesRoute');
const usersRouter = require('./routes/usersRoute');
const app = express();

app.use(express.json());
app.use("/v1/courses", coursesRouter);
app.use("/v1/users", usersRouter);

app.get("/", (req, res) => res.send("Simple course rating service"));

mongoose.connect(MONGODB_URI).then(() => {
    console.log("Connected to MongoDB!");
    
    app.listen(PORT, () => {
        console.log("Server running on port:", PORT);
    }).on('error', (e) => console.log(e));    
});
