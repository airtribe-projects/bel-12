const express = require("express");
const mongoose = require('mongoose');

const coursesRouter = require('./routes/coursesRoute');
const usersRouter = require('./routes/usersRoute');


const app = express();

app.use(express.json());
app.use("/api/v1/courses", coursesRouter);
app.use("/api/v1/users", usersRouter);

app.get("/", (req, res) => res.send("Simple course rating service"));

module.exports = app;


