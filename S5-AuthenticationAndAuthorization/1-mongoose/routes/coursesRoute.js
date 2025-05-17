const express =  require('express');
const router = express.Router();
const {createCourse, getAllCourses, getCourseById} =  require('../controllers/coursesController');
const {validateJWT} = require('../middlewares/auth');
router.use(express.json());


router.get('/', getAllCourses); 
router.get('/:courseId', getCourseById);

// This should be restricted to admin only

router.post('/', [validateJWT], createCourse);

module.exports = router;