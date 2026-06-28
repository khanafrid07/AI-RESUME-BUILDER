import type { ChangeEvent, Dispatch, SetStateAction } from "react";
import type { ResumeData } from "./types";

type SummaryProps = {
    summary:string
   setResumeData: Dispatch<SetStateAction<ResumeData>>;
};

export default function Summary({ summary, setResumeData }: SummaryProps) {
    console.log(summary)
    // const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    //     const { name, value } = event.target;
    //     const fieldName = name as keyof AiFormInfo;
    //     setAiFormData((prev) => ({ ...prev, [fieldName]: value }));
    // };

    return (
        <div className="flex flex-col gap-6 p-4">
            <h1 className="font-semibold text-3xl">Professional Summary</h1>
            <p className="text-sm text-gray-600">Write a brief overview of your professional background, key achievements, and career objectives.</p>

            <div className="form-control w-full">
                <label className="label block">
                    <span className="label-text font-medium">Professional Summary</span>
                </label>
                <textarea
                    name="summary"
                    // value={aiFormData.summary}
                    // onChange={handleChange}
                    rows={8}
                    className="textarea textarea-bordered w-full resize-none"
                    placeholder="Write a compelling professional summary that highlights your key strengths, experience, and what you're looking for in your next role. Keep it concise and impactful (2-4 sentences)."
                />
            </div>
        </div>
    );
}