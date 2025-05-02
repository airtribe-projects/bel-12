const express =  require('express');
const router = express.Router();
const {createCourse, getAllCourses, getCourseById} =  require('../controllers/coursesController');
router.use(express.json());


router.get('/', getAllCourses); 
router.get('/:courseId', getCourseById);
router.post('/', createCourse);

module.exports = router;