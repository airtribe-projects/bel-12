// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const mongoose = require('mongoose');
// const { MongoMemoryServer } = require('mongodb-memory-server');
// const usersModel = require("../../src/models/usersModel");
// const { registerUser, loginUser } = require("../../src/controllers/usersController");
// const JWT_SECRET = "testSecret";
// let mongoServer;

// // Test Setup
// beforeAll(async () => {
//     mongoServer = await MongoMemoryServer.create();
//     const uri = mongoServer.getUri();
//     await mongoose.connect(uri);
// })

// // Test Teardown
// afterAll(async () => {
//     await mongoose.connection.dropDatabase();
//     await mongoose.connection.close();
//     await mongoServer.stop();
// });

// beforeEach(async () => {
//     await usersModel.deleteMany({});
// })


// describe('registerUser', () => {
//     it("Should register a new user successfully", async () => {
//         const user = {
//             name: "John Doe",
//             email: "test@example.com",
//             password: "password123",
//             role: "user"
//         };
        
//         const plainTextPassword = user.password;
            
//         const dbUser = await registerUser(user);

//         expect(user.name).toBe(dbUser.name);
//         expect(dbUser).toHaveProperty("_id");

//         expect(bcrypt.compareSync(plainTextPassword, dbUser.password)).toBe(true);
//     })

//     it('should throw an error if email is already in use', async () => {
//         const user1 = {
//             name: "John Doe",
//             email: "duplicate@example.com",
//             password: "password123",
//             role: "user"
//         };

//         await registerUser(user1);

//         const user2 = {
//             name: "Jane Doe",
//             email: "duplicate@example.com", // Same email
//             password: "password456",
//             role: "admin"
//         };

//         await expect(registerUser(user2)).rejects.toThrow("E11000 duplicate key error collection");    
//     }); 
    
// });


// describe("Testing user login", () => {
//     test('should return an error when the user is not found', async () => {
//         const email = "nonexistent@example.com";
//         const password = "password123";
//         await expect(loginUser(email, password)).rejects.toThrow("User not found");
//     });

//     test('should return an error when the password is incorrect', async () => {
//         const user = {
//             name: "John Doe",
//             email: "test@example.com",
//             password: "password123",
//             role: "user"
//         };

            
//         await registerUser(user);

//         const wrongPassword = "wrongpassword";

//         await expect(loginUser(user.email, wrongPassword)).rejects.toThrow("Invalid Password");
//     });

//     test('should successfully login a user with correct credentials', async () => {
//         const user = {
//             name: "John Doe",
//             email: "test@example.com",
//             password: "password123",
//             role: "user"
//         };

      
//         await registerUser(user);

        
//         const token = await loginUser(user.email, user.password);

//         expect(token).toBeDefined();
//         const decoded = jwt.verify(token, JWT_SECRET);
//         expect(decoded.email).toBe(user.email);
//         expect(decoded.role).toBe(user.role);
//     });
// })






