import { useState, type Dispatch, type SetStateAction, type KeyboardEvent } from "react";
import { 
    Zap, 
    MessageSquare, 
    Trophy, 
    Heart, 
    Plus, 
    Trash2, 
    Sparkles, 
    FolderPlus,
    PlusCircle,
    X
} from "lucide-react";
import type { ResumeData, Language, Certification, CustomSection } from "./types";

type FinalizeProps = {
    resumeData: ResumeData;
    setResumeData: Dispatch<SetStateAction<ResumeData>>;
};

export default function Finalize({ resumeData, setResumeData }: FinalizeProps) {
    // Local form states
    const [langName, setLangName] = useState("");
    const [langProficiency, setLangProficiency] = useState("Fluent");

    const [certTitle, setCertTitle] = useState("");
    const [certIssuer, setCertIssuer] = useState("");
    const [certDate, setCertDate] = useState("");

    const [hobbyName, setHobbyName] = useState("");

    // Add Language
    const addLanguage = () => {
        if (!langName.trim()) return;
        const newLang: Language = {
            id: Date.now().toString() + Math.random().toString(36).substring(2, 5),
            language: langName.trim(),
            proficiency: langProficiency
        };
        setResumeData(prev => ({
            ...prev,
            languages: [...(prev.languages || []), newLang]
        }));
        setLangName("");
        setLangProficiency("Fluent");
    };

    const removeLanguage = (id: string) => {
        setResumeData(prev => ({
            ...prev,
            languages: (prev.languages || []).filter(l => l.id !== id)
        }));
    };

    // Add Certification
    const addCertification = () => {
        if (!certTitle.trim() || !certIssuer.trim()) return;
        const newCert: Certification = {
            id: Date.now().toString() + Math.random().toString(36).substring(2, 5),
            title: certTitle.trim(),
            issuer: certIssuer.trim(),
            issueDate: certDate.trim() || undefined
        };
        setResumeData(prev => ({
            ...prev,
            certifications: [...(prev.certifications || []), newCert]
        }));
        setCertTitle("");
        setCertIssuer("");
        setCertDate("");
    };

    const removeCertification = (id: string) => {
        setResumeData(prev => ({
            ...prev,
            certifications: (prev.certifications || []).filter(c => c.id !== id)
        }));
    };

    // Add Hobby
    const addHobby = () => {
        if (!hobbyName.trim()) return;
        const trimmed = hobbyName.trim();
        if ((resumeData.hobbies || []).includes(trimmed)) return;
        setResumeData(prev => ({
            ...prev,
            hobbies: [...(prev.hobbies || []), trimmed]
        }));
        setHobbyName("");
    };

    const handleHobbyKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
            addHobby();
        }
    };

    const removeHobby = (hobby: string) => {
        setResumeData(prev => ({
            ...prev,
            hobbies: (prev.hobbies || []).filter(h => h !== hobby)
        }));
    };

    // Custom Sections
    const addCustomSection = () => {
        const newSection: CustomSection = {
            id: Date.now().toString() + Math.random().toString(36).substring(2, 5),
            title: "New Section",
            content: ""
        };
        setResumeData(prev => ({
            ...prev,
            customSections: [...(prev.customSections || []), newSection]
        }));
    };

    const updateCustomSection = (id: string, field: "title" | "content", value: string) => {
        setResumeData(prev => ({
            ...prev,
            customSections: (prev.customSections || []).map(s => 
                s.id === id ? { ...s, [field]: value } : s
            )
        }));
    };

    const removeCustomSection = (id: string) => {
        setResumeData(prev => ({
            ...prev,
            customSections: (prev.customSections || []).filter(s => s.id !== id)
        }));
    };

    return (
        <div className="flex flex-col gap-6 p-4 max-w-4xl mx-auto">
            {/* Header */}
            <div>
                <h1 className="font-bold text-3xl mb-2 flex items-center gap-2 text-slate-800">
                    <Zap className="text-warning fill-warning" size={32} />
                    Finalize & Add Sections
                </h1>
                <p className="text-sm text-gray-600">
                    Enhance your resume by adding languages, professional certifications, hobbies, or completely custom sections.
                </p>
            </div>

            {/* Quick Section Adders */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-4 flex flex-wrap gap-3 items-center justify-between shadow-sm">
                <div>
                    <h3 className="font-semibold text-blue-900 flex items-center gap-1.5">
                        <Sparkles className="text-blue-600" size={18} />
                        Add Optional Sections
                    </h3>
                    <p className="text-xs text-blue-700">Customize your resume template with specific details</p>
                </div>
                <div className="flex gap-2 flex-wrap">
                    <button onClick={addCustomSection} className="btn btn-sm btn-primary gap-1">
                        <FolderPlus size={16} />
                        + Custom Section
                    </button>
                </div>
            </div>

            {/* Languages Section */}
            <div className="card bg-base-100 border border-slate-200 shadow-sm">
                <div className="card-body p-5 gap-4">
                    <div className="flex items-start gap-3">
                        <div className="p-2 bg-blue-500 rounded-lg text-white">
                            <MessageSquare size={20} />
                        </div>
                        <div className="flex-1">
                            <h3 className="card-title text-lg font-bold text-slate-800">Languages</h3>
                            <p className="text-xs text-slate-500">Include languages you can speak and write professionally.</p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2 mt-2">
                        <input
                            type="text"
                            placeholder="e.g. English, German"
                            value={langName}
                            onChange={(e) => setLangName(e.target.value)}
                            className="input input-bordered flex-1 input-sm focus:outline-none focus:border-blue-500"
                        />
                        <select
                            value={langProficiency}
                            onChange={(e) => setLangProficiency(e.target.value)}
                            className="select select-bordered select-sm focus:outline-none focus:border-blue-500"
                        >
                            <option value="Native / Bilingual">Native / Bilingual</option>
                            <option value="Fluent">Fluent</option>
                            <option value="Professional / Working">Professional / Working</option>
                            <option value="Conversational">Conversational</option>
                            <option value="Beginner">Beginner</option>
                        </select>
                        <button onClick={addLanguage} className="btn btn-primary btn-sm gap-1">
                            <Plus size={14} /> Add
                        </button>
                    </div>

                    {/* Languages List */}
                    {resumeData.languages && resumeData.languages.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                            {resumeData.languages.map((lang) => (
                                <div key={lang.id} className="flex justify-between items-center bg-slate-50 rounded-lg p-2.5 border border-slate-100">
                                    <div>
                                        <p className="font-semibold text-sm text-slate-800">{lang.language}</p>
                                        <p className="text-xs text-slate-500">{lang.proficiency}</p>
                                    </div>
                                    <button onClick={() => removeLanguage(lang.id)} className="btn btn-ghost btn-xs text-error hover:bg-error/10">
                                        <Trash2 size={14} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Certifications Section */}
            <div className="card bg-base-100 border border-slate-200 shadow-sm">
                <div className="card-body p-5 gap-4">
                    <div className="flex items-start gap-3">
                        <div className="p-2 bg-yellow-500 rounded-lg text-white">
                            <Trophy size={20} />
                        </div>
                        <div className="flex-1">
                            <h3 className="card-title text-lg font-bold text-slate-800">Certifications & Licenses</h3>
                            <p className="text-xs text-slate-500">Add credentials, certificates, or awards to back up your skills.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-2">
                        <input
                            type="text"
                            placeholder="Certificate Title (e.g. AWS Architect)"
                            value={certTitle}
                            onChange={(e) => setCertTitle(e.target.value)}
                            className="input input-bordered input-sm w-full focus:outline-none focus:border-yellow-500"
                        />
                        <input
                            type="text"
                            placeholder="Issuer (e.g. Amazon Web Services)"
                            value={certIssuer}
                            onChange={(e) => setCertIssuer(e.target.value)}
                            className="input input-bordered input-sm w-full focus:outline-none focus:border-yellow-500"
                        />
                        <div className="flex gap-2">
                            <input
                                type="text"
                                placeholder="Date (e.g. 2026)"
                                value={certDate}
                                onChange={(e) => setCertDate(e.target.value)}
                                className="input input-bordered input-sm flex-1 focus:outline-none focus:border-yellow-500"
                            />
                            <button onClick={addCertification} className="btn btn-primary btn-sm gap-1">
                                <Plus size={14} /> Add
                            </button>
                        </div>
                    </div>

                    {/* Certifications List */}
                    {resumeData.certifications && resumeData.certifications.length > 0 && (
                        <div className="flex flex-col gap-2 mt-2">
                            {resumeData.certifications.map((cert) => (
                                <div key={cert.id} className="flex justify-between items-center bg-slate-50 rounded-lg p-2.5 border border-slate-100">
                                    <div>
                                        <p className="font-semibold text-sm text-slate-800">{cert.title}</p>
                                        <p className="text-xs text-slate-600">{cert.issuer} {cert.issueDate ? `• ${cert.issueDate}` : ''}</p>
                                    </div>
                                    <button onClick={() => removeCertification(cert.id)} className="btn btn-ghost btn-xs text-error hover:bg-error/10">
                                        <Trash2 size={14} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Hobbies Section */}
            <div className="card bg-base-100 border border-slate-200 shadow-sm">
                <div className="card-body p-5 gap-4">
                    <div className="flex items-start gap-3">
                        <div className="p-2 bg-red-500 rounded-lg text-white">
                            <Heart size={20} />
                        </div>
                        <div className="flex-1">
                            <h3 className="card-title text-lg font-bold text-slate-800">Hobbies & Interests</h3>
                            <p className="text-xs text-slate-500">Show some personality by listing things you like to do outside work.</p>
                        </div>
                    </div>

                    <div className="flex gap-2 mt-2">
                        <input
                            type="text"
                            placeholder="Add a hobby (e.g. Photography, Chess) and press Enter"
                            value={hobbyName}
                            onChange={(e) => setHobbyName(e.target.value)}
                            onKeyDown={handleHobbyKeyDown}
                            className="input input-bordered input-sm flex-1 focus:outline-none focus:border-red-500"
                        />
                        <button onClick={addHobby} className="btn btn-primary btn-sm gap-1">
                            <Plus size={14} /> Add
                        </button>
                    </div>

                    {/* Hobbies Badge Cloud */}
                    {resumeData.hobbies && resumeData.hobbies.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-2 p-3 bg-slate-50 rounded-lg border border-slate-100">
                            {resumeData.hobbies.map((hobby) => (
                                <span key={hobby} className="badge badge-lg gap-2 bg-white border-slate-200 text-slate-800 pr-1 py-4 hover:shadow-xs transition">
                                    {hobby}
                                    <button 
                                        onClick={() => removeHobby(hobby)} 
                                        className="btn btn-circle btn-ghost btn-xs w-5 h-5 min-h-0 text-slate-400 hover:text-error hover:bg-error/10"
                                    >
                                        <X size={12} />
                                    </button>
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Custom Sections */}
            {resumeData.customSections && resumeData.customSections.map((section) => (
                <div key={section.id} className="card bg-base-100 border border-slate-200 shadow-sm relative group">
                    <div className="absolute top-4 right-4">
                        <button 
                            onClick={() => removeCustomSection(section.id)} 
                            className="btn btn-ghost btn-sm text-error hover:bg-error/10 gap-1"
                        >
                            <Trash2 size={16} />
                            Delete Section
                        </button>
                    </div>

                    <div className="card-body p-5 gap-4">
                        <div className="flex items-start gap-3 mr-32">
                            <div className="p-2 bg-purple-500 rounded-lg text-white">
                                <PlusCircle size={20} />
                            </div>
                            <div className="flex-1">
                                <input
                                    type="text"
                                    value={section.title}
                                    onChange={(e) => updateCustomSection(section.id, "title", e.target.value)}
                                    placeholder="Section Title (e.g. Volunteer Experience)"
                                    className="font-bold text-lg text-slate-800 bg-transparent border-b border-transparent hover:border-slate-300 focus:border-purple-500 focus:outline-none w-full pb-0.5"
                                />
                                <p className="text-xs text-slate-500 mt-1">Provide content or bullet points for this section.</p>
                            </div>
                        </div>

                        <textarea
                            value={section.content}
                            onChange={(e) => updateCustomSection(section.id, "content", e.target.value)}
                            placeholder="Add section details here. You can use simple bullet points or list items."
                            rows={4}
                            className="textarea textarea-bordered w-full resize-none focus:outline-none focus:border-purple-500 mt-2"
                        />
                    </div>
                </div>
            ))}

            {/* Final Download/Ready Message */}
            <div className="card bg-info bg-opacity-5 border border-info/30 rounded-xl mt-4">
                <div className="card-body p-5 gap-2">
                    <h4 className="font-semibold text-info flex items-center gap-1.5 text-base">
                        🎉 Complete Your Resume!
                    </h4>
                    <p className="text-sm text-slate-600">
                        All sections are automatically updated. You can review the preview on the right and proceed to download when ready.
                    </p>
                </div>
            </div>
        </div>
    );
}