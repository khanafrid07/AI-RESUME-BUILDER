import { Briefcase, Building2, FileText, Sparkles, Loader2, Target, Trash2, Clipboard, AlertCircle } from "lucide-react";
import JobDescriptionScoreCard from "./JobDescriptionScoreCard";

export interface JobDescriptionProps {
    jobTitle: string;
    setJobTitle: (title: string) => void;
    companyName: string;
    setCompanyName: (company: string) => void;
    jobDescription: string;
    setJobDescription: (desc: string) => void;
    onCheckAtsWithDesc?: (id?: string) => void;
    isLoading?: boolean;
    selectedResume?: string;
    atsResult?: any
}

export default function JobDescription({
    jobTitle,
    setJobTitle,
    companyName,
    setCompanyName,
    jobDescription,
    setJobDescription,
    onCheckAtsWithDesc,
    isLoading = false,
    selectedResume,
    atsResult
}: JobDescriptionProps) {



    const handlePaste = async () => {
        try {
            const text = await navigator.clipboard.readText();
            if (text) setJobDescription(text);
        } catch (err) {
            console.error("Failed to read clipboard text: ", err);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (onCheckAtsWithDesc) {
            onCheckAtsWithDesc(selectedResume);
            // Note: In your parent handler, you can now safely read 
            // jobTitle, companyName, and jobDescription from the parent state!
        }
    };

    console.log(atsResult, "AtsJobResult")
    const charCount = jobDescription.length;
    const wordCount = jobDescription.trim() ? jobDescription.trim().split(/\s+/).length : 0;

    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md transition-all duration-200 hover:border-purple-300">
            {/* ... Header & Resume Alert stays exactly the same ... */}
            {atsResult ? <JobDescriptionScoreCard score={atsResult} matchedJobDesc={atsResult?.matchJobDesc} /> :

                <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Job Title */}
                        <div>
                            <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                                <Briefcase size={14} className="text-purple-500" />
                                <span>Job Title / Role</span>
                            </label>
                            <input
                                type="text"
                                value={jobTitle}
                                onChange={(e) => setJobTitle(e.target.value)}
                                placeholder="e.g. Senior Frontend Developer"
                                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-800 focus:border-purple-500 focus:bg-white focus:outline-none"
                            />
                        </div>

                        {/* Company Name */}
                        <div>
                            <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                                <Building2 size={14} className="text-purple-500" />
                                <span>Company Name</span>
                            </label>
                            <input
                                type="text"
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                                placeholder="e.g. Google"
                                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-800 focus:border-purple-500 focus:bg-white focus:outline-none"
                            />
                        </div>
                    </div>

                    {/* Job Description Textarea */}
                    <div>
                        <div className="mb-1.5 flex items-center justify-between">
                            <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                                <FileText size={14} className="text-purple-500" />
                                <span>Job Description</span>
                            </label>

                            <div className="flex items-center gap-3 text-[11px]">
                                {jobDescription.length > 0 && (
                                    <>
                                        <span className="text-slate-400 font-medium">{wordCount} words • {charCount} chars</span>
                                        <button type="button" onClick={() => setJobDescription("")} className="text-rose-500 hover:text-rose-700">Clear</button>
                                    </>
                                )}
                                <button type="button" onClick={handlePaste} className="text-purple-600 hover:text-purple-800">Paste</button>
                            </div>
                        </div>

                        <textarea
                            value={jobDescription}
                            onChange={(e) => setJobDescription(e.target.value)}
                            placeholder="Paste the job description here..."
                            className="w-full h-48 rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-xs text-slate-800 focus:border-purple-500 focus:bg-white focus:outline-none"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading || !selectedResume || !jobDescription}
                        className="w-full flex items-center justify-center gap-2 rounded-xl bg-purple-600 py-3 text-sm font-semibold text-white hover:bg-purple-700 disabled:bg-slate-100 disabled:text-slate-400 dynamic-transition"
                    >
                        {isLoading ? <Loader2 className="animate-spin" size={18} /> : <Sparkles size={18} />}
                        <span>{isLoading ? "Analyzing Match..." : "Check ATS Match"}</span>
                    </button>
                </form>
            }
        </div>
    );
}
