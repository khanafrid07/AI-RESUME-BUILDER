import { Router } from "express";
import wrapAsync from "../middlewares/wrapAsync";
import User from "../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router: Router = Router();

const secret = process.env.JWT_SECRET;

router.post(
    "/register",
    wrapAsync(async (req, res) => {
        const { name, email, password } = req.body;

        if (!secret) {
            return res.status(500).json({ message: "Server error" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
        });

        await newUser.save();

        const token = jwt.sign(
            { id: newUser._id, email: newUser.email },
            secret,
            { expiresIn: "7d" }
        );

        res.status(201).json({
            message: "User registered successfully",
            token,
        });
    })
);

router.post("/login", wrapAsync(async (req, res) => {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email })
    if (!existingUser) {
        return res.status(404).json({ message: "User not found" })
    }
    const isMatch = await bcrypt.compare(password, existingUser?.password)
    if (isMatch) {
        return res.status(401).json({ message: "Invalid Credentials" })
    }
    if (!secret) {
        return res.status(500).json({ message: "Server error" });
    }

    const token = jwt.sign({ id: existingUser._id, email: existingUser.email }, secret, { expiresIn: "7D" })

    return res.status(200).json({ message: "User logged in successful", token })

}))

export default router;