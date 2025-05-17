const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String, 
    email: {
        type: String,
        min: [6, 'Email must be at least 6 characters'],
        max: [50, 'Email must be at most 50 characters'],
        required: [true, 'Email is required'],
        unique: true,
    },
    password: String,
    role: String   
});



const User = mongoose.model('User', userSchema);

module.exports = User;



