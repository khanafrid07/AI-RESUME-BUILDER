import type { ChangeEvent, Dispatch, SetStateAction } from "react";
import type { ResumeData } from "./types";
import type React from "react";

type SummaryProps = {
    summary:string
    resumeData:ResumeData
   setResumeData: Dispatch<SetStateAction<ResumeData>>;
   handleGenerate: ()=>Promise<any>
};

export default function Summary({ summary,resumeData, setResumeData , handleGenerate}: SummaryProps) {
    console.log(summary)
  const handleChange=(e:React.ChangeEvent<HTMLTextAreaElement>)=>{
    let {value} = e.target
    setResumeData((prev)=>{
        return {...prev, summary:value}
    })
  }
  

    return (
        <div className="flex flex-col gap-6 p-4">
            <h1 className="font-semibold text-3xl">Professional Summary</h1>
            <p className="text-sm text-gray-600">Write a brief overview of your professional background, key achievements, and career objectives.</p>

            <div className="form-control w-full">
                <label className="label block">
                    <span className="label-text font-medium">Professional Summary</span>
                </label>
                <div className="textarea w-full">
                <textarea
                    name="summary"
                    value={resumeData.summary}
                    onChange={handleChange}
                    rows={8}
                    className="w-full border-none resize-none"
                    placeholder="Write a compelling professional summary that highlights your key strengths, experience, and what you're looking for in your next role. Keep it concise and impactful (2-4 sentences)."
                />
                <button className="btn btn-primary" onClick={()=>handleGenerate()}>Generate</button>

                </div>
            </div>
        </div>
    );
}