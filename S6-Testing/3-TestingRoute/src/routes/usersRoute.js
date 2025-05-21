const express = require("express");
const router = express.Router();
const {registerUser, loginUser} = require("../controllers/usersController");

router.post("/register", async (req, res) => {
    const user = req.body;
    const dbUser = await registerUser(user);
    res.status(201).json(dbUser);
});

router.post("/login",  async (req, res) => {
    const { email, password } = req.body;
    const token = await loginUser(email, password);
    return res.status(200).json({token: token});
});

module.exports = router;
