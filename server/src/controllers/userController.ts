import { validationResult } from "express-validator";
import jwt from "jsonwebtoken";
import User from "../models/User";
import { IUser, IUserLogin } from "../types/user";
import { Request, Response } from 'express';

export const getProfile = async (req: Request, res: Response) => {
    console.log("...");
    
    const { id } = req.params;
    try {
        const user = await User.findOne({ _id: id });
        console.log(user);

        if(!user) {
            return res.status(400).json({
                code: 400,
                success: false,
                message: "User not found!",
                data: {},
            });
        }
        return res.status(200).json({
            code: 200,
            success: true,
            message: "User found",
            data: { user },
        });
    } catch(error) {
        console.log(error);
        
        return res.status(500).json({
            code: 500,
            success: false,
            message: "Invalid Request",
            data: {},
        });
    }
}