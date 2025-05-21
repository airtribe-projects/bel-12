require('dotenv').config()
const mongoose = require('mongoose');
const app = require('./app');

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

console.log("MONGODB_URI:", MONGODB_URI);
console.log("PORT:", PORT);

const startServer = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log("Connected to MongoDB!");

        app.listen(PORT, () => {
            console.log("Server running on port:", PORT);
        }).on('error', (e) => console.error("Server error:", e));
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1); // Exit process if DB fails to connect
    }
};

startServer();