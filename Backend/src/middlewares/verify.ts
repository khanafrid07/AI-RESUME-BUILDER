import jwt, { JwtPayload } from "jsonwebtoken";
import { Response, NextFunction } from "express";
import { AuthRequest } from "../types/express.d";

const secret = process.env.JWT_SECRET;

const verifyToken = (
    req: AuthRequest,
    res: Response,
    next: NextFunction
) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    const token = authHeader.split(" ")[1];

    if (!secret) {
        return res.status(500).json({ message: "Server error" });
    }

    try {
        const decoded = jwt.verify(token, secret) as JwtPayload;

        if (!decoded) {
            return res.status(401).json({ message: "Invalid Token" });
        }

        req.userId = decoded._id;

        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid Token" });
    }
};

export default verifyToken;