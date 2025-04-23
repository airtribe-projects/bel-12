const express = require('express');

// Library which helps you write APIs easily 
// commonjs syntax
// ES6 
// impo

const app = express();

const courses = [
    {
        id: 1,
        name: 'node.js',
        rating: 4.5,
        description: "Learn node js",
        instructions: "JC",
        difficulty: "Begineer",
        price: 200
    },
    {
        id: 2,
        name: 'React.js',
        rating: 4.5,
        description: "Learn React js",
        instructions: "JC",
        difficulty: "Begineer",
        price: 200
    },
    {
        id: 1,
        name: 'node.js',
        rating: 4.5,
        description: "Learn node js",
        instructions: "JC",
        difficulty: "Begineer",
        price: 200
    }
];


app.get('/',  (req, res) => {
    // Can we alter the req object
    
    console.log({req}, {res});
    res.send("Hello world!");  
});

// DRY Principle
// Don;t repeaet yourself
app.get('/api/v1/courses', (req, res) => {
    // console.log(req.query);
    
    res.send(courses);
})


// app.get('/api/v1/courses/1',  (req, res) => {
//     res.send(courses[1]);
// });


// app.get('/api/v1/courses/2',  (req, res) => {
//     res.send(courses[2]);
// });


// app.get('/api/v1/courses/3',  (req, res) => {
//     res.send(courses[3]);
// });
// Path params
app.get('/api/v1/courses/:courseId', (req, res) => {
    const courseId = parseInt(req.params.courseId);

    const course = courses[courseId];

    if (!course) res.status(404).send({message: "Course not found"});
    
    res.send(courses[courseId]);
})


app.listen(3000, () => {
    console.log("Server started on port", 3000)
});
