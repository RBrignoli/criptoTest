import mongoose from 'mongoose'
import bycryptjs from 'bcryptjs'
import { User } from '../models/models.js'

const check_permission = async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        return { error: { status: 404, message: "User not found" } };
    }
    if (!req.user.is_admin && req.user._id !== user._id.toString()) {
        return { error: { status: 401, message: "Unauthorized" } };
    }
    return { user };
};

const list_users = async (req, res) => {
    try {
        const users = await User.find()
        const usersList = users.map((user) => ({
            id: user.id,
            name: user.name,
            email: user.email,
            createdAt: user.createdAt,
            isAdmin: user.is_admin,
        }))
        res.json(usersList)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const get_user = async (req, res) => {
    const { error, user } = await check_permission(req, res);
    if (error) {
        return res.status(error.status).json({ message: error.message });
    }
    try {
        const userObj = user.toObject()
        delete userObj.password
        delete userObj.is_admin
        res.json(userObj)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}


const delete_user = async (req, res) => {
    const { error, user } = await check_permission(req, res);
    if (error) {
        return res.status(error.status).json({ message: error.message });
    }    try {
        const removedUser = await User.findByIdAndDelete(req.params.id)
        if (!removedUser) {
            return res.status(404).json({ message: "User not found" })
        }
        const userObj = removedUser.toObject()
        delete userObj.password
        delete userObj.is_admin
        res.json(userObj)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}


const create_user = async (req, res) => {
    const { name, email, password } = req.body
    if (
        !name ||
        !email ||
        !password ||
        name === "" ||
        email === "" ||
        password === ""
    ) {
        return res.status(400).json({ message: "All fields are required" })
    }
    const hashedPassword = await bycryptjs.hashSync(password, 10)
    const user = new User({ name, email, password: hashedPassword })

    try {
        const savedUser = await user.save()
        const userObj = savedUser.toObject()
        delete userObj.password
        delete userObj.is_admin
        return res.status(201).json(userObj)
    } catch (err) {
        return res.status(400).json({ message: err.message })
    }
}

const update_user = async (req, res) => {
    const { error, user } = await check_permission(req, res);
    if (error) {
        return res.status(error.status).json({ message: error.message });
    }    try {
        if (req.body.password) {
            req.body.password = await bycryptjs.hashSync(req.body.password, 10)
        }
        if (req.body.is_admin && !req.user.is_admin) {
            delete req.body.is_admin
        }
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" })
        }
        const userObj = updatedUser.toObject()
        delete userObj.is_admin
        res.json(userObj)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

const change_image = async (req, res) => {
    res.status(200).send({ 'users': 'change image' })
}





export { list_users, get_user, delete_user, change_image, create_user, update_user }