import { templates } from "./templates/tempConfig";
import { useNavigate } from "react-router-dom";
import TemplateRenderer from "./templates/TemplateRendere";
import { dummyResumeData } from "./templates/dummyData";

interface AlltempProps {
    isEdit?: boolean;
    handleTemplateEdit?: (template: string) => void;
    onSelectTemplate?: (template: string) => void;
    currentTemplate?: string;
    resumeId?: string;
    resumeid?: string;
}

export default function Alltemp({
    isEdit,
    handleTemplateEdit,
    onSelectTemplate,
    currentTemplate,
    resumeId,
    resumeid,
}: AlltempProps) {
    const navigate = useNavigate();

    const handleSelect = (templateId: string) => {
        if (onSelectTemplate) {
            onSelectTemplate(templateId);
        } else if (handleTemplateEdit) {
            handleTemplateEdit(templateId);
        } else if (isEdit && (resumeId || resumeid)) {
            const idToUse = resumeId || resumeid;
            navigate(`/resume/${templateId}/${idToUse}/edit`);
        } else {
            navigate(`/resume/templates/create/${templateId}`);
        }
    };

    return (
        <div className="grid grid-cols-1 gap-6 p-2 sm:grid-cols-2 lg:grid-cols-3">
            {templates.map((temp) => {
                const isActive = currentTemplate === temp.id;

                return (
                    <div
                        key={temp.id}
                        onClick={() => handleSelect(temp.id)}
                        className={`
                            group relative cursor-pointer overflow-hidden
                            rounded-2xl border bg-white
                            transition-all duration-300
                            ${isActive
                                ? "border-blue-600 ring-2 ring-blue-500/30 shadow-md"
                                : "border-gray-200 hover:border-blue-400 hover:shadow-xl"
                            }
                        `}
                    >
                        {/* Active badge */}
                        {isActive && (
                            <div className="absolute right-3 top-3 z-30 flex items-center gap-1 rounded-full bg-blue-600 px-2.5 py-1 text-[11px] font-bold text-white shadow">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-3.5 w-3.5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>

                                Active
                            </div>
                        )}

                        {/* ========================= */}
                        {/* RESUME PREVIEW */}


                        <div className="relative h-[430px] overflow-hidden bg-gray-100">
                            {/* Background */}
                            <div className="absolute inset-0 bg-gray-100" />

                            {/* A4 preview viewport */}
                            <div className="absolute left-1/2 top-5 w-[794px] origin-top -translate-x-1/2 scale-[0.48] shadow-xl">
                                <TemplateRenderer
                                    templateId={temp.id}
                                    resumeData={dummyResumeData}
                                />
                            </div>

                            {/* Hover overlay */}
                            <div
                                className="
                                    absolute inset-0 z-20
                                    flex items-center justify-center
                                    bg-black/0
                                    transition-all duration-300
                                    group-hover:bg-black/20
                                "
                            >
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleSelect(temp.id);
                                    }}
                                    className={`
                                        translate-y-2
                                        rounded-lg border
                                        px-4 py-2
                                        text-xs font-semibold
                                        shadow-lg
                                        opacity-0
                                        transition-all duration-300
                                        group-hover:translate-y-0
                                        group-hover:opacity-100
                                        ${isActive
                                            ? "border-blue-600 bg-blue-600 text-white"
                                            : "border-gray-300 bg-white text-gray-900 hover:bg-gray-900 hover:text-white"
                                        }
                                    `}
                                >
                                    {isActive
                                        ? "Currently Selected"
                                        : "Use Template"}
                                </button>
                            </div>
                        </div>


                        {/* CARD FOOTER */}


                        <div className="border-t bg-white px-4 py-3">
                            <div className="flex items-center justify-between gap-2">
                                <p className="truncate text-sm font-semibold text-gray-900">
                                    {temp.name}
                                </p>

                                {temp.tag && (
                                    <span className="shrink-0 rounded-full border border-blue-200 bg-blue-50 px-2 py-0.5 text-[10px] font-medium text-blue-700">
                                        {temp.tag}
                                    </span>
                                )}
                            </div>

                            {temp.description && (
                                <p className="mt-1 line-clamp-2 text-[11px] leading-snug text-gray-500">
                                    {temp.description}
                                </p>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}