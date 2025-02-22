const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')
const User = require('../models/models.js')
const { list_users, get_user, delete_user, create_user, update_user } = require('../controllers/users')

jest.mock('../models/models.js', () => {
    return {
        find: jest.fn(),
        findById: jest.fn(),
        findByIdAndDelete: jest.fn(),
        findByIdAndUpdate: jest.fn(),
        prototype: {
            save: jest.fn()
        }
    }
})

describe('User Controller', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    test('list_users should return a list of users', async () => {
        const req = {}
        const res = {
            json: jest.fn(),
            status: jest.fn().mockReturnThis()
        }
        const users = [
            { id: '1', name: 'John', email: 'john@example.com', createdAt: new Date(), is_admin: false },
            { id: '2', name: 'Jane', email: 'jane@example.com', createdAt: new Date(), is_admin: false }
        ]
        User.find.mockResolvedValue(users)

        await list_users(req, res)

        expect(res.json).toHaveBeenCalledWith(users.map(user => ({
            id: user.id,
            name: user.name,
            email: user.email,
            createdAt: user.createdAt,
            isAdmin: user.is_admin
        })))
    })

    test('get_user should return a user by id', async () => {
        const req = { params: { id: '1' } }
        const res = {
            json: jest.fn(),
            status: jest.fn().mockReturnThis()
        }
        const user = { id: '1', name: 'John', email: 'john@example.com', password: 'hashedpassword', is_admin: false }
        User.findById.mockResolvedValue(user)

        await get_user(req, res)

        const userObj = { ...user }
        delete userObj.password
        delete userObj.is_admin

        expect(res.json).toHaveBeenCalledWith(userObj)
    })

    test('delete_user should delete a user by id', async () => {
        const req = { params: { id: '1' } }
        const res = {
            json: jest.fn(),
            status: jest.fn().mockReturnThis()
        }
        const user = { id: '1', name: 'John', email: 'john@example.com', password: 'hashedpassword', is_admin: false }
        User.findByIdAndDelete.mockResolvedValue(user)

        await delete_user(req, res)

        const userObj = { ...user }
        delete userObj.password
        delete userObj.is_admin

        expect(res.json).toHaveBeenCalledWith(userObj)
    })

    test('create_user should create a new user', async () => {
        const req = { body: { name: 'John', email: 'john@example.com', password: 'password' } }
        const res = {
            json: jest.fn(),
            status: jest.fn().mockReturnThis()
        }
        const user = { id: '1', name: 'John', email: 'john@example.com', password: 'hashedpassword', is_admin: false }
        User.prototype.save.mockResolvedValue(user)
        bcryptjs.hashSync.mockReturnValue('hashedpassword')

        await create_user(req, res)

        const userObj = { ...user }
        delete userObj.password
        delete userObj.is_admin

        expect(res.status).toHaveBeenCalledWith(201)
        expect(res.json).toHaveBeenCalledWith(userObj)
    })

    test('update_user should update a user by id', async () => {
        const req = { params: { id: '1' }, body: { name: 'John Updated', password: 'newpassword' } }
        const res = {
            json: jest.fn(),
            status: jest.fn().mockReturnThis()
        }
        const user = { id: '1', name: 'John Updated', email: 'john@example.com', password: 'hashedpassword', is_admin: false }
        User.findByIdAndUpdate.mockResolvedValue(user)
        bcryptjs.hashSync.mockReturnValue('hashedpassword')

        await update_user(req, res)

        const userObj = { ...user }
        delete userObj.password
        delete userObj.is_admin

        expect(res.json).toHaveBeenCalledWith(userObj)
    })
})
