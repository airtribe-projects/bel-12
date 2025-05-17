const express =  require('express');
const router = express.Router();
const usersModel = require('../models/usersModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;
const saltRounds = 10;



// const {createCourse, getAllCourses, getCourseById} =  require('../controllers/coursesController');
router.use(express.json());


// router.get('/', getAllCourses); 
// router.get('/:courseId', getCourseById);

router.post('/', (req, res) => { 
    req.body.password = bcrypt.hashSync(req.body.password, saltRounds);
    
    usersModel.create(req.body)
        .then((dbUser) => {
            res.send(dbUser);
        }).catch((err) => {
            console.log("Error creating user", err);
            res.status(500).send({text: "Error creating user"});
        });
});

router.post('/login', async (req, res) => { 
    const {email, password} = req.body;
    const dbUser = await usersModel.findOne({email: email});

    if(!dbUser) {
        return res.status(401).send({text: "Invalid email"});
    }

    const hashedPassword = bcrypt.hashSync(dbUser.password, saltRounds);

    console.log("hashedPassword", hashedPassword);
    console.log("dbUser.password", dbUser.password);
    
    const isPasswordValid = bcrypt.compareSync(password, dbUser.password); 
    
    if(!isPasswordValid) {
        return res.status(401).send({text: "Invalid password"});
    }

    const resUser = {
        name: dbUser.name,
        email: dbUser.email,
        role: dbUser.role
    };

    const token = jwt.sign(resUser, JWT_SECRET, {expiresIn: '1h'});
    return res.send({token});
});




module.exports = router;



// hashing  | No secret key | Irreversible | One way street

    // mod10 ==> unhashb
    // 109 ==> 9
    // 209 ==> 9
    // 1234 ==> 4


    // encoding ==> decode
        // reversible | Algorithm |base64
    
    // encryption ==> decryption | revcersible | key




    // Security Risk: Ops user can see the password and impersonatea user
    // not checking uniqueness of user
    // Validation is missing
    // No error handling