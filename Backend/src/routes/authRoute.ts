import { Router } from "express";
import wrapAsync from "../middlewares/wrapAsync";
import User from "../models/User";
import bcrypt from "bcryptjs";
import redis from "../config/redis";
import { resendRateLimit } from "../helper/resendOtpLimit";
import { genRefreshAccessToken } from "../helper/refreshAccessTokenGen";
import { CookieOptions } from "express";
const router: Router = Router();


const cookieOptions: CookieOptions = {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 7,
}


router.post("/register/send-otp", wrapAsync(async (req, res) => {
    const { email, password, username } = req.body;

    if (!email || !password || !username) {
        return res.status(400).json({
            message: "Please fill all the fields"
        });
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
        return res.status(400).json({
            message: "User already exists"
        });
    }
    await resendRateLimit(email);

    const hashedPw = await bcrypt.hash(password, 10);

    await redis.set(
        `user:${email}`,
        JSON.stringify({
            email,
            username,
            hashedPw
        }),
        "EX",
        60
    );

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    console.log(otp)

    await redis.set(`otp:${email}`, otp, "EX", 60);

    // await sendOtp(email, otp);

    return res.status(200).json({
        message: "OTP sent successfully"
    });
}));

router.post("/register/resend-otp", wrapAsync(async (req, res) => {
    const { email } = req.body;

    const userTemp = await redis.get(`user:${email}`)
    if (!userTemp) {
        return res.status(404).json({
            message: "User not found"
        })
    }
    await resendRateLimit(email);


    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    await redis.set(`otp:${email}`, otp, "EX", 60);

    // await sendOtp(email, otp);

    return res.status(200).json({
        message: "OTP sent successfully"
    })
}))

router.post("/register/verify-otp", wrapAsync(async (req, res) => {
    const { email, otp } = req.body;
    const userTemp = await redis.get(`user:${email}`)
    if (!email || !otp) {
        return res.status(400).json({
            message: "Email and Otp are required"
        })
    }
    if (!userTemp) {
        return res.status(404).json({
            message: "User not found"
        })
    }
    const verifyOtp = await redis.get(`otp:${email}`)
    if (!verifyOtp) {
        return res.status(404).json({
            message: "OTP not found"
        })
    }
    if (verifyOtp !== otp) {
        return res.status(400).json({
            message: "Invalid OTP"
        })
    }
    const parsedUser = JSON.parse(userTemp)
    await User.create({
        email: parsedUser.email,
        username: parsedUser.username,
        password: parsedUser.hashedPw
    })
    await redis.del(`user:${email}`)
    await redis.del(`otp:${email}`)
    await redis.del(`resend:${email}`)

    const { refreshToken, accessToken } = await genRefreshAccessToken(email)
    res.cookie('refreshToken', refreshToken, cookieOptions);
    res.cookie('accessToken', accessToken, cookieOptions);

    return res.status(200).json({
        message: "User registered successfully"
    })


}))

export default router