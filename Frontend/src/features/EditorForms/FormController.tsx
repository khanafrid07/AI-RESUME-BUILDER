import React, { useEffect, useState, type ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TemplateRenderer from "../templates/TemplateRendere";
import { useExportResumeMutation, useGenerateFiledMutation, useGetSingleResumeQuery, useSaveResumeMutation, useUpdateResumeMutation } from "../Resume/ResumeApi";
import type { ResumeData } from "./types";
import Steps from "../Resume/components/Steps";
//{forms
import ContactForm from "./components/ContactForm";
import Skills from "./Skills/Skills";
import Summary from "./Summary";
import Projects from "./Projects";
import Finalize from "./Finalize";;
import Education from "./Education";
import Experience from "./Experience";
import SwitchTemplateModal from "./components/SwitchTemplateModal";
import { skipToken } from "@reduxjs/toolkit/query";

//}

type step = "contactForm" | "AiForm";
type editPreview = "edit" | "preview";

export default function FormController() {
    const { slug = "classic-ats", id } = useParams();
    const [generateField, { isLoading }] = useGenerateFiledMutation();
    const [saveResume, { isLoading: savingResume }] = useSaveResumeMutation();
    const navigate = useNavigate();
    const { data: savedResume, isLoading: fetchingSavedResume } = useGetSingleResumeQuery(id ?? skipToken);
    const [updateResume, { isLoading: updatingResume }] = useUpdateResumeMutation();
    const [exportResume, { isLoading: exportingResume }] = useExportResumeMutation();

    const [activeTemplate, setActiveTemplate] = useState<string>(slug);

    const initialData: ResumeData = {
        personalInfo: { firstName: "", lastName: "", phone: "", email: "", address: "", city: "", country: "", portfolioWeb: "" },
        summary: "",
        education: [{
            schoolName: "",
            degree: "",
            location: "",
            startDate: "",
            endDate: "",
            description: [],
        }],
        experience: [{
            companyName: "",
            jobRole: "",
            startDate: "",
            endDate: "",
            currentlyWorking: true,
            location: "",
            description: [],
        }],
        projects: [{
            projectName: "",
            projectLink: "",
            githubLink: "",
            description: [],
            startDate: "",
            endDate: "",
            technologies: []
        }],
        skills: [],
        certifications: [],
        languages: [],
        targetRole: "",
        hobbies: [],
        customSections: [],
        template: slug
    };
    const [resumeData, setResumeData] = useState<ResumeData>(initialData);

    const [step, setStep] = useState<number>(0);
    const [page, setPage] = useState<step>("contactForm");
    const [editPreviewTab, setEditPreviewTab] = useState<editPreview>("edit");

    useEffect(() => {
        if (savedResume?.resume) {
            setResumeData(savedResume.resume);
            if (savedResume.resume.template) {
                setActiveTemplate(savedResume.resume.template);
            }
        }
    }, [savedResume]);

    useEffect(() => {
        if (slug) {
            setActiveTemplate(slug);
        }
    }, [slug]);

    const handleSelectTemplate = (newTemplate: string) => {
        setActiveTemplate(newTemplate);
        setResumeData((prev) => ({ ...prev, template: newTemplate }));
        if (id) {
            navigate(`/resume/${newTemplate}/${id}/edit`, { replace: true });
        } else {
            navigate(`/resume/templates/create/${newTemplate}`, { replace: true });
        }
    };

    const handleGenerate = async (
        type: string,
        aiFormData: Record<string, any>
    ) => {
        try {
            const res = await generateField({
                type,
                aiFormData,
            }).unwrap();
            return res.data;
        } catch (err) {
            console.log(err);
            throw err;
        }
    };

    const handleGenerateSummary = async () => {
        const data = await handleGenerate("summary", {
            targetRole: resumeData.targetRole,
            experience: resumeData.experience,
            education: resumeData.education,
            projects: resumeData.projects,
        });
        setResumeData((prev) => ({
            ...prev,
            summary: data.summary
        }));
    };

    const handleGenerateExperience = async (idx: number) => {
        const data = await handleGenerate("experience", {
            experience: resumeData.experience,
            targetRole: resumeData.targetRole,
            degree: resumeData.education[0]?.degree,
            skills: resumeData.skills,
            index: idx
        });
        setResumeData((prev) => {
            const updated = [...prev.experience];
            updated[idx] = {
                ...updated[idx],
                description: data.description
            };
            return {
                ...prev,
                experience: updated
            };
        });
    };

    const handleGenerateEducation = async (idx: number) => {
        const data = await handleGenerate("education", {
            education: resumeData.education,
            targetRole: resumeData.targetRole,
            skills: resumeData.skills
        });
        setResumeData((prev) => {
            const updated = [...prev.education];
            updated[idx] = {
                ...updated[idx],
                description: data.description
            };
            return {
                ...prev,
                education: updated
            };
        });
    };

    const handleGenerateProject = async (idx: number) => {
        const data = await handleGenerate("project", {
            projects: resumeData.projects,
            targetRole: resumeData.targetRole,
            skills: resumeData.skills
        });
        setResumeData((prev) => {
            const updated = [...prev.projects];
            updated[idx] = {
                ...updated[idx],
                description: data.description
            };
            return {
                ...prev,
                projects: updated
            };
        });
    };

    const handleSavetoDb = async () => {
        try {
            if (id) {
                const updatedData = { ...resumeData, template: activeTemplate };
                const res = await updateResume({ id, formData: updatedData }).unwrap();
                return res.resume;
            }
            const updatedData = { ...resumeData, template: activeTemplate };
            const res = await saveResume({ formData: updatedData, template: activeTemplate }).unwrap();
            if (res?.resume?._id && !id) {
                navigate(`/resume/${activeTemplate}/${res.resume._id}/edit`, { replace: true });
            }
            return res.resume;
        } catch (err) {
            console.log(err);
            throw err;
        }
    };
    const handleExport = async () => {
        if (!id) return
        try {
            const response = await fetch(
                `http://localhost:8080/api/resume/${id}/export/pdf`,
                {
                    method: "GET",
                    credentials: "include",
                }
            );

            if (!response.ok) {
                throw new Error("Failed to export resume");
            }

            const blob = await response.blob();

            const url = window.URL.createObjectURL(blob);

            const a = document.createElement("a");
            a.href = url;
            a.download = "resume.pdf";

            document.body.appendChild(a);
            a.click();
            a.remove();

            window.URL.revokeObjectURL(url);

        } catch (error) {
            console.error("PDF export failed:", error);
        }
    };

    const forms = [
        <ContactForm role={resumeData.targetRole} contactInfo={resumeData.personalInfo} setResumeData={setResumeData} />,
        <Education educations={resumeData.education} setResumeData={setResumeData} handleGenerate={handleGenerateEducation} />,
        <Skills skills={resumeData.skills} setResumeData={setResumeData} handleGenerate={handleGenerate} />,
        <Experience experience={resumeData.experience} setResumeData={setResumeData} handleGenerate={handleGenerateExperience} />,
        <Summary resumeData={resumeData} summary={resumeData.summary} setResumeData={setResumeData} handleGenerate={handleGenerateSummary} />,
        <Projects projects={resumeData.projects} setResumeData={setResumeData} handleGenerate={handleGenerateProject} />,
        <Finalize resumeData={resumeData} setResumeData={setResumeData} />,
    ];

    const handleStepsIncrease = () => {
        if (step === forms.length - 1) return;
        setStep((prev) => prev + 1);
    };

    const handleStepsDecrease = () => {
        if (step === 0) return;
        setStep((prev) => prev - 1);
    };

    if (fetchingSavedResume) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            {/* Top Bar Header */}
            <div className="sticky top-0 z-30 bg-white border-b border-gray-200 px-4  shadow-xs">
                <div className="px-12 mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="w-full md:w-auto overflow-x-auto py-1">
                        <Steps steps={step} />
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-auto justify-end">
                        <SwitchTemplateModal
                            currentTemplate={activeTemplate}
                            onSelectTemplate={handleSelectTemplate}
                        />
                    </div>
                </div>

                {/* Mobile Tab Switcher */}
                <div className="flex md:hidden mt-3 bg-gray-100 p-1 rounded-lg">
                    <button
                        onClick={() => setEditPreviewTab("edit")}
                        className={`flex-1 py-1.5 text-xs font-bold rounded-md transition ${editPreviewTab === "edit" ? "bg-white text-blue-600 shadow-xs" : "text-gray-500"}`}
                    >
                        Edit Form
                    </button>
                    <button
                        onClick={() => setEditPreviewTab("preview")}
                        className={`flex-1 py-1.5 text-xs font-bold rounded-md transition ${editPreviewTab === "preview" ? "bg-white text-blue-600 shadow-xs" : "text-gray-500"}`}
                    >
                        Live Preview
                    </button>
                </div>
            </div>

            {/* Main Content Layout */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 w-full max-w-[1800px] mx-auto overflow-hidden">
                {/* Form Column */}
                <div className={`p-4 sm:p-6 lg:p-8 mt-7 overflow-y-auto ${editPreviewTab === "preview" ? "hidden md:block" : "block"}`}>
                    <div className="max-w-2xl mx-auto space-y-6">
                        {forms[step]}

                        {/* Navigation Actions */}
                        <div className="flex items-center justify-between pt-6 border-t border-gray-200 mt-8">
                            <button
                                onClick={() => { setPage("AiForm"); handleStepsDecrease(); }}
                                disabled={step === 0}
                                className="btn btn-outline btn-sm sm:btn-md"
                            >
                                Previous
                            </button>

                            {step < forms.length - 1 ? (
                                <button onClick={() => handleStepsIncrease()} className="btn btn-primary btn-sm sm:btn-md">
                                    Next Page
                                </button>
                            ) : (
                                <button disabled={savingResume} onClick={handleSavetoDb} className="btn btn-primary btn-sm sm:btn-md">
                                    {savingResume ? "Saving..." : "Save Resume"}
                                </button>

                            )}

                        </div>
                    </div>
                </div>

                {/* Live Preview Column */}
                <div className={`bg-slate-100 p-4 sm:p-6 overflow-y-auto border-l border-gray-200 ${editPreviewTab === "edit" ? "hidden md:flex" : "flex"} flex-col items-center`}>
                    <div className="sticky top-4 w-full flex justify-center transform scale-[0.6] sm:scale-[0.7] md:scale-[0.6] lg:scale-[0.75] xl:scale-[0.85] origin-top transition-transform">
                        <TemplateRenderer templateId={activeTemplate} resumeData={resumeData} />
                    </div>
                </div>
            </div>
        </div>
    );
}