import {
    BriefcaseBusiness,
    CircleCheck,
    Contact,
    FileText,
    RemoveFormatting,
    Sparkles,
} from "lucide-react";


type Result = {
    atsReadiness: number
    completeness: number
    experience: number
    structure: number
    skills: number
}
export default function QualityAnalysis({ onCheckQuality, qualityResult }: { onCheckQuality: () => void, qualityResult: Record<string, number> }) {
    const checkList = [
        { id: 1, title: "Completeness", icon: CircleCheck, progressBar: <progress className={`progress progress-info w-56 value="${qualityResult?.completeness}" max="100`}></progress> },
        { id: 2, title: "Structure", icon: FileText, progressBar: <progress className={`progress progress-info w-56 value="${qualityResult?.structure}" max="100`}></progress> },
        { id: 3, title: "Formatting", icon: RemoveFormatting, progressBar: <progress className={`progress progress-info w-56 value="${qualityResult?.formatting}" max="100`}></progress> },
        { id: 4, title: "Experience", icon: BriefcaseBusiness, progressBar: <progress className={`progress progress-info w-56 value="${qualityResult?.experience}" max="100`}></progress> },
        { id: 5, title: "ATS Readiness", icon: Contact, progressBar: <progress className={`progress progress-info w-56 value="${qualityResult?.atsReadiness}" max="100`}></progress> },
    ];
    console.log(qualityResult, "qresult")

    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-md transition-all duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg">

            {/* Header */}
            <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                    <Sparkles size={20} />
                </div>

                <div>
                    <h1 className="text-lg font-bold text-slate-800">
                        Resume Quality Analysis
                    </h1>

                    <p className="text-xs text-slate-500">
                        Check your resume's structure and ATS readiness.
                    </p>
                </div>
            </div>

            {/* Checks */}
            <div className="mt-5">
                <div className="mb-2 flex items-center justify-between">
                    <h2 className="text-xs font-bold uppercase tracking-wider text-slate-600">
                        We'll check
                    </h2>

                    <span className="text-xs font-medium text-blue-600">
                        5 areas
                    </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                    {checkList.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.id}
                                className="flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2"
                            >
                                <Icon
                                    size={16}
                                    className="shrink-0 text-blue-500"
                                />

                                <span className="text-xs font-medium text-slate-600">
                                    {item.title}
                                </span>
                                {item.progressBar}
                            </div>
                        );
                    })}
                    {/* <div className="flex items-center gap-2 mt-2">
                        <span className="font-bold tracking-wider  text-3xl text-blue-600">Overall Score: 90</span>
                        <p className=" text-slate-400 mt-3 text-xl font-bold">/100</p>
                    </div> */}
                </div>
            </div>

            {/* Footer */}
            <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
                <p className="text-xs text-slate-400">
                    Takes a few seconds
                </p>

                <button onClick={() => onCheckQuality()} className="rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-blue-700">
                    Check Resume →
                </button>
            </div>
        </div>
    );
}