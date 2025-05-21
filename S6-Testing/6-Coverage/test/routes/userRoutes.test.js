const request = require("supertest");  // Used to mock a request via express
const express = require("express");
const router = require("../../src/routes/usersRoute");
const { registerUser, loginUser } = require("../../src/controllers/usersController");

jest.mock("../../src/controllers/usersController");


const app = express();
app.use(express.json());
app.use(router);

// Test Suite
describe("User Authentication Routes", () => {

    describe('POST /register', () => { 
        // Create a user without a body
        // Invalid field values
        // Check uniqueness of email
        // Validates all required fields
        // Successfully register a user

        it('should successfully register a user', async () => {
            const user = {
                name: "John Doe",
                email: "john@example.com",
                password: "password123",
                role: "user"
            };

            registerUser.mockResolvedValue(user);
            

            const response = await request(app)
                    .post('/register')
                    .send(user)
                    .expect(201);

            expect(registerUser).toHaveBeenCalledWith(user);
            // expect(response.body).toBe(user); // Used for primitive comparison (shallow Comparison)
            expect(response.body).toEqual(user); // Used for nested object (Deep Comparison)
        })

        // it('should return an error if registration fails', async () => {
        //     const user = {
        //         name: "Jane Doe",
        //         email: "jane@example.com",
        //         password: "password123",
        //         role: "user"
        //     };

        //     registerUser.mockRejectedValue({message: "User registration failed"});

        //     const response = await request(app)
        //         .post('/register')
        //         .send(user)
        //         .expect(500); 

        //     expect(response.body.message).toBe("User registration failed");
        // });
    }) 
}) 

