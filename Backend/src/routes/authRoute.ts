import { Router } from "express";
import wrapAsync from "../middlewares/wrapAsync";
import User from "../models/User";
import bcrypt from "bcryptjs";
import redis from "../config/redis";
import { otpRateLimit } from "../helper/otpRateLimit";
import { genRefreshAccessToken } from "../helper/refreshAccessTokenGen";
import { CookieOptions } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
const router: Router = Router();



const cookieOptions: CookieOptions = {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: 1000 * 60 * 60 * 24 * 7,
}


router.post("/register/send-otp", wrapAsync(async (req, res) => {
    const { email, password, username } = req.body;
    console.log(req.body)

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
    await otpRateLimit(email);

    const hashedPw = await bcrypt.hash(password, 10);

    await redis.set(
        `register:user:${email}`,
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

    await redis.set(`register:otp:${email}`, otp, "EX", 60);

    // await sendOtp(email, otp);

    return res.status(200).json({
        message: "OTP sent successfully"
    });
}));

router.post("/register/resend-otp", wrapAsync(async (req, res) => {
    const { email } = req.body;

    const userTemp = await redis.get(`register:user:${email}`)
    if (!userTemp) {
        return res.status(404).json({
            message: "User not found"
        })
    }
    await otpRateLimit(email);


    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    await redis.set(`register:otp:${email}`, otp, "EX", 60);

    // await sendOtp(email, otp);

    return res.status(200).json({
        message: "OTP sent successfully"
    })
}))

router.post("/register/verify-otp", wrapAsync(async (req, res) => {
    const { email, otp } = req.body;
    const userTemp = await redis.get(`register:user:${email}`)
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
    const verifyOtp = await redis.get(`register:otp:${email}`)
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
    const user = await User.create({
        email: parsedUser.email,
        username: parsedUser.username,
        password: parsedUser.hashedPw
    })
    await redis.del(`register:user:${email}`)
    await redis.del(`register:otp:${email}`)


    const { refreshToken, accessToken } = await genRefreshAccessToken(user._id.toString())
    await redis.set(`refreshToken:${user._id}`, refreshToken, "EX", 7 * 24 * 60 * 60)
    res.cookie('refreshToken', refreshToken, cookieOptions);
    res.cookie('accessToken', accessToken, { ...cookieOptions, maxAge: 1000 * 60 * 15 });

    return res.status(200).json({
        message: "User registered successfully"
    })


}))
//LOgin

router.post("/login", wrapAsync(async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body, "lgin body")
    if (!email || !password) {
        return res.status(400).json({ message: "Please check the fields" })
    }
    const isUserExist = await User.findOne({ email })
    if (!isUserExist) {
        return res.status(400).json({ message: "Email or Password is incorrect" })
    }
    if (isUserExist?.password) {

        const checkPW = await bcrypt.compare(password, isUserExist?.password)
        if (!checkPW) {
            return res.status(400).json({ message: "Email or Password is incorrect" })
        }
        const { accessToken, refreshToken } = await genRefreshAccessToken(isUserExist._id.toString())
        await redis.set(`refreshToken:${isUserExist._id}`, refreshToken, "EX", 7 * 24 * 60 * 60)
        res.cookie("accessToken", accessToken, { ...cookieOptions, maxAge: 1000 * 60 * 15 });
        res.cookie("refreshToken", refreshToken, cookieOptions)
        return res.status(200).json({ message: "Login successful", user: { email: isUserExist.email, username: isUserExist.username, id: isUserExist._id } })
    }



}))
router.get("/me", wrapAsync(async (req, res) => {
    console.log("reached route")
    const { accessToken } = req.cookies;
    console.log(accessToken)
    if (!accessToken) {
        return res.status(401).json({
            message: "Unauthorized"
        })
    }
    const decodedAccessToken = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET as string) as JwtPayload;


    const user = await User.findById(decodedAccessToken.id);
    if (!user) {
        return res.status(404).json({
            message: "User not found"
        })
    }
    return res.status(200).json({
        message: "User found",
        user: { email: user.email, username: user.username, id: user._id }
    })
}))

router.get("/refresh", wrapAsync(async (req, res) => {
    const { refreshToken } = req.cookies;
    if (!refreshToken) {
        return res.status(400).json({ message: "Session expired please login again" })
    }

    const decodeRefreshToken = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET as string) as JwtPayload;
    const storedRefreshToken = await redis.get(`refreshToken:${decodeRefreshToken.id}`);
    if (!storedRefreshToken || storedRefreshToken !== refreshToken) {
        return res.status(401).json({ message: "Session expired please login again" })
    }
    const user = await User.findById(decodeRefreshToken.id);
    if (!user) {
        return res.status(404).json({ message: "User not found" })
    }

    await redis.del(`refreshToken:${decodeRefreshToken.id}`);
    const { accessToken, refreshToken: newRefreshToken } = await genRefreshAccessToken(user._id.toString())
    await redis.set(`refreshToken:${user._id}`, newRefreshToken, "EX", 7 * 24 * 60 * 60);
    res.cookie("accessToken", accessToken, { ...cookieOptions, maxAge: 1000 * 60 * 15 });
    res.cookie("refreshToken", newRefreshToken, cookieOptions);
    return res.status(200).json({ message: "Refresh token generated successfully", user: { email: user.email, username: user.username, id: user._id } })





}))



router.put("/logout", wrapAsync(async (req, res) => {
    const { refreshToken } = req.cookies

    if (refreshToken) {
        try {
            const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET as string) as JwtPayload;
            await redis.del(`refreshToken:${decoded._id}`)

        } catch (error) {
            console.log(error)
        }

    }
    res.clearCookie("accessToken")
    res.clearCookie("refreshToken")
    return res.status(200).json({
        message: "Logout successful"
    })


}))



export default router