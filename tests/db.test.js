// import mongoose from 'mongoose';
// import connectDB from './connector';

// jest.mock('mongoose', () => ({
//   connect: jest.fn(),
//   set: jest.fn()
// }));

// describe('connectDB', () => {
//   beforeEach(() => {
//     jest.clearAllMocks();
//   });

//   test('should connect to MongoDB successfully', async () => {
//     const mockConn = {
//       connection: {
//         host: 'mockHost'
//       }
//     };
//     mongoose.connect.mockResolvedValue(mockConn);

//     console.log = jest.fn();

//     await connectDB();

//     expect(mongoose.set).toHaveBeenCalledWith('strictQuery', false);
//     expect(mongoose.connect).toHaveBeenCalledWith(process.env.MONGODB_URI);
//     expect(console.log).toHaveBeenCalledWith(`MongoDB Connected: ${mockConn.connection.host}`);
//   });

//   test('should handle connection error', async () => {
//     const mockError = new Error('Connection error');
//     mongoose.connect.mockRejectedValue(mockError);

//     console.log = jest.fn();
//     process.exit = jest.fn();

//     await connectDB();

//     expect(mongoose.set).toHaveBeenCalledWith('strictQuery', false);
//     expect(mongoose.connect).toHaveBeenCalledWith(process.env.MONGODB_URI);
//     expect(console.log).toHaveBeenCalledWith(mockError);
//     expect(process.exit).toHaveBeenCalledWith(1);
//   });
// });