const express =  require('express');
const router = express.Router();
const {courses} =  require('../models/coursesModel');
// route.use(----XML);

router.get('/', (req, res) => {        
    res.send(courses);
})

router.get('/:courseId', (req, res) => {
    const courseId = parseInt(req.params.courseId);
    const course = courses[courseId];
    if (!course) res.status(404).send({message: "Course not found"});
    res.send(courses[courseId]);
})

router.post('/', (req, res) => {
    const course = req.body;
    const id = courses.length + 1; // 
    course.id = id;
    courses.push(course);
    res.send(course);
});

module.exports = router;