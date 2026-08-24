import {
    BriefcaseBusiness,
    CircleCheck,
    Contact,
    FileText,
    RemoveFormatting,
    Sparkles,
    Loader2,
} from "lucide-react";
import type { ResumeQualityScore } from "../AtsTypes";

interface QualityAnalysisProps {
    onCheckQuality: () => void;
    qualityResult?: Record<string, number> | ResumeQualityScore;
    isLoading?: boolean;
}

export default function QualityAnalysis({
    onCheckQuality,
    qualityResult,
    isLoading
}: QualityAnalysisProps) {
    const checkList = [
        { id: 1, title: "Completeness", key: "completeness", icon: CircleCheck },
        { id: 2, title: "Structure", key: "structure", icon: FileText },
        { id: 3, title: "Formatting & Skills", key: "skills", altKey: "formatting", icon: RemoveFormatting },
        { id: 4, title: "Experience", key: "experience", icon: BriefcaseBusiness },
        { id: 5, title: "ATS Readiness", key: "atsReadiness", icon: Contact },
    ];

    const hasResults = qualityResult && Object.values(qualityResult).some((val) => typeof val === "number" && val > 0);
    const overallScore = qualityResult?.score ?? (hasResults ? Math.round(
        ((qualityResult?.completeness || 0) +
            (qualityResult?.structure || 0) +
            (qualityResult?.skills || (qualityResult as any)?.formatting || 0) +
            (qualityResult?.experience || 0) +
            (qualityResult?.atsReadiness || 0)) / 5
    ) : 0);

    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md transition-all duration-200 hover:border-blue-300">

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

            {/* Overall Score Badge if results exist */}
            {hasResults && (
                <div className="mt-5 flex items-center justify-between rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 p-4 border border-blue-100">
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-wider text-blue-700">
                            Overall Quality Score
                        </h3>
                        <p className="text-xs text-slate-500 mt-0.5">
                            Based on 5 key quality criteria
                        </p>
                    </div>
                    <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-extrabold text-blue-600">
                            {overallScore}
                        </span>
                        <span className="text-sm font-bold text-slate-400">/100</span>
                    </div>
                </div>
            )}

            {/* Checks */}
            <div className="mt-5">
                <div className="mb-3 flex items-center justify-between">
                    <h2 className="text-xs font-bold uppercase tracking-wider text-slate-600">
                        We'll check
                    </h2>

                    <span className="text-xs font-medium text-blue-600">
                        5 areas
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {checkList.map((item) => {
                        const Icon = item.icon;
                        const rawVal = qualityResult?.[item.key as keyof typeof qualityResult] ?? (item.altKey ? (qualityResult as any)?.[item.altKey] : 0) ?? 0;
                        const value = typeof rawVal === "number" ? rawVal : 0;

                        return (
                            <div
                                key={item.id}
                                className="flex flex-col gap-2 rounded-xl bg-slate-50 p-3 border border-slate-100"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Icon
                                            size={16}
                                            className="shrink-0 text-blue-500"
                                        />
                                        <span className="text-xs font-semibold text-slate-700">
                                            {item.title}
                                        </span>
                                    </div>
                                    <span className="text-xs font-bold text-blue-600">
                                        {value}%
                                    </span>
                                </div>
                                <progress
                                    className="progress progress-info w-full h-2"
                                    value={value}
                                    max={100}
                                ></progress>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Footer */}
            <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                <p className="text-xs text-slate-400">
                    Takes a few seconds
                </p>

                <button
                    onClick={() => onCheckQuality()}
                    disabled={isLoading}
                    className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-blue-700 disabled:opacity-50 cursor-pointer"
                >
                    {isLoading ? (
                        <>
                            <Loader2 size={14} className="animate-spin" />
                            Analyzing...
                        </>
                    ) : (
                        "Check Resume →"
                    )}
                </button>
            </div>
        </div>
    );
}