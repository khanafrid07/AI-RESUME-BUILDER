import type { Dispatch, SetStateAction } from "react";
import { useState } from "react";
import { X, Plus } from "lucide-react";
import type{ ResumeData, Education } from "./types";

type SkillsProps = {
    skills:string[]
    
    setResumeData: Dispatch<SetStateAction<ResumeData>>;
};

const SUGGESTED_SKILLS = [
    "Problem Solving",
    "Analytical Thinking",
    "Leadership",
    "Communication",
    "Team Collaboration",
    "Project Management",
    "JavaScript",
    "React",
    "TypeScript",
    "Node.js",
    "Python",
    "SQL",
    "MongoDB",
    "REST APIs",
    "Agile",
];

export default function Skills({ skills, setResumeData }: SkillsProps) {
    const [inputValue, setInputValue] = useState("");
    const skillsList:string[] = skills

    // const handleAddSkill = () => {
    //     if (inputValue.trim()) {
    //         const newSkills = [...skillsList, inputValue.trim()].join(", ");
    //         setResumeData((prev) => ({ ...prev, skills: newSkills }));
    //         setInputValue("");
    //     }
    // };

    // const handleRemoveSkill = (skillToRemove: string) => {
    //     const newSkills = skillsList.filter((s) => s !== skillToRemove).join(", ");
    //     setResumeData((prev) => ({ ...prev, skills: newSkills }));
    // };

    // const handleAddSuggestedSkill = (skill: string) => {
    //     if (!skillsList.includes(skill)) {
    //         const newSkills = [...skillsList, skill].join(", ");
    //         setResumeData((prev) => ({ ...prev, skills: newSkills }));
    //     }
    // };

    // const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    //     if (e.key === "Enter") {
    //         e.preventDefault();
    //         handleAddSkill();
    //     }
    // };

    return (
        <div className="flex flex-col gap-6 p-4">
            <div>
                <h1 className="font-semibold text-3xl mb-2">Technical Skills</h1>
                <p className="text-sm text-gray-600">Add your most relevant professional skills.</p>
            </div>

            {/* Add Skill Input */}
            <div className="form-control w-full">
                <label className="label block">
                    <span className="label-text font-medium">Add a skill</span>
                </label>
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        
                        placeholder="e.g., React, Project Management, Leadership"
                        className="input input-bordered w-full"
                    />
                    <button className="btn btn-primary gap-2">
                        <Plus size={18} />
                        Add
                    </button>
                </div>
            </div>

            {/* Added Skills */}
            {skillsList.length > 0 && (
                <div className="flex flex-col gap-3">
                    <h3 className="font-medium text-sm">Your Skills</h3>
                    <div className="flex flex-wrap gap-2">
                        {skillsList.map((skill) => (
                            <div
                                key={skill}
                                className="badge badge-lg badge-primary gap-2 py-4 px-3"
                            >
                                {skill}
                                <button
                                    
                                    className="hover:bg-primary-focus rounded transition"
                                >
                                    <X size={16} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Suggested Skills */}
            <div className="divider"></div>
            <div className="flex flex-col gap-3">
                <h3 className="font-medium text-sm flex items-center gap-2">
                    💡 Suggested Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                    {SUGGESTED_SKILLS.filter((s) => !skillsList.includes(s)).map((skill) => (
                        <button
                            key={skill}
                           
                            className="btn btn-sm btn-outline"
                        >
                            {skill}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}