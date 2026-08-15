import { Circle, Plus, Target } from "lucide-react";
import BackgroundLayout from "../../common/BackgroundLayout";
import { useGetAllResumeQuery } from "../Resume/ResumeApi";
import ResumeListCard from "../../components/ResumeListCard";
import UploadCard from "../../components/UploadCard";
import { useCheckATSMutation } from "./AtsApi";
import type { ResumeQualityScore } from "./AtsTypes";
import AtsScore from "./components/AtsScore";
import { useState } from "react";
import ScoreBreakdown from "./components/ScoreBreakdown";
import JobDescription from "./components/JobDescription";
import ChooseAnalysis from "./components/ChooseAnalysis";
import QualityAnalysis from "./components/QualityAnalysisCard";

export default function Ats() {

    const { data, isError } = useGetAllResumeQuery()
    const resume = data?.resume || []
    const [checkATS, { isLoading: isChecking }] = useCheckATSMutation()
    const [selectedResume, setSelectedResume] = useState<string>("")
    const [jobTitle, setJobTitle] = useState<string>("");
    const [companyName, setCompanyName] = useState<string>("");
    const [jobDescription, setJobDescription] = useState<string>("");
    const [atsResult, setAtsResult] = useState<any>(null)
    const [analysisMode, setAnalysisMode] = useState<"quality" | "jobMatch" | null>(null)
    const [qualityResult, setQualityResult] = useState<ResumeQualityScore>({
        structure: 0,
        completeness: 0,
        formatting: 0,
        experience: 0,
        skills: 0,
        atsReadiness: 0,
        score: 0
    })
    console.log(selectedResume, "sle res")
    if (isError) {
        return <div>Error fetching resumes</div>
    }

    const onCheckQuality = async () => {
        if (!selectedResume) {
            alert("Please select a resume")
            return
        }
        try {
            const atsResult = await checkATS({ id: selectedResume }).unwrap()
            console.log(atsResult)
            if (atsResult.resumeQualityScore) {
                setAtsResult(atsResult.resumeQualityScore.breakdown)
                setQualityResult(atsResult.resumeQualityScore.breakdown)
            }
        } catch (error) {
            console.log(error)
        }

    }
    console.log(qualityResult, "qr")


    const handleCheckAtsWithDesc = async (id: string) => {
        try {
            const atsResult = await checkATS({ id, jobDescription, jobRole: jobTitle, companyName }).unwrap()
            console.log(atsResult)
            if (atsResult.resumeQualityScore) {
                setAtsResult(atsResult.resumeQualityScore)

            }
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <BackgroundLayout>
            <div className="bg-blue-500 rounded-lg shadow-lg p-6 text-white flex items-center gap-4">
                <span className="rounded-lg p-1"><Target size={32} /></span>
                <div className="inline">
                    <h1 className="font-bold text-xl tracking-wider">ATS Resume Checker</h1>
                    <p>Check how you resume performs against ATS systems and discover ways to improve it</p>
                </div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                <ResumeListCard selectedResume={selectedResume} setSelectedResume={setSelectedResume} resume={resume} onCheckAts={onCheckQuality} />
                <UploadCard />
            </div>
            <ChooseAnalysis Analysis={analysisMode} setAnalysisMode={setAnalysisMode} onCheckQuality={onCheckQuality} qualityResult={qualityResult} />

            {/* <JobDescription onCheckAtsWithDesc={handleCheckAtsWithDesc} selectedResume={selectedResume} jobDescription={jobDescription} setJobDescription={setJobDescription} companyName={companyName} setCompanyName={setCompanyName} jobTitle={jobTitle} setJobTitle={setJobTitle} /> */}
            {/* <AtsScore atsResult={atsResult} /> */}
            {/* <ScoreBreakdown atsResult={atsResult} /> */}
        </BackgroundLayout>
    )
}