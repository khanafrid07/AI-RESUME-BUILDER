import { templates } from "./templates/tempConfig"
import { useNavigate } from "react-router-dom"

interface AlltempProps {
    isEdit?: boolean;
    handleTemplateEdit?: (template: string) => void;
    onSelectTemplate?: (template: string) => void;
    currentTemplate?: string;
    resumeId?: string;
    resumeid?: string;
}

export default function Alltemp({ isEdit, handleTemplateEdit, onSelectTemplate, currentTemplate, resumeId, resumeid }: AlltempProps) {
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-2">
            {templates.map((temp) => {
                const isActive = currentTemplate === temp.id;
                return (
                    <div
                        key={temp.id}
                        onClick={() => handleSelect(temp.id)}
                        className={`relative group cursor-pointer rounded-xl border transition-all duration-300 overflow-hidden ${
                            isActive
                                ? "border-blue-600 ring-2 ring-blue-500/30 shadow-md bg-blue-50/20"
                                : "border-gray-200 hover:border-blue-400 hover:shadow-lg"
                        }`}
                    >
                        {/* Active badge */}
                        {isActive && (
                            <div className="absolute top-2 right-2 z-10 bg-blue-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-xs flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                Active
                            </div>
                        )}

                        {/* Thumbnail or placeholder card */}
                        {temp.thumbnail ? (
                            <img
                                className="w-full object-cover aspect-[3/4]"
                                src={temp.thumbnail}
                                alt={temp.name}
                            />
                        ) : (
                            <div className="w-full aspect-[3/4] bg-white border-b border-gray-100 flex flex-col items-center justify-center px-6 gap-2">
                                {/* Mini resume preview lines */}
                                <div className="w-full space-y-1.5">
                                    <div className="h-3 bg-gray-300 rounded w-2/3 mx-auto" />
                                    <div className="h-1.5 bg-gray-200 rounded w-1/2 mx-auto" />
                                    <div className="h-px bg-gray-400 w-full mt-3" />
                                    <div className="h-1.5 bg-gray-200 rounded w-1/3 mt-2" />
                                    <div className="h-1.5 bg-gray-100 rounded w-full" />
                                    <div className="h-1.5 bg-gray-100 rounded w-5/6" />
                                    <div className="h-1.5 bg-gray-100 rounded w-full" />
                                    <div className="h-px bg-gray-300 w-full mt-2" />
                                    <div className="h-1.5 bg-gray-200 rounded w-1/3 mt-1" />
                                    <div className="h-1.5 bg-gray-100 rounded w-full" />
                                    <div className="h-1.5 bg-gray-100 rounded w-4/5" />
                                    <div className="h-1.5 bg-gray-100 rounded w-full" />
                                    <div className="h-px bg-gray-300 w-full mt-2" />
                                    <div className="h-1.5 bg-gray-200 rounded w-1/3 mt-1" />
                                    <div className="flex flex-wrap gap-1 mt-1">
                                        <div className="h-1.5 bg-gray-100 rounded w-10" />
                                        <div className="h-1.5 bg-gray-100 rounded w-12" />
                                        <div className="h-1.5 bg-gray-100 rounded w-8" />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Card footer */}
                        <div className="px-4 py-3 bg-white">
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-semibold text-gray-900">{temp.name}</p>
                                {temp.tag && (
                                    <span className="text-[10px] font-medium bg-blue-50 text-blue-700 border border-blue-200 px-2 py-0.5 rounded-full">
                                        {temp.tag}
                                    </span>
                                )}
                            </div>
                            {temp.description && (
                                <p className="text-[11px] text-gray-500 mt-0.5 leading-snug line-clamp-2">{temp.description}</p>
                            )}
                        </div>

                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                            <button
                                type="button"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleSelect(temp.id);
                                }}
                                className={`opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold text-xs px-4 py-2 rounded-lg shadow-lg border ${
                                    isActive
                                        ? "bg-blue-600 text-white border-blue-600"
                                        : "bg-white text-gray-900 border-gray-300 hover:bg-gray-900 hover:text-white"
                                }`}
                            >
                                {isActive ? "Currently Selected" : "Use Template"}
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}