import JobAnalysisCard from "./JobAnalysisCard";
import QualityAnalysis from "./QualityAnalysisCard";

export default function ChooseAnalysis({ Analysis, setAnalysisMode, onCheckQuality, qualityResult }: { Analysis?: "quality" | "jobMatch" | null, setAnalysisMode: (arg: "quality" | "jobMatch") => void, onCheckQuality: () => void, qualityResult: Record<string, number> }) {
    return (
        <div className="rounded-2xl bg-white p-8 shadow-md border border-slate-200 mt-12">

            {/* Header */}
            <div className="text-center">
                <h1 className="text-3xl font-bold tracking-tight text-slate-800">
                    Choose Analysis
                </h1>

                <p className="mt-2 text-sm text-slate-500">
                    How do you want to check your resume?
                </p>
            </div>

            {/* Cards */}
            <div className="">
                {Analysis === "quality" ? <QualityAnalysis onCheckQuality={onCheckQuality} /> : Analysis === "jobMatch" ? <JobAnalysisCard /> :



                    <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
                        <div
                            onClick={() => setAnalysisMode("quality")}
                            className="group cursor-pointer rounded-2xl border-2 border-slate-200 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-50/40 hover:shadow-lg"
                        >
                            <div className="flex items-start gap-4">

                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                                    📄
                                </div>

                                <div>
                                    <h2 className="text-lg font-bold text-slate-800">
                                        Resume Quality Analysis
                                    </h2>

                                    <p className="mt-2 text-sm leading-relaxed text-slate-500">
                                        Check how well your resume is structured,
                                        complete, and ATS-friendly.
                                    </p>
                                </div>

                            </div>

                            <div className="mt-5 text-sm font-semibold text-blue-600">
                                Check Resume Quality →
                            </div>
                        </div>


                        {/* Job Match */}
                        <div
                            onClick={() => setAnalysisMode("jobMatch")}
                            className="group cursor-pointer rounded-2xl border-2 border-slate-200 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-purple-400 hover:bg-purple-50/40 hover:shadow-lg"
                        >
                            <div className="flex items-start gap-4">

                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-600 transition-colors group-hover:bg-purple-600 group-hover:text-white">
                                    🎯
                                </div>

                                <div>
                                    <h2 className="text-lg font-bold text-slate-800">
                                        Job Match Analysis
                                    </h2>

                                    <p className="mt-2 text-sm leading-relaxed text-slate-500">
                                        Check how well your resume matches a
                                        specific job description and its requirements.
                                    </p>
                                </div>

                            </div>

                            <div className="mt-5 text-sm font-semibold text-purple-600">
                                Match With Job →
                            </div>
                        </div>
                    </div>
                }

            </div>
        </div>
    );
}