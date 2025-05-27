const jwt = require('jsonwebtoken');
const { isAuthorized } = require('../../src/middlewares/auth');
jest.mock('jsonwebtoken');

describe('isAuthorized Middleware', () => {
    let req, res, next;

    beforeEach(() => {
        req = {headers: {}};

        next = jest.fn();

        res = {
            send: jest.fn(),
            status: jest.fn().mockReturnThis()
        }

    });

    it('should return 400 if token is missing', () => {
        isAuthorized(req, res, next);
        expect(res.status).toHaveBeenCalledWith(400);
        // expect(res.send).toHaveBeenCalledWith({ message: "Token is required" });
        expect(next).not.toHaveBeenCalled();
    });

    it('should return 401 if token is invalid', () => {
        req.headers.authorization = "invalid.token";
        
        jwt.verify.mockImplementation(() => {
            throw new Error("Invalid Token");
        });

        isAuthorized(req, res, next);

        expect(res.status).toHaveBeenCalledWith(401);
        expect(res.send).toHaveBeenCalledWith({ message: "Invalid Token" });
        expect(next).not.toHaveBeenCalled();
    });

    it('should call next and set req.decodedToken if token is valid', () => {
        req.headers.authorization = "valid.token";
        const decodedToken = { userId: "12345", role: "user" };

        jwt.verify.mockReturnValue(decodedToken);

        isAuthorized(req, res, next);

        expect(jwt.verify).toHaveBeenCalledWith("valid.token", process.env.JWT_SECRET);
        expect(req.decodedToken).toEqual(decodedToken);
        expect(next).toHaveBeenCalled();
    });










});