require('dotenv').config();
const express = require('express');
const {logger} =  require('./middlewares/logger');
const coursesRouter = require('./routes/coursesRoute');
const coursesRouterXML = require('./routes/coursesRouteXML');
const PORT = process.env.PORT;

const app = express();
app.use(logger);
app.use("/api/v1/courses", coursesRouter);
app.use("/api/v2/courses", coursesRouterXML);


app.get('/', (req, res, next) => {
    console.log("Hello world");
    res.send("Hello world!");  
});


app.listen(PORT, () => {
    console.log("Server started on port", PORT)
});
