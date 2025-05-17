const courses = require("../models/coursesModel");

const getAllCourse =  () => {
    console.log("getAllCourses controller");
    return courses.find();
}

const getACourse =  (courseId) => {
    const course = courses.findById(parseInt(courseId));
    return course;
}

const createACourse =   (course) => {
    return courses.create(course);;
}

module.exports = {getAllCourse, getACourse, createACourse};