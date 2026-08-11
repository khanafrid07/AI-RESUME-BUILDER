import React from "react";
import { Layers, CheckCircle2, Briefcase, Edit3, Trash2 } from "lucide-react";
import type { SavedResume } from "../../Resume/ResumeApi";

interface ResumeCardProps {
  resume: SavedResume;
  onEdit: (id: string, template: string) => void;
  onDelete: (id: string, e: React.MouseEvent) => void;
  isDeleting: boolean;
}

export const ResumeCard: React.FC<ResumeCardProps> = ({
  resume,
  onEdit,
  onDelete,
  isDeleting,
}) => {
  const fullName =
    `${resume.personalInfo?.firstName || ""} ${resume.personalInfo?.lastName || ""}`.trim() ||
    "Untitled Resume";
  const targetRole = resume.targetRole || "Professional Role";

  return (
    <div className="group bg-gradient-to-b from-blue-200 to-blue-100 rounded-2xl border border-blue-100 p-6 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
      <div className="space-y-4">
        {/* Header Badge */}
        <div className="flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold  text-blue-600 border border-blue-200/60">
            <Layers className="w-3.5 h-3.5" />
            {resume.template.toUpperCase() || "Standard Template"}
          </span>
          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600  px-2.5 py-0.5 rounded-full">
            <CheckCircle2 className="w-3 h-3" /> ATS Ready
          </span>
        </div>

        {/* Resume Title & User Info */}
        <div className="space-y-1">
          <h3 className="font-bold text-lg  group-hover:text-blue-600  transition-colors line-clamp-1">
            {fullName}
          </h3>
          <div className="flex items-center gap-1.5 text-xs text-slate-500 ">
            <Briefcase className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="line-clamp-1 font-medium">{targetRole}</span>
          </div>
        </div>

        {/* Highlights / Section Count Pills */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100 dark:border-slate-800/80 text-xs text-slate-500 dark:text-slate-400">
          <div className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium">
            {resume.education?.length || 0} Education
          </div>
          <div className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium">
            {resume.experience?.length || 0} Exp
          </div>
          <div className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium">
            {resume.projects?.length || 0} Project{(resume.projects?.length || 0) !== 1 ? "s" : ""}
          </div>
        </div>
      </div>

      {/* Actions Footer */}
      <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-3">
        <button
          onClick={() => onEdit(resume._id, resume.template)}
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 text-white font-semibold text-xs transition-colors duration-200 cursor-pointer shadow-sm"
        >
          <Edit3 className="w-3.5 h-3.5" />
          Edit Resume
        </button>

        <button
          onClick={(e) => onDelete(resume._id, e)}
          disabled={isDeleting}
          className="p-2.5 rounded-xl text-slate-400 hover:text-red-600 hover:bg-red-50  border border-slate-500  hover:border-red-200  transition-colors duration-200 cursor-pointer shrink-0 disabled:opacity-50"
          title="Delete Resume"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
