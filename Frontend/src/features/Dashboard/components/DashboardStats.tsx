import React from "react";
import { FileText, CheckCircle2, Award } from "lucide-react";
import type { SavedResume } from "../../Resume/ResumeApi";

interface DashboardStatsProps {
  resumes: SavedResume[];
}

export const DashboardStats: React.FC<DashboardStatsProps> = ({ resumes }) => {
  const uniqueTemplates = new Set(resumes.map((r) => r.template)).size;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
      <div className="bg-blue-100 rounded-2xl p-5 border border-slate-200/80 shadow-sm flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600  flex items-center justify-center shrink-0">
          <FileText className="w-6 h-6" />
        </div>
        <div>
          <p className="text-xs font-medium   uppercase tracking-wider">Total Resumes</p>
          <h3 className="text-2xl font-bold text-slate-900  mt-0.5">{resumes.length}</h3>
        </div>
      </div>

      <div className="bg-blue-100 rounded-2xl p-5 border border-slate-200/80 shadow-sm flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600  flex items-center justify-center shrink-0">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <div>
          <p className="text-xs font-medium  uppercase tracking-wider">ATS Readiness</p>
          <h3 className="text-2xl font-bold text-slate-900 mt-0.5">High Match</h3>
        </div>
      </div>

      <div className="bg-blue-100 rounded-2xl p-5 border border-slate-200/80 shadow-sm flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
          <Award className="w-6 h-6" />
        </div>
        <div>
          <p className="text-xs font-medium  uppercase tracking-wider">Templates Used</p>
          <h3 className="text-2xl font-bold text-slate-900 mt-0.5">
            {uniqueTemplates} Format{uniqueTemplates !== 1 ? "s" : ""}
          </h3>
        </div>
      </div>
    </div>
  );
};
