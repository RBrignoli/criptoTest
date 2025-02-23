// import cookieValidator from './cookieValidator';
// import jwt from 'jsonwebtoken';

// jest.mock('jsonwebtoken');

// describe('cookieValidator', () => {
//   let req, res, next;

//   beforeEach(() => {
//     req = {
//       cookies: {}
//     };
//     res = {
//       status: jest.fn().mockReturnThis(),
//       send: jest.fn()
//     };
//     next = jest.fn();
//   });

//   test('should return 401 if no token is provided', () => {
//     cookieValidator(req, res, next);

//     expect(res.status).toHaveBeenCalledWith(401);
//     expect(res.send).toHaveBeenCalledWith("Unauthorized: No token provided.");
//   });

//   test('should call next if token is valid', () => {
//     req.cookies.Token = 'validToken';
//     const decoded = { id: 'userId' };
//     jwt.verify.mockReturnValue(decoded);

//     cookieValidator(req, res, next);

//     expect(jwt.verify).toHaveBeenCalledWith('validToken', process.env.jwt_secret_key);
//     expect(req.user).toEqual(decoded);
//     expect(next).toHaveBeenCalled();
//   });

//   test('should return 401 if token is invalid', () => {
//     req.cookies.Token = 'invalidToken';
//     jwt.verify.mockImplementation(() => {
//       throw new Error('Invalid token');
//     });

//     cookieValidator(req, res, next);

//     expect(jwt.verify).toHaveBeenCalledWith('invalidToken', process.env.jwt_secret_key);
//     expect(res.status).toHaveBeenCalledWith(401);
//     expect(res.send).toHaveBeenCalledWith("Unauthorized: Invalid token.");
//   });
// });