import { useMemo, useState } from "react";
import {
    CheckCircle2,
    ChevronLeft,
    ChevronRight,
    CircleAlert,
    CircleX,
} from "lucide-react";

export default function JobDescriptionScoreCard({
    score,
    matchedJobDesc,
}: {
    score: any;
    matchedJobDesc: any;
}) {
    const [activeTab, setActiveTab] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);

    const ITEMS_PER_PAGE = 4;

    const matches = matchedJobDesc?.matches || [];

    const filteredMatches = useMemo(() => {
        if (activeTab === "all") return matches;

        return matches.filter(
            (item: any) => item?.status === activeTab
        );
    }, [matches, activeTab]);

    const totalPages = Math.ceil(
        filteredMatches.length / ITEMS_PER_PAGE
    );

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

    const currentMatches = filteredMatches.slice(
        startIndex,
        startIndex + ITEMS_PER_PAGE
    );

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
        setCurrentPage(1);
    };

    const getStatusStyle = (status: string) => {
        switch (status) {
            case "matched":
                return {
                    text: "text-green-600",
                    bg: "bg-green-50",
                    border: "border-green-200",
                    icon: <CheckCircle2 size={16} />,
                };

            case "partial":
                return {
                    text: "text-yellow-600",
                    bg: "bg-yellow-50",
                    border: "border-yellow-200",
                    icon: <CircleAlert size={16} />,
                };

            case "missing":
                return {
                    text: "text-red-600",
                    bg: "bg-red-50",
                    border: "border-red-200",
                    icon: <CircleX size={16} />,
                };

            default:
                return {
                    text: "text-gray-600",
                    bg: "bg-gray-50",
                    border: "border-gray-200",
                    icon: null,
                };
        }
    };

    const getStatusCount = (status: string) => {
        if (status === "all") return matches.length;

        return matches.filter(
            (item: any) => item?.status === status
        ).length;
    };

    return (
        <div className="flex flex-col gap-8">

            {/* Header */}
            <div className="rounded-2xl bg-blue-50 border border-blue-100 p-6">
                <p className="text-sm font-semibold text-blue-600">
                    Job Match Score
                </p>

                <h1 className="mt-1 text-2xl font-bold text-gray-900">
                    Target Job Match Analysis
                </h1>

                <p className="mt-1 text-sm text-gray-500">
                    AI evaluation of your resume against the job requirements.
                </p>
            </div>

            {/* Score Cards */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

                <div className="rounded-2xl border bg-white p-5 shadow-sm">
                    <p className="text-sm font-medium text-gray-500">
                        Overall Score
                    </p>

                    <div className="mt-2">
                        <span className="text-4xl font-bold text-gray-900">
                            {score?.finalScore || 0}
                        </span>

                        <span className="ml-1 text-sm text-gray-400">
                            /100
                        </span>
                    </div>
                </div>

                <div className="rounded-2xl border bg-white p-5 shadow-sm">
                    <p className="text-sm font-medium text-gray-500">
                        Job Requirement Match
                    </p>

                    <div className="mt-2">
                        <span className="text-4xl font-bold text-gray-900">
                            {score?.JobmatchScore || 0}
                        </span>

                        <span className="ml-1 text-sm text-gray-400">
                            /100
                        </span>
                    </div>
                </div>

                <div className="rounded-2xl border bg-white p-5 shadow-sm">
                    <p className="text-sm font-medium text-gray-500">
                        Resume Quality
                    </p>

                    <div className="mt-2">
                        <span className="text-4xl font-bold text-gray-900">
                            {score?.resumeQualityScore?.score || 0}
                        </span>

                        <span className="ml-1 text-sm text-gray-400">
                            /100
                        </span>
                    </div>
                </div>

            </div>

            {/* Requirement Breakdown */}
            <div className="rounded-2xl border bg-white shadow-sm">

                {/* Section Header */}
                <div className="border-b p-5">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <h2 className="text-lg font-bold text-gray-900">
                                Requirement Breakdown
                            </h2>

                            <p className="text-sm text-gray-500">
                                See how your resume matches each job requirement.
                            </p>
                        </div>

                        <span className="text-sm text-gray-400">
                            {filteredMatches.length} requirements
                        </span>
                    </div>

                    {/* Filter Tabs */}
                    <div className="mt-5 flex flex-wrap gap-2">

                        <button
                            onClick={() => handleTabChange("all")}
                            className={`rounded-full px-4 py-2 text-sm font-medium transition ${activeTab === "all"
                                    ? "bg-gray-900 text-white"
                                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                }`}
                        >
                            All ({getStatusCount("all")})
                        </button>

                        <button
                            onClick={() => handleTabChange("matched")}
                            className={`rounded-full px-4 py-2 text-sm font-medium transition ${activeTab === "matched"
                                    ? "bg-green-600 text-white"
                                    : "bg-green-50 text-green-700 hover:bg-green-100"
                                }`}
                        >
                            Matched ({getStatusCount("matched")})
                        </button>

                        <button
                            onClick={() => handleTabChange("partial")}
                            className={`rounded-full px-4 py-2 text-sm font-medium transition ${activeTab === "partial"
                                    ? "bg-yellow-500 text-white"
                                    : "bg-yellow-50 text-yellow-700 hover:bg-yellow-100"
                                }`}
                        >
                            Partial ({getStatusCount("partial")})
                        </button>

                        <button
                            onClick={() => handleTabChange("missing")}
                            className={`rounded-full px-4 py-2 text-sm font-medium transition ${activeTab === "missing"
                                    ? "bg-red-600 text-white"
                                    : "bg-red-50 text-red-700 hover:bg-red-100"
                                }`}
                        >
                            Missing ({getStatusCount("missing")})
                        </button>

                    </div>
                </div>

                {/* Requirements */}
                <div className="p-5">

                    {currentMatches.length > 0 ? (
                        <div className="flex flex-col gap-3">

                            {currentMatches.map(
                                (item: any, index: number) => {
                                    const status = getStatusStyle(
                                        item?.status
                                    );

                                    return (
                                        <div
                                            key={index}
                                            className="flex items-center justify-between gap-4 rounded-xl border border-gray-100 bg-gray-50/50 p-4 transition hover:border-gray-200 hover:bg-gray-50"
                                        >

                                            {/* Requirement */}
                                            <div className="flex min-w-0 items-start gap-3">

                                                <div className="mt-0.5 shrink-0 text-gray-400">
                                                    <span className="text-xs font-semibold">
                                                        {String(
                                                            startIndex + index + 1
                                                        ).padStart(2, "0")}
                                                    </span>
                                                </div>

                                                <p className="text-sm font-medium leading-6 text-gray-800">
                                                    {item?.requirement}
                                                </p>

                                            </div>

                                            {/* Status */}
                                            <div
                                                className={`flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold capitalize ${status.bg} ${status.text} ${status.border}`}
                                            >
                                                {status.icon}
                                                {item?.status}
                                            </div>

                                        </div>
                                    );
                                }
                            )}

                        </div>
                    ) : (
                        <div className="flex min-h-40 items-center justify-center rounded-xl bg-gray-50">
                            <p className="text-sm text-gray-500">
                                No requirements found for this status.
                            </p>
                        </div>
                    )}

                </div>

                {/* Pagination */}
                {filteredMatches.length > 0 && (
                    <div className="flex items-center justify-between border-t px-5 py-4">

                        <p className="text-sm text-gray-500">
                            Showing{" "}
                            <span className="font-medium text-gray-800">
                                {startIndex + 1}
                            </span>{" "}
                            -{" "}
                            <span className="font-medium text-gray-800">
                                {Math.min(
                                    startIndex + ITEMS_PER_PAGE,
                                    filteredMatches.length
                                )}
                            </span>{" "}
                            of{" "}
                            <span className="font-medium text-gray-800">
                                {filteredMatches.length}
                            </span>
                        </p>

                        <div className="flex gap-2">

                            <button
                                disabled={currentPage === 1}
                                onClick={() =>
                                    setCurrentPage((page) => page - 1)
                                }
                                className="btn btn-sm btn-outline gap-1"
                            >
                                <ChevronLeft size={16} />
                                Previous
                            </button>

                            <button
                                disabled={currentPage === totalPages}
                                onClick={() =>
                                    setCurrentPage((page) => page + 1)
                                }
                                className="btn btn-sm btn-outline gap-1"
                            >
                                Next
                                <ChevronRight size={16} />
                            </button>

                        </div>

                    </div>
                )}

            </div>

        </div>
    );
}