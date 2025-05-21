const request = require('supertest');
const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });
const { MongoMemoryServer } = require('mongodb-memory-server');

const app = require('../../src/app'); 

const Course = require('../../src/models/coursesModel');

let mongoServer;
let adminToken;
let userToken;

beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());

    // Create admin and user
    const adminUser = { name: 'Admin User', email: 'admin@example.com', password: 'password123', role: 'admin' };
    const normalUser = { name: 'Normal User', email: 'user@example.com', password: 'password123', role: 'user' };

    await request(app)
        .post('/api/v1/users/register')
        .send(adminUser);
   
    await request(app)
        .post('/api/v1/users/register')
        .send(normalUser);
   
    const adminLoginResponse = await request(app)
        .post('/api/v1/users/login')
        .send({ email: 'admin@example.com', password: 'password123' });

    const userLoginResponse = await request(app)
        .post('/api/v1/users/login')
        .send({ email: 'user@example.com', password: 'password123' });
   
    adminToken = adminLoginResponse.body.token;
    userToken = userLoginResponse.body.token;
});

beforeEach(async () => {
    await Course.deleteMany(); 
});





describe('Courses API Integration Tests', () => {
    // Create Courses
    test('POST /courses - should allow admin to create a course', async () => {
        const newCourse = { name: 'Machine Learning', rating: 5, difficulty: 'Advanced', price: 199 };

        const response = await request(app)
            .post('/api/v1/courses')
            .set('Authorization', adminToken)
            .send(newCourse)
            .expect(201);
        
        expect(response.body).toMatchObject(newCourse);

        const courses = await Course.find();
        expect(courses.length).toBe(1);
        expect(courses[0].name).toBe('Machine Learning');
    });

    
    // Get Courses
    
    // Get All courses
})


        















