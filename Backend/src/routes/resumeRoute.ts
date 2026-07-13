import { Router } from "express";
import wrapAsync from "../middlewares/wrapAsync";
import verifyToken from "../middlewares/verify";
import Resume from "../models/Resume";
import { AuthRequest } from "../types/express.d";
import model from "../services/genAI";
import { educationPrompt } from "../Prompts/educationPrompt";
import { summaryPrompt } from "../Prompts/summaryPrompt";
import { projectPrompt } from "../Prompts/projectPrompt";
import { skillsSuggestionPrompt } from "../Prompts/skillPrompt";
import experiencePrompt from "../Prompts/experincePrompt";



const router = Router()

const promptMap = {
    summary: summaryPrompt,
    experience: experiencePrompt,
    project: projectPrompt,
    education: educationPrompt,
    skills: skillsSuggestionPrompt,
};
router.post("/ai/generate", async (req, res) => {
    try {
        const { type, aiFormData } = req.body;
        console.log(JSON.stringify(req.body, null, 2));
        console.log(aiFormData, "this is comign")

        const promptGenerator = promptMap[type as keyof typeof promptMap];

        if (!promptGenerator) {
            return res.status(400).json({
                success: false,
                message: "Invalid generation type.",
            });
        }

        const prompt = promptGenerator(aiFormData);

        const result = await model.generateContent(prompt);

        const text = result.response
            .text()
            .replace(/```json/g, "")
            .replace(/```/g, "")
            .trim();

        res.json({
            success: true,
            data: JSON.parse(text),
        });
        console.log(result.response.text())
    } catch (err) {
        console.error(err);

        res.status(500).json({
            success: false,
            message: "AI generation failed.",
        });
    }
});
router.get("/", wrapAsync(async (req, res) => {
    if (!req.userId) {
        return res.status(401).json({ message: "Unauthorized" })
    }
    const getResume = await Resume.find({ user: req.userId })
    res.status(200).json({ getResume })
}))

export default router
