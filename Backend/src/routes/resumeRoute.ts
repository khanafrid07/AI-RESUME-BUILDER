import { Router } from "express";
import wrapAsync from "../middlewares/wrapAsync";
import verifyToken from "../middlewares/verify";
import Resume from "../models/Resume";
import { AuthRequest } from "../types/express.d";

const router = Router()


router.post("/", verifyToken, wrapAsync(async (req, res) => {
    const { title, name, summary, projects, interests, experience, languages, certificates, template, portfolio, linkedin, github, phone, location, email } = req.body;
    const newResume = new Resume({ name, title, summary, projects, interests, experience, languages, certificates, template, portfolio, linkedin, github, phone, location, email })
    await newResume.save()
    res.status(201).json({ message: "Resume Created ", newResume })

}))

router.get("/", verifyToken, wrapAsync(async (req: AuthRequest, res) => {
    if (!req.userId) {
        return res.status(401).json({ message: "Unauthorized" })
    }
    const getResume = await Resume.find({ user: req.userId })
    res.status(200).json({ getResume })
}))

export default router
