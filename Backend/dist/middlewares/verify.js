"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secret = process.env.JWT_SECRET;
const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    const token = authHeader.split(" ")[1];
    if (!secret) {
        return res.status(500).json({ message: "Server error" });
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, secret);
        if (!decoded) {
            return res.status(401).json({ message: "Invalid Token" });
        }
        req.userId = decoded._id;
        next();
    }
    catch (error) {
        return res.status(401).json({ message: "Invalid Token" });
    }
};
exports.default = verifyToken;
