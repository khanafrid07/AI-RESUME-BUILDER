import jwt, { JwtPayload } from "jsonwebtoken";
import { Response, NextFunction } from "express";
import { AuthRequest } from "../types/express.d";


const verifyToken = (
    req: AuthRequest,
    res: Response,
    next: NextFunction
) => {

    const token = req.cookies.accessToken;
    console.log(token)
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }


    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET || "") as JwtPayload;

        if (!decoded) {
            return res.status(401).json({ message: "Invalid Token" });
        }

        req.userId = decoded.id;

        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid Token" });
    }
};

export default verifyToken;