import { Router } from "express";
import Resume from "../models/Resume";
import wrapAsync from "../middlewares/wrapAsync";
import verifyToken from "../middlewares/verify";
import { calculateResumeQualityScore } from "../services/ATS/resumeQualityScore";
import { analyzeJobDesc } from "../services/ATS/analyzeJobDesc";
import { matchResumeWithJobDesc } from "../services/ATS/matchResumeWithJobDesc";
import { calculateJobMatchScore } from "../services/ATS/calculateJobMatchScore";

const router = Router()

router.post("/check/:id", verifyToken, wrapAsync(async (req, res) => {
    const { id } = req.params;
    const { jobDescription, jobRole, companyName } = req.body;
    const resume = await Resume.findOne({ user: req.userId, _id: id })

    if (!resume) {
        return res.status(404).json({ message: "resume not found" })
    }
    const resumeQualityScore = calculateResumeQualityScore(resume)
    if (jobDescription?.length > 0 && jobRole?.length > 0) {
        const jobAnalysis = await analyzeJobDesc({ jobDescription, jobRole, companyName })
        const matchJobDesc = await matchResumeWithJobDesc({ resume, jobAnalysis })
        const JobmatchScore = calculateJobMatchScore(matchJobDesc.matches)
        const finalScore = Math.round(JobmatchScore * 0.7 + resumeQualityScore.score * 0.3)
        console.log(JobmatchScore, "job desc match")
        console.log(finalScore, "final")
        console.log(matchJobDesc, "Matched and missing")
        return res.json({ message: "ats analyzed success", finalScore, resumeQualityScore, JobmatchScore, matchJobDesc })

    }
    console.log("hitt")
    return res.json({ message: "ats analyzed success", resumeQualityScore })

}))


export default router