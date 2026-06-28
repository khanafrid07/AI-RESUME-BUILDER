import type { Dispatch, SetStateAction } from "react";
import InputField from "../../components/InputFiled";
import type { Experience, ResumeData } from "./types";

type experinceProp = {
    experience:Experience[]
    setResumeData:Dispatch<SetStateAction<ResumeData>>
}

export default function Experience({experience, setResumeData}:experinceProp){
    console.log(experience)
    return(
        <div>
            <h1 className="font-semibold text-3xl">Experience</h1>
            <div className="grid grid-cols-2 gap-4">
                <InputField name="Job_title" type="text" label="Job Title" placeholder="Senior Frontend Developer" value="" onChange={()=>console.log("gay")}/>
                <InputField name="company" type="text" label="Employer" placeholder="Company Name" value=""/>
            </div>
            <div className="grid grid-cols-[2.2fr_1fr_1fr] gap-4">
                <InputField name="location" placeholder="New york, USA" label="Loaction" type="text" value=""/>
                <InputField name="startDate" placeholder="MM/YY" type="date" value="" label="Start-date"/> 
                <InputField name="endDate" placeholder="MM/YY" type="date" value="" label="End-date"/> 
            </div>
            <div className="mt-16 space-y-4">
                <h2 className="font-semibold text-2xl">Description</h2>
                <textarea className="textarea w-full" rows={10}></textarea>
            </div>
            
        </div>
    )
}