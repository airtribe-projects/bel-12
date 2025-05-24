const express = require("express");
const router = express.Router();
const {registerUser, loginUser} = require("../controllers/usersController");

router.post("/register", async (req, res) => {
    const user = req.body;
    
    let dbUser
    try{
        dbUser = await registerUser(user);
        return res.status(201).send(dbUser);
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
    
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const token = await loginUser(email, password);
        return res.status(200).json({ token });
    } catch (err) {
        if (err.message === "User not found") {
            return res.status(404).json({ message: err.message });
        }

        if (err.message === "Invalid Password") {
            return res.status(401).json({ message: err.message});
        }

        return res.status(500).json({ message: err.message });
    }
});

// router.post("/login",  async (req, res) => {
//     const { email, password } = req.body;
//     const token = await loginUser(email, password);
//     return res.status(200).send({token: token});
// });

module.exports = router;
