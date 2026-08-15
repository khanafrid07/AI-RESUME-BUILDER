import { NotepadText, ChevronRight, Eye, CheckCircle } from "lucide-react";
import type { ResumeData } from "../features/EditorForms/types";
import { useState } from "react";

type ResumeListCardProps = {
    resume: ResumeData[];
    onCheckAts: (id: string) => Promise<void>;
    selectedResume: string;
    setSelectedResume: (id: string) => void
};

export default function ResumeListCard({
    resume,
    onCheckAts,
    setSelectedResume
}: ResumeListCardProps) {
    const [openMenuId, setOpenMenuId] = useState<string | null>(null);

    const toggleMenu = (id: string) => {
        setOpenMenuId((prev) => (prev === id ? null : id));
    };

    return (
        <div className="rounded-2xl bg-white p-8 shadow-md border border-slate-100">
            {/* Header */}
            <div className="flex items-start justify-between gap-4">
                <div>
                    <h1 className="text-xl font-extrabold text-slate-800 tracking-wide">
                        Your Resumes
                    </h1>
                    <p className="mt-1 text-xs text-slate-500">
                        Select a resume to check against ATS systems
                    </p>
                </div>
                <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600">
                    <NotepadText size={28} />
                </div>
            </div>

            {/* Resume List */}
            <div className="mt-6 space-y-3">
                {resume.length === 0 ? (
                    <div className="rounded-xl border border-dashed border-slate-300 p-8 text-center text-slate-500 text-sm font-medium">
                        You don't have any resumes saved yet.
                    </div>
                ) : (
                    resume.map((r, index) => {
                        const resId = r._id || `resume-${index}`;
                        const isOpen = openMenuId === resId;
                        return (
                            <div
                                key={resId}
                                className="flex flex-col sm:flex-row sm:items-center justify-between rounded-xl border border-slate-200 p-4 transition-all duration-200 hover:border-blue-400 hover:bg-blue-50/50 gap-4"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="rounded-xl bg-blue-100 p-3 text-blue-600 shrink-0">
                                        <NotepadText size={20} />
                                    </div>
                                    <div>
                                        <h2 className="font-bold text-slate-800">
                                            {r.personalInfo?.firstName || "Untitled Resume"}{" "}
                                            {r.personalInfo?.lastName || ""}
                                        </h2>
                                        <p className="text-xs text-slate-500 mt-0.5">
                                            Template: <span className="font-semibold text-slate-700">{r.template || "Standard"}</span>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 self-end sm:self-center">
                                    <button
                                        onClick={() => { toggleMenu(resId); setSelectedResume(r._id) }}
                                        className="p-2 rounded-lg text-slate-500 hover:text-blue-600 hover:bg-blue-100/60 transition-colors cursor-pointer"
                                        title="Toggle Actions"
                                    >
                                        <ChevronRight
                                            size={20}
                                            className={`transition-transform duration-300 ${isOpen ? "rotate-90 text-blue-600" : ""}`}
                                        />
                                    </button>

                                    {isOpen && (
                                        <div className="flex items-center gap-2">
                                            <a
                                                href={`/resume/${r._id}/export`}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="px-3 py-1.5 rounded-lg bg-blue-100 hover:bg-blue-200 text-blue-700 text-xs font-semibold transition-colors cursor-pointer inline-flex items-center gap-1"
                                            >
                                                <Eye size={14} />
                                                View
                                            </a>
                                            <button
                                                type="button"
                                                className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors cursor-pointer inline-flex items-center gap-1 shadow-xs"
                                                onClick={() => onCheckAts(r._id)}
                                            >
                                                <CheckCircle size={14} />
                                                Check Score
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
}
