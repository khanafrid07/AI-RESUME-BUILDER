import { Router } from "express";
import wrapAsync from "../middlewares/wrapAsync";
import User from "../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import redis from "../config/redis";

const router: Router = Router();

const secret = process.env.JWT_SECRET;

router.post("/auth/register/send-otp", wrapAsync(async (req, res) => {
    const { email, password, username } = req.body;
    if (!email || !password || !username) {
        return res.status(400).json({ message: "Please fill all the fields" })
    }
    const isUserAlreadyInRedis = await redis.get(`user:${email}`)
    if (isUserAlreadyInRedis) {
        const resendOtp = await redis.incr(`resend:${email}`)
        if (resendOtp > 5) {
            return res.status(400).json({ message: "Too many resend requests" })
        }
    }
    const userExists = await User.findOne({ email })
    if (userExists) {
        return res.status(400).json({ message: "User already exists" })
    }
    const hashedPw = await bcrypt.hash(password, 10)
    await redis.set(`user:${email}`, JSON.stringify({ email, hashedPw, username }), 'EX', 60);
    const otp = Math.floor(100000 + Math.random() * 900000).toString()
    await redis.set(`otp:${email}`, otp, 'EX', 60);


    return res.status(200).json({ message: "Otp sent Successfully" })


}));


export default router