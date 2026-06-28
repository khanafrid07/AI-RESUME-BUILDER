import type { ChangeEvent, Dispatch, SetStateAction } from "react";
import { Zap, MessageSquare, Trophy, FolderOpen } from "lucide-react";
import type { AiFormInfo } from "../Dashboard/types";

type FinalizeProps = {
    aiFormData: AiFormInfo;
    setAiFormData: Dispatch<SetStateAction<AiFormInfo>>;
};

export default function Finalize({ aiFormData, setAiFormData }: FinalizeProps) {
    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        const fieldName = name as keyof AiFormInfo;
        setAiFormData((prev) => ({ ...prev, [fieldName]: value }));
    };

    const sections = [
        {
            id: "languages",
            title: "Languages",
            description: "Add languages you speak",
            icon: MessageSquare,
            field: "languages" as keyof AiFormInfo,
            placeholder: "e.g., English (Native), Spanish (Fluent), French (Intermediate)",
        },
        {
            id: "certifications",
            title: "Certifications & Licenses",
            description: "Add certifications and licenses",
            icon: Trophy,
            field: "certifications" as keyof AiFormInfo,
            placeholder: "e.g., AWS Certified Solutions Architect, Google Cloud Associate Cloud Engineer",
        },
        {
            id: "projects",
            title: "Projects & Portfolio",
            description: "Add notable projects",
            icon: FolderOpen,
            field: "projects" as keyof AiFormInfo,
            placeholder: "e.g., Project Name | Technologies | Description | Link",
        },
    ];

    return (
        <div className="flex flex-col gap-6 p-4">
            <div>
                <h1 className="font-semibold text-3xl mb-2 flex items-center gap-2">
                    <Zap className="text-warning" size={32} />
                    Additional Sections
                </h1>
                <p className="text-sm text-gray-600">
                    Add languages, certifications, projects, or any extra details to enhance your resume.
                </p>
            </div>

            <div className="grid gap-4">
                {sections.map((section) => {
                    const IconComponent = section.icon;
                    const value = aiFormData[section.field];

                    return (
                        <div key={section.id} className="card bg-base-200 shadow-sm">
                            <div className="card-body gap-4">
                                <div className="flex items-start gap-3">
                                    <div className="p-2 bg-primary rounded-lg">
                                        <IconComponent className="text-white" size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="card-title text-lg">{section.title}</h3>
                                        <p className="text-sm text-gray-600">{section.description}</p>
                                    </div>
                                </div>

                                <textarea
                                    name={section.field}
                                    value={value}
                                    onChange={handleChange}
                                    rows={4}
                                    className="textarea textarea-bordered w-full resize-none"
                                    placeholder={section.placeholder}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Summary */}
            <div className="card bg-info bg-opacity-10 border border-info">
                <div className="card-body gap-2">
                    <h4 className="font-semibold text-info">✅ Ready to Download!</h4>
                    <p className="text-sm">
                        You are all set! Your resume is ready. Click Next to download or make any final edits.
                    </p>
                </div>
            </div>
        </div>
    );
}