const {courses} =  require('../models/coursesModel');
const getAllCourses = (req, res) => {  
    res.send(courses);
};

const C = () => {
    console.log("Logged from C");
}

const B = () => {
    console.log("Logged from B");
    setTimeout(() => {
        console.log("From timeout");
    }, 3000);    
    C();
}


const A = () => {
    console.log("Logged from A");
    B()
}

const getCourseById = (req, res) => {
    const courseId = parseInt(req.params.courseId);
    const course = courses[courseId];
    A();
    if (!course) res.status(404).send({message: "Course not found"});
    res.send(courses[courseId]);
}

const createCourse = (req, res) => {
    const course = req.body;
    const id = courses.length + 1; // 
    course.id = id;
    console.log(course);
    courses.push(course);
    res.send(course);
};

module.exports = {getAllCourses, getCourseById, createCourse}
