import React, { useState } from "react";
import { Layers, CheckCircle2, Briefcase, Edit3, Trash2, Download, Loader2, Calendar } from "lucide-react";
import type { SavedResume } from "../../Resume/ResumeApi";

interface ResumeCardProps {
  resume: SavedResume;
  onEdit: (id: string, template: string) => void;
  onDelete: (id: string, e: React.MouseEvent) => void;
  isDeleting: boolean;
  onExport?: (id: string) => void;
}

export const ResumeCard: React.FC<ResumeCardProps> = ({
  resume,
  onEdit,
  onDelete,
  isDeleting,
  onExport,
}) => {
  const [isExporting, setIsExporting] = useState(false);

  const firstName = resume.personalInfo?.firstName?.trim() || "";
  const lastName = resume.personalInfo?.lastName?.trim() || "";
  const fullName = `${firstName} ${lastName}`.trim() || "Untitled Resume";
  const targetRole = resume.targetRole?.trim() || "Professional Role";
  const templateName = (resume.template || "Standard").toUpperCase();

  const formatDate = (dateStr?: string) => {
    if (!dateStr) return null;
    try {
      const date = new Date(dateStr);
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    } catch {
      return null;
    }
  };

  const formattedDate = formatDate(resume.updatedAt || resume.createdAt);

  const handleDownloadPdf = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onExport) {
      onExport(resume._id);
      return;
    }
    try {
      setIsExporting(true);
      const response = await fetch(
        `http://localhost:8080/api/resume/${resume._id}/export/pdf`,
        {
          method: "GET",
          credentials: "include",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to export PDF");
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${fullName.replace(/\s+/g, "_")}_Resume.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error("PDF export failed:", err);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="group relative flex flex-col justify-between bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm hover:shadow-xl hover:border-blue-400 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      {/* Top Accent Gradient Bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 opacity-80 group-hover:opacity-100 transition-opacity" />

      <div className="space-y-4 pt-1">
        {/* Header Badges */}
        <div className="flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200/60 shadow-2xs">
            <Layers className="w-3.5 h-3.5 text-blue-500" />
            {templateName}
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200/60 shadow-2xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> ATS Ready
          </span>
        </div>

        {/* Resume Title & Role */}
        <div className="space-y-1">
          <h3 className="font-extrabold text-xl text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-1">
            {fullName}
          </h3>
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
            <Briefcase className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="line-clamp-1">{targetRole}</span>
          </div>
        </div>

        {/* Counts & Timestamp */}
        <div className="space-y-2 pt-2 border-t border-slate-100">
          <div className="flex flex-wrap gap-2 text-xs text-slate-600">
            <span className="px-2.5 py-1 rounded-lg bg-slate-100 font-semibold text-slate-700">
              {resume.education?.length || 0} Education
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-slate-100 font-semibold text-slate-700">
              {resume.experience?.length || 0} Exp
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-slate-100 font-semibold text-slate-700">
              {resume.projects?.length || 0} Project
              {(resume.projects?.length || 0) !== 1 ? "s" : ""}
            </span>
          </div>

          {formattedDate && (
            <div className="flex items-center gap-1 text-[11px] text-slate-400 font-medium pt-1">
              <Calendar className="w-3 h-3" />
              <span>Updated {formattedDate}</span>
            </div>
          )}
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-5 mt-5 border-t border-slate-100 flex items-center gap-2.5">
        <button
          onClick={() => onEdit(resume._id, resume.template)}
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-bold text-xs transition-all duration-200 cursor-pointer shadow-md shadow-blue-500/20"
        >
          <Edit3 className="w-3.5 h-3.5" />
          Edit Resume
        </button>

        <button
          onClick={handleDownloadPdf}
          disabled={isExporting}
          className="p-2.5 rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-600 hover:text-blue-600 border border-slate-200 hover:border-blue-300 transition-all duration-200 cursor-pointer shrink-0 disabled:opacity-50"
          title="Download PDF"
        >
          {isExporting ? (
            <Loader2 className="w-4 h-4 animate-spin text-blue-600" />
          ) : (
            <Download className="w-4 h-4" />
          )}
        </button>

        <button
          onClick={(e) => onDelete(resume._id, e)}
          disabled={isDeleting}
          className="p-2.5 rounded-xl bg-slate-50 hover:bg-red-50 text-slate-400 hover:text-red-600 border border-slate-200 hover:border-red-200 transition-all duration-200 cursor-pointer shrink-0 disabled:opacity-50"
          title="Delete Resume"
        >
          {isDeleting ? (
            <Loader2 className="w-4 h-4 animate-spin text-red-600" />
          ) : (
            <Trash2 className="w-4 h-4" />
          )}
        </button>
      </div>
    </div>
  );
};

