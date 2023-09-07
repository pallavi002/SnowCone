

import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express"; 

const authorize = (req: Request, res: Response, next: NextFunction) => {
    const secret = process.env.JWT_SECRET; 
    try {
        const token = req.headers.authorization!.split(" ")[1];
        const decode = jwt.verify(token, secret);
        req.body.user = decode;
        next();
    } catch (error) {
        return res.status(400).json({
            code: 400,
            success: false,
            message: 'Invalid Request',
            data: {},
        });
    };
}
export default authorize;