import mongoose from "mongoose";
import {User} from "../models/models.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";


const signin = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password || email === "" || password === "") {
            return res.status(400).json({ message: "All fields are required" });
        }
        const user = await User.findOne({ email: email }).exec();
        if (!user) {
            return res.status(400).json({ message: "User not Found" });
        }
        const validPassword = bcryptjs.compareSync(password, user.password);
        if (!validPassword) {
            return res.status(400).json({ message: "Invalid Email or Password!" });
        }
        const token = jwt.sign(
            {
                _id: user._id,
                email: user.email,
                name: user.name,
                admin: user.is_admin ? user.is_admin : false
            },
            process.env.jwt_secret_key,
            { expiresIn: 1000 * 60 * 60 * 24 * 3 }
        );
        const expirationTime = new Date(Date.now() + 1000 * 60 * 60 * 24 * 3);

        const { password: pass, ...rest } = user._doc;
        return res
            .status(200)
            .cookie("Token", token, {
                httpOnly: true,
                expires: expirationTime,
                maxAge: 1000 * 60 * 60 * 24 * 3,
                sameSite: 'None',
                secure: true,
            })
            .json({ ...rest });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: e.message});
    }
};

const logout = async (req, res) => {
    try {
        res.cookie("Token", "none", {
            expires: new Date(Date.now() + 5 * 1000),
            httpOnly: true,
        });
        res.status(200).json({
            success: true,
            message: "User logged out successfully",
        });
    } catch (e) {
        console.log(e);
        return next(e);
    }
};


export { signin, logout };