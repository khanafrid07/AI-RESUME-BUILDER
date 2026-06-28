import { Router } from "express";
import wrapAsync from "../middlewares/wrapAsync";
import verifyToken from "../middlewares/verify";
import Resume from "../models/Resume";
import { AuthRequest } from "../types/express.d";
import model from "../services/genAI";
import GenPrompt from "../config/prompt";

const router = Router()


router.post("/templates/create/:slug", wrapAsync(async (req, res) => {
    const {personalInfo, aiFormData} = req.body
   console.log(personalInfo, aiFormData)
   const resp =await model.generateContent(GenPrompt(aiFormData))
   console.log(resp.response.text())
})) 

router.get("/", wrapAsync(async (req, res) => {
    if (!req.userId) {
        return res.status(401).json({ message: "Unauthorized" })
    }
    const getResume = await Resume.find({ user: req.userId })
    res.status(200).json({ getResume })
}))

export default router
