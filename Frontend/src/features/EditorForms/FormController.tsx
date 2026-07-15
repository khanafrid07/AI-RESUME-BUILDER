import React, { useState, type ChangeEvent } from "react";
import { useParams } from "react-router-dom";
import TemplateRenderer from "../templates/TemplateRendere";
import { useGenerateFiledMutation } from "../Dashboard/ResumeApi";
import type { PersonalInfo, ResumeData } from "./types";
import Steps from "../Dashboard/components/Steps";
//{forms
import ContactForm from "./components/ContactForm";
import Skills from "./Skills/Skills";
import Summary from "./Summary";
import Projects from "./Projects";
import Finalize from "./Finalize";;
import Education from "./Education";
import Experience from "./Experience";
import ClassicATS from "../templates/ClassicATS/ClassicATS";
//}

type step = "contactForm" | "AiForm";
type editPreview = "edit" | "preview";




export default function FormController() {
    const { slug = "classic-formatted" } = useParams();
    const [generateField, { isLoading }] = useGenerateFiledMutation()
    const [resumeData, setResumeData] = useState<ResumeData>({
        personalInfo: { firstName: "", lastName: "", phone: "", email: "", address: "", city: "", country: "", portfolioWeb: "" },
        summary: "",
        education: [{
            schoolName: "",
            degree: "",
            location: "",
            startDate: "",
            endDate: "",
            description: "",
        }],
        experience: [{
            companyName: "",
            jobRole: "",
            startDate: "",
            endDate: "",
            currentlyWorking: "",
            location: "",
            description: [],
        }],
        projects: [{
            projectName: "",
            projectLink: "",
            githubLink: "",
            description: "",
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
    })

    const [step, setStep] = useState<number>(0)

    const [page, setPage] = useState<step>("contactForm");
    const [editPreviewTab, setEditPreviewTab] = useState<editPreview>("edit");
    console.log(resumeData)

    const handleGenerate = async (
        type: string,
        aiFormData: Record<string, any>
    ) => {
        console.log(aiFormData, "ai")
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
        })
        console.log(data, "summary")
        setResumeData((prev) => {
            return {
                ...prev, summary: data.summary
            }
        })
    }
    const handleGenerateExperience = async (idx: number) => {
        const data = await handleGenerate("experience", { experience: resumeData.experience, targetRole: resumeData.targetRole, degree: resumeData.education[0]?.degree, skills: resumeData.skills, index: idx })
        setResumeData((prev) => {
            const updated = [...prev.experience]
            updated[idx] = {
                ...updated[idx], description: data.description
            }
            return {
                ...prev, experience: updated
            }

        })
    }
    const handleGenerateEducation = async (idx: number) => {
        const data = await handleGenerate("education", { education: resumeData.education, targetRole: resumeData.targetRole, skills: resumeData.skills })
        setResumeData((prev) => {
            const updated = [...prev.education]
            updated[idx] = {
                ...updated[idx], description: data.description
            }
            return {
                ...prev, education: updated
            }

        })
    }
    const handleGenerateProject = async (idx: number) => {
        const data = await handleGenerate("project", { projects: resumeData.projects, targetRole: resumeData.targetRole, skills: resumeData.skills })
        setResumeData((prev) => {
            const updated = [...prev.projects]
            updated[idx] = {
                ...updated[idx], description: data.description
            }
            return {
                ...prev, projects: updated
            }

        })
    }

    const forms = [
        <ContactForm role={resumeData.targetRole} contactInfo={resumeData.personalInfo} setResumeData={setResumeData} />,
        <Education educations={resumeData.education} setResumeData={setResumeData} handleGenerate={handleGenerateEducation} />,
        <Skills skills={resumeData.skills} setResumeData={setResumeData} handleGenerate={handleGenerate} />,
        <Experience experience={resumeData.experience} setResumeData={setResumeData} handleGenerate={handleGenerateExperience} />,
        <Summary resumeData={resumeData} summary={resumeData.summary} setResumeData={setResumeData} handleGenerate={handleGenerateSummary} />,
        <Projects projects={resumeData.projects} setResumeData={setResumeData} handleGenerate={handleGenerateProject} />,
        <Finalize resumeData={resumeData} setResumeData={setResumeData} />,
    ]

    const handleStepsIncrease = () => {
        if (step === forms.length) return

        setStep((prev) => prev + 1)


    }
    const handleStepsDecrease = () => {
        if (step == 0) return
        setStep((prev) => prev - 1)

    }

    console.log(resumeData, "resumeData")

    // const handleFormSubmit = async (e: React.ChangeEvent<HTMLInputElement | HTMLAreaElement | EventTarget>) => {
    //     e.preventDefault()
    //     try {
    //         await createResume({ personalInfo: contactInfo, aiFormData: aiFormData }).unwrap()
    //         console.log("send th data")

    //     } catch (err) {
    //         console.log(err)

    //     }



    return (
        <div>
            {/* <div className="flex justify-center">
            <div className=" gap-4 border shadow-lg w-fit rounded-lg p-2 border-gray-200">
                <button
                    onClick={() => setEditPreviewTab("edit")}
                    className={`btn shadow-md px-12 ${editPreviewTab === "edit" ? "bg-blue-300" : ""}`}
                >
                    Edit
                </button>
                <button
                    onClick={() => setEditPreviewTab("preview")}
                    className="btn shadow-md px-12"
                >
                    Preview
                </button>
            </div>

            </div> */}
            <div className="w-full">

                <Steps />
            </div>


            <div className="md:grid grid-cols-[1fr_1fr] w-full  h-screen">
                <div className={`overflow-y-auto ${editPreviewTab === "preview" ? "hidden" : ""}`}>

                    {forms[step]}
                    <div className="flex justify-between py-12 ">

                        <button onClick={() => { setPage("AiForm"); handleStepsDecrease() }} className="btn btn-primary ">Previous</button>
                        <button onClick={() => handleStepsIncrease()} className="btn btn-primary ">Next Page</button>
                    </div>



                </div>
                <div className=" bg-gray-50 overflow-y-auto flex flex-col scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>

                    <div className={`md:flex justify-center ${editPreviewTab === "edit" && "hidden"}  `}>
                        <div className="transform scale-[0.6] md:scale-[0.5] lg:scale-[0.7] origin-top ">
                            <ClassicATS resumeData={resumeData} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}