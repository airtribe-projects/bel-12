const express = require("express");
const {getAllCourse, createACourse, getACourse} = require("../controllers/coursesController");
const { isAuthorized } = require("../middlewares/auth");
const router = express.Router();

router.get("/", async (req,res) => {
    const courses = await getAllCourse();
    return courses;
});

router.get("/:id", async (req,res) => { 
    const id = req.params.id;
    const dbCourse = await getACourse(id);
    if (!dbCourse) {
        return res.status(404).send({message: "Course not found"});   
    }
    return res.status(200).send(dbCourse);
})

router.post("/", [isAuthorized],async (req,res) => { 
    if (req.decodedToken.role != "admin"){
        return res.status(401).send({ message: "Admin privilges required" });   
    }
    const course =  req.body;
    const dbCourse = await createACourse(course);
    res.status(200).send(dbCourse);
});

module.exports = router;
