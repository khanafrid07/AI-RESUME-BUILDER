import InputField from "../../components/InputFiled";
import type { Dispatch, SetStateAction } from "react";
import type { Education, ResumeData } from "./types";

type educationProps = {
    educations:Education[]
    setResumeData:Dispatch<SetStateAction<ResumeData>>
}

export default function Education({educations, setResumeData}:educationProps) {
    console.log(educations)

    return (
        <div>
            <h2 className="font-semibold text-2xl">Education</h2>
            <div>
                <div className="text-black/50">
                    <p>Bachelors in Computer Application</p>
                    <p>MM/YYY - MM/YYY</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <InputField placeholder="SRMU" type="text" label="School name" value="" name="schoolName" />
                    <InputField placeholder="New York" type="text" label="Location" value="" name="location" />
                </div>
                <div className="grid grid-cols-[2.1fr_1fr_1fr] gap-4">
                    <InputField label="Degree" type="text" placeholder="Bachelors in Computer Application" value="" name="degree" />
                    <InputField name="startDate" placeholder="MM/YY" type="date" value="" label="Start-date" />
                    <InputField name="endDate" placeholder="MM/YY" type="date" value="" label="End-date" />
                </div>
            </div>
            <div className="mt-16 space-y-4">
                <h2 className="font-semibold text-2xl">Description</h2>
                <textarea className="textarea w-full" rows={10}></textarea>
            </div>
        </div>
    )
}