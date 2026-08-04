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
import mongoose from "mongoose";



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
router.post("/save-user-resume", verifyToken, wrapAsync(async (req, res) => {
    const { formData: resumeData, template } = req.body
    console.log(resumeData, template)
    if (!resumeData) {
        return res.status(400).json({ message: "Resume data is required" })
    }
    console.log(req.userId)
    const createResume = await Resume.create({
        user: req.userId,
        ...resumeData, experience: resumeData.experience.map((exp: any) => ({
            ...exp,
            currentlyWorking: true
        })),
        template,

    })

    res.status(200).json({ message: "Resume created successfully", resume: createResume })
}))

router.get("/", verifyToken, wrapAsync(async (req, res) => {
    console.log("get route reached")
    const id = req.userId
    const findResume = await Resume.find({ user: id })
    console.log(findResume, "findResume")
    if (findResume.length === 0) {
        return res.status(404).json({ message: "Resume not found" })
    }
    res.status(200).json({ message: "Resume fetched successfully", resume: findResume })
}))

router.get("/:id", wrapAsync(async (req, res) => {
    const { id } = req.params;
    const findResume = await Resume.findById(id)
    if (!findResume) {
        return res.status(404).json({ message: "Resume not found" })
    }
    res.status(200).json({ message: "Resume fetched successfully", resume: findResume })

}))

router.put("/:id", wrapAsync(async (req, res) => {
    const { id } = req.params
    const { resumeData } = req.body
    if (!resumeData) {
        return res.status(400).json({ message: "Resume data is required" })
    }
    const updateResume = await Resume.findByIdAndUpdate(id, { $set: { ...resumeData } }, { new: true })
    if (!updateResume) {
        return res.status(404).json({ message: "Resume not found" })
    }
    res.status(200).json({ message: "Resume updated successfully", resume: updateResume });
}));

router.delete("/:id", verifyToken, wrapAsync(async (req, res) => {
    const { id } = req.params;
    const deletedResume = await Resume.findOneAndDelete({ _id: id, user: req.userId });
    if (!deletedResume) {
        return res.status(404).json({ message: "Resume not found" });
    }
    res.status(200).json({ message: "Resume deleted successfully" });
}));

export default router;
