import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetAllResumeQuery, useDeleteResumeMutation } from "../Resume/ResumeApi";
import { DashboardHeader } from "./components/DashboardHeader";
import { DashboardStats } from "./components/DashboardStats";
import { DashboardSearchBar } from "./components/DashboardSearchBar";
import { ResumeCard } from "./components/ResumeCard";
import { DashboardSkeleton } from "./components/DashboardSkeleton";
import { EmptyDashboardState } from "./components/EmptyDashboardState";
import BackgroundLayout from "../../common/BackgroundLayout";

export default function Dashboard() {
    const navigate = useNavigate();
    const { data, isLoading } = useGetAllResumeQuery();
    const [deleteResume] = useDeleteResumeMutation();
    const [searchTerm, setSearchTerm] = useState("");
    const [deletingId, setDeletingId] = useState<string | null>(null);

    const resumes = data?.resume || [];

    const filteredResumes = resumes.filter((item) => {
        const role = item.targetRole?.toLowerCase() || "";
        const template = item.template?.toLowerCase() || "";
        const name = `${item.personalInfo?.firstName || ""} ${item.personalInfo?.lastName || ""}`.toLowerCase();
        const query = searchTerm.toLowerCase();
        return role.includes(query) || template.includes(query) || name.includes(query);
    });

    const handleDelete = async (id: string, e: React.MouseEvent) => {
        e.stopPropagation();
        if (window.confirm("Are you sure you want to permanently delete this resume?")) {
            try {
                setDeletingId(id);
                await deleteResume(id).unwrap();
            } catch (err) {
                console.error("Failed to delete resume:", err);
            } finally {
                setDeletingId(null);
            }
        }
    };

    const handleCreateNew = () => navigate("/resume/templates");
    const handleEdit = (id: string, template: string) => navigate(`/resume/${template}/${id}/edit`);

    return (
        <BackgroundLayout>

            <div className="max-w-7xl mx-auto space-y-8">
                <DashboardHeader onCreateNew={handleCreateNew} />

                <DashboardStats resumes={resumes} />

                {resumes.length > 0 && (
                    <DashboardSearchBar
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        filteredCount={filteredResumes.length}
                        totalCount={resumes.length}
                    />
                )}

                {isLoading && <DashboardSkeleton />}

                {!isLoading && resumes.length === 0 && (
                    <EmptyDashboardState onCreateNew={handleCreateNew} />
                )}

                {!isLoading && resumes.length > 0 && filteredResumes.length === 0 && (
                    <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 text-center space-y-3">
                        <p className="text-slate-600 dark:text-slate-400 font-medium">
                            No resumes match "{searchTerm}"
                        </p>
                        <button
                            onClick={() => setSearchTerm("")}
                            className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                        >
                            Clear Search
                        </button>
                    </div>
                )}

                {!isLoading && filteredResumes.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredResumes.map((resume) => (
                            <ResumeCard
                                key={resume._id}
                                resume={resume}
                                onEdit={handleEdit}
                                onDelete={handleDelete}
                                isDeleting={deletingId === resume._id}
                            />
                        ))}
                    </div>
                )}
            </div>
        </BackgroundLayout >
    );
}