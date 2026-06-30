import React, { useState, type ChangeEvent } from "react";
import { useParams } from "react-router-dom";
import TemplateRenderer from "../templates/TemplateRendere";
import { useCreateResumeMutation } from "../Dashboard/ResumeApi";
import type { ContactInfo, ResumeData } from "./types";
import Steps from "../Dashboard/components/Steps";
//{forms
import ContactForm from "./ContactForm";
import Skills from "./Skills/Skills";
import Summary from "./Summary";
import Projects from "./components/Projects";
import Finalize from "./Finalize";;
import Education from "./components/Education";
import Experience from "./components/Experience";
//}

type step = "contactForm" | "AiForm";
type editPreview = "edit" | "preview";




export default function FormController() {
    const { slug = "classic-formatted" } = useParams();
    const [createResume, { isLoading: creatingResume }] = useCreateResumeMutation();


    const [contactInfo, setContactInfo] = useState<ContactInfo>({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        address: "",
        city: "",
        country: "",
        portfolioWeb: ""
    });
    const [resumeData, setResumeData] = useState<ResumeData>({
        personalInfo:{firstName:"", lastName:"", phone:"", email:"", address:"", city:"",country:"",portfolioWeb:""},
        summary:"",
        education:[],
        experience:[],
        projects:[],
        skills:[],
        certifications:[],
        languages:[]

        
    })
    console.log(resumeData)


    const [step, setStep] = useState<number>(0)

    const [page, setPage] = useState<step>("contactForm");
    const [editPreviewTab, setEditPreviewTab] = useState<editPreview>("edit");

    const forms = [
    <ContactForm contactInfo={resumeData.personalInfo} setResumeData={setResumeData} />,
        <Education educations={resumeData.education} setResumeData={setResumeData}/>,
        <Skills skills={resumeData.skills} setResumeData={setResumeData}/>,
        <Experience experience={resumeData.experience} setResumeData={setResumeData}/>,
        <Summary summary={resumeData.summary} setResumeData={setResumeData}/>,
        <Projects projects={resumeData.projects} setResumeData={setResumeData}/>,
        // <Finalize skills={resumeData.fi} setResumeData={setResumeData}/>,
    ]

    const handleStepsIncrease = () => {
        if (step === forms.length) return

        setStep((prev) => prev + 1)


    }
    const handleStepsDecrease = () => {
        if (step == 0) return
        setStep((prev) => prev - 1)


    }
    console.log(step)

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
                            <TemplateRenderer templateId={slug} contactInfo={contactInfo} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}