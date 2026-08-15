
import {
    Briefcase,
    Building2,
    FileText,
    Sparkles,
    ClipboardPaste,
    Trash2,
    CheckCircle2,
    Wand2,
} from "lucide-react";
import React from "react";

interface JobDescriptionProps {
    jobTitle?: string;
    setJobTitle?: (title: string) => void;
    companyName?: string;
    setCompanyName?: (company: string) => void;
    jobDescription?: string;
    setJobDescription?: (desc: string) => void;
    selectedResume: string;
    onCheckAtsWithDesc: (id: string) => void;
}

export default function JobDescription({
    jobTitle,
    setJobTitle,
    companyName,
    setCompanyName,
    jobDescription,
    setJobDescription,
    selectedResume,
    onCheckAtsWithDesc
}: JobDescriptionProps) {







    return (
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-md space-y-6 mt-8">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
                <div className="flex items-center gap-3.5">
                    <div className="p-3 rounded-xl bg-blue-50 text-blue-600 shrink-0">
                        <Briefcase size={26} />
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <h2 className="text-xl font-extrabold text-slate-800 tracking-wide">
                                Target Job Description
                            </h2>
                            <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-50 text-blue-600 border border-blue-200/60">
                                <Sparkles size={12} className="text-amber-500" /> Optional & Recommended
                            </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-1">
                            Add the target job role & description to get accurate keyword alignment and role-specific ATS match scores.
                        </p>
                    </div>
                </div>

                {/* Action Buttons */}
                {/* <div className="flex items-center gap-2 self-start sm:self-auto">

                    {description && (
                        <button
                            type="button"
                            onClick={handleClear}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-red-50 text-slate-600 hover:text-red-600 text-xs font-semibold transition-colors cursor-pointer border border-slate-200 hover:border-red-200"
                            title="Clear all inputs"
                        >
                            <Trash2 size={14} />
                            Clear
                        </button>
                    )}
                </div> */}
            </div>

            {/* Input Metadata (Job Title & Company) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Target Job Title
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                            <Briefcase size={16} />
                        </div>
                        <input
                            type="text"
                            value={jobTitle}
                            onChange={(e) => setJobTitle(e.target.value)}

                            placeholder="e.g. Senior Frontend Developer"
                            className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Company Name (Optional)
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                            <Building2 size={16} />
                        </div>
                        <input
                            type="text"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            placeholder="e.g. Google, Microsoft, Startup"
                            className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                        />
                    </div>
                </div>
            </div>

            {/* Main Textarea Container */}
            <div className="space-y-2">
                <div className="flex items-center justify-between">
                    <label className="flex items-center gap-1.5 text-xs font-bold text-slate-700 uppercase tracking-wider">
                        <FileText size={14} className="text-blue-500" />
                        Job Description Text
                    </label>
                    <div className="flex items-center gap-3 text-xs">
                        <button
                            type="button"

                            className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-semibold cursor-pointer"
                        >
                            <ClipboardPaste size={13} />
                            Paste Clipboard
                        </button>
                        {/* <span
                            className={`px-2 py-0.5 rounded-md font-semibold text-[11px] ${wordCount >= 50
                                ? "bg-emerald-100 text-emerald-700"
                                : wordCount > 0
                                    ? "bg-amber-100 text-amber-700"
                                    : "bg-slate-100 text-slate-500"
                                }`}
                        >
                            {wordCount} {wordCount === 1 ? "word" : "words"}{" "}
                            {wordCount > 0 && wordCount < 50 && "(Min 50 recommended)"}
                        </span> */}
                    </div>
                </div>

                <div className="relative">
                    <textarea
                        rows={7}
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                        placeholder="Paste the full job requirements, skills, duties, and responsibilities here...
We are looking for a Full Stack Developer with experience in React, TypeScript, Node.js,
MongoDB, Docker, AWS and REST APIs."

                        className="w-full p-4 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all leading-relaxed resize-y font-sans"
                    />
                </div>
            </div>

            {/* Status Footer Banner */}
            {/* {description.trim().length > 0 && ( */}
            {/* <div className="flex items-center gap-2.5 p-3 rounded-xl bg-blue-50/80 border border-blue-200/60 text-xs text-blue-800 font-medium">
                <CheckCircle2 size={16} className="text-blue-600 shrink-0" />
                <span>
                    Job description added! Your ATS check will compare your resume directly against these requirements.
                </span>
            </div> */}

            <div className="tooltip tooltip tooltip-dark" data-tip="Select or Upload Resume">
                <button onClick={() => onCheckAtsWithDesc(selectedResume)} disabled={!selectedResume || !jobDescription.trim() || !jobTitle} className="btn btn-primary">Check ATS</button>
            </div>

        </div >
    );
}
