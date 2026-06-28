import type { ChangeEvent } from "react";
import {
    Briefcase,
    GraduationCap,
    Code2,
    FolderKanban,
    Sparkles,
    Award,
    Target,
    FileText,
} from "lucide-react";
import type { AiFormInfo, AiFormProps } from "../types";

const emptyAiFormData: AiFormInfo = {
    targetRole: "",
    yearsOfExperience: "",
    summary: "",
    workExperience: "",
    education: "",
    skills: "",
    projects: "",
    certifications: "",
    languages: "",
};

export default function AiForm({ aiFormData, setAiFormData }: AiFormProps) {
    const inputFields = [
        {
            icon: Target,
            label: "Target Role",
            name: "targetRole" as keyof AiFormInfo,
            type: "text" as const,
            placeholder: "e.g., Senior Full Stack Developer, Product Manager",
            required: true,
        },
        {
            icon: Briefcase,
            label: "Years of Experience",
            name: "yearsOfExperience" as keyof AiFormInfo,
            type: "select" as const,
            options: ["0-1", "1-2", "2-5", "5-10", "10+"],
            required: true,
        },
    ];

    const textareaFields = [
        {
            icon: FileText,
            label: "Professional Summary",
            name: "summary" as keyof AiFormInfo,
            placeholder:
                "Brief overview of your professional background, key achievements, and career objectives (2-3 sentences)...",
            rows: 3,
        },
        {
            icon: Briefcase,
            label: "Work Experience",
            name: "workExperience" as keyof AiFormInfo,
            placeholder:
                "List your work experience with companies, job titles, duration, and key responsibilities/achievements. Format: Company Name | Job Title | Duration | Achievements...",
            rows: 4,
        },
        {
            icon: GraduationCap,
            label: "Education",
            name: "education" as keyof AiFormInfo,
            placeholder:
                "Your educational background. Format: Degree | University Name | Graduation Year | GPA/Honors (if applicable)...",
            rows: 3,
        },
        {
            icon: Code2,
            label: "Technical Skills",
            name: "skills" as keyof AiFormInfo,
            placeholder:
                "List your technical skills, programming languages, frameworks, tools, and technologies. Separate by comma or newline...",
            rows: 3,
        },
        {
            icon: FolderKanban,
            label: "Projects & Portfolio",
            name: "projects" as keyof AiFormInfo,
            placeholder:
                "Describe your key projects with technologies used and results. Format: Project Name | Technologies | Description | Link (if available)...",
            rows: 4,
        },
        {
            icon: Award,
            label: "Certifications & Achievements",
            name: "certifications" as keyof AiFormInfo,
            placeholder:
                "List relevant certifications, awards, publications, or achievements. Include organization and date...",
            rows: 3,
        },
        {
            icon: FileText,
            label: "Languages",
            name: "languages" as keyof AiFormInfo,
            placeholder:
                "Languages you speak with proficiency level. Format: Language | Proficiency Level (Beginner/Intermediate/Advanced/Native)...",
            rows: 2,
        },
    ];

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        const fieldName = name as keyof AiFormInfo;
        setAiFormData((prev) => ({ ...prev, [fieldName]: value }));
    };

    const handleClearForm = () => {
        setAiFormData(emptyAiFormData);
    };
    console.log(aiFormData)

    return (
        <div className="w-full">
            <div className="card bg-white shadow-2xl border border-blue-100">
                <div className="card-body">
                    <div className="flex items-center gap-3 sm:mb-2">
                        <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                            <Sparkles className="text-white" size={24} />
                        </div>
                        <h2 className="card-title text-xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            AI-Powered Resume Builder
                        </h2>
                    </div>
                    <p className="text-gray-600 ">
                        Provide detailed information about yourself and let our AI craft a
                        professional resume tailored to your target role.
                    </p>

                    <div className="divider"></div>

                    <div>
                        <h3 className="font-semibold text-lg mb-4 flex items-center gap-2 w-full">
                            <FileText size={20} className="text-purple-600" />
                            Detailed Information
                        </h3>
                        <div className="space-y-5">
                            {inputFields.map((field) => {
                                const IconComponent = field.icon;
                                return (
                                    <div key={field.name} className="form-control w-full">
                                        <label className="label block">
                                            <span className="label-text font-medium flex items-center gap-2">
                                                <IconComponent size={16} className="text-purple-600" />
                                                {field.label}
                                            </span>
                                        </label>
                                        {field.type === "select" ? (
                                            <select
                                                name={field.name}
                                                className="select select-bordered w-full"
                                                value={aiFormData[field.name]}
                                                onChange={handleChange}
                                            >
                                                <option value="">Select experience</option>
                                                {field.options?.map((option) => (
                                                    <option key={option} value={option}>
                                                        {option}
                                                    </option>
                                                ))}
                                            </select>
                                        ) : (
                                            <input
                                                name={field.name}
                                                type="text"
                                                className="input input-bordered w-full"
                                                placeholder={field.placeholder}
                                                value={aiFormData[field.name]}
                                                onChange={handleChange}
                                            />
                                        )}
                                    </div>
                                );
                            })}

                            {textareaFields.map((field) => {
                                const IconComponent = field.icon;
                                return (
                                    <div key={field.name} className="form-control w-full">
                                        <label className="label block">
                                            <span className="label-text font-medium flex items-center gap-2">
                                                <IconComponent size={16} className="text-purple-600" />
                                                {field.label}
                                            </span>
                                        </label>
                                        <textarea
                                            name={field.name}
                                            className="textarea textarea-bordered w-full focus:outline-none focus:border-purple-500 resize-none"
                                            placeholder={field.placeholder}
                                            rows={field.rows}
                                            value={aiFormData[field.name]}
                                            onChange={handleChange}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="divider"></div>

                    <div className="flex gap-3 justify-center">
                        <button className="btn btn-primary btn-lg gap-2 px-8">
                            <Sparkles size={20} />
                            Generate Resume with AI
                        </button>
                        <button onClick={handleClearForm} className="btn btn-outline btn-lg">
                            Clear Form
                        </button>
                    </div>

                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-6">
                        <h4 className="font-semibold text-amber-900 mb-2">💡 Pro Tips:</h4>
                        <ul className="text-sm text-amber-800 space-y-1">
                            <li>• Be specific about your achievements with quantifiable results</li>
                            <li>• Use industry-relevant keywords and technical terms</li>
                            <li>• Highlight projects that match your target role</li>
                            <li>• Include dates, company names, and measurable impacts</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}