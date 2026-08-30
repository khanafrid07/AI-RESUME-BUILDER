import { useState } from "react"

export default function JobDescriptionScoreCard({ score }: { score: any }) {


    const [activeTab, setActiveTab] = useState<string>("all")
    console.log(score, "score")


    return (
        <div className="flex flex-col gap-10">
            <div className="bg-blue-300  p-4 rounded">
                <p className="font-bold text-sm ">Job Match Score</p>
                <p className="font-bold text-2xl">Target Job Match Analysis</p>
                <p className="font-light">AI evaluation of your resume against the job requirements.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="border shadow-lg p-6 rounded-2xl">
                    <p className="font-semibold">Overall Score</p>
                    <span className="font-bold text-4xl">{score?.finalScore || 0}</span>
                    <span className="font-light">/100</span>

                </div>
                <div className="border shadow-lg p-6 rounded-2xl">
                    <p className="font-semibold">Job Requirement Match</p>
                    <span className="font-bold text-4xl">{score?.JobmatchScore || 0}</span>
                    <span className="font-light">/100</span>

                </div>
                <div className="border shadow-lg p-6 rounded-2xl">
                    <p className="font-semibold">Resume Quality</p>
                    <span className="font-bold text-4xl">{score.resumeQualityScore?.score || 0}</span>
                    <span className="font-light">/100</span>
                </div>
            </div>
            <div className="grid grid-cols-2">
                <div>

                    <h1 className="font-bold text-xl">Requirement Breakdown</h1>
                </div>
                <div className="flex justify-center gap-4 border-b border-slate-200">
                    {["all", "matched", "partial", "missing"].map((filter) => (
                        <div onClick={() => setActiveTab(filter)} key={filter} className="px-5 cursor-pointer py-2 text-xs font-medium capitalize border-t-2 border-transparent text-slate-500 hover:text-purple-600 hover:border-purple-300 transition-colors">
                            {filter}
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}