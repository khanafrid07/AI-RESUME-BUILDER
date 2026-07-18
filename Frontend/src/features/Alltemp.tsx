import { templates } from "./templates/tempConfig"
import { useNavigate } from "react-router-dom"

export default function Alltemp() {
    const navigate = useNavigate()

    return (
        <div className="grid grid-cols-3 gap-6">
            {templates.map((temp) => (
                <div
                    key={temp.id}
                    className="relative group cursor-pointer rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                >
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
                                <span className="text-[10px] font-medium bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 rounded-full">
                                    {temp.tag}
                                </span>
                            )}
                        </div>
                        {temp.description && (
                            <p className="text-[11px] text-gray-500 mt-0.5 leading-snug line-clamp-2">{temp.description}</p>
                        )}
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                        <button
                            onClick={() => navigate(`create/${temp.id}`)}
                            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-gray-900 font-semibold text-sm px-5 py-2 rounded-lg shadow-lg hover:bg-gray-900 hover:text-white border border-gray-300"
                        >
                            Use Template
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}