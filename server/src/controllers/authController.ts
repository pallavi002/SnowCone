import { validationResult } from "express-validator";
import jwt from "jsonwebtoken";
import User from "../models/User";
import { IUser, IUserLogin } from "../types/user";
import { Request, Response } from 'express';

export const register = async (req: any, res: any) => {
    // console.log(req.body);
    const { username, email, password, role }: IUser = req.body;
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                code: 400,
                success: false,
                message: "Validation failed",
                data: {},
            });
        }

        const userObj = new User({
            username,
            email,
            password,
            role,
        });

        const result = await userObj.save();

        return res.status(201).json({
            code: 201,
            success: true,
            message: "User registered!",
            data: result,
        });
    } catch (error) {
        return res.status(500).json({
            code: 500,
            success: false,
            message: "Server error",
            data: {},
        });
    }
}

export const login = async (req: Request, res: Response) => {
    const secret = process.env.JWT_SECRET;
    const { email, password }: IUserLogin = req.body;
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                code: 400,
                success: false,
                message: 'Validation failed',
                data: {},
            });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({
                code: 404,
                success: false,
                message: 'Email is invalid',
                data: {},
            });
        }

        user.comparePassword(password, async (err: any, isMatch: boolean) => {
            if (err || !isMatch) {
                return res.status(401).json({
                    code: 401,
                    success: false,
                    message: 'Password is invalid',
                    data: {},
                });
            }

            const token = await jwt.sign(
                { id: user._id, role: user.role },
                secret
            );

            return res.status(200).json({
                code: 200,
                success: true,
                message: 'User Logged in!',
                data: { token, user: { name: user.username, role: user.role } },
            });
        });
    } catch (error) {
        return res.status(500).json({
            code: 500,
            success: false,
            message: 'Server error',
            data: {},
        });
    }
};
