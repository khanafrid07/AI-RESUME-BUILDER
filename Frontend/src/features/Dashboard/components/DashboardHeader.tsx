import React from "react";
import { Sparkles, Plus } from "lucide-react";

interface DashboardHeaderProps {
  onCreateNew: () => void;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({ onCreateNew }) => {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-800 p-8 sm:p-10 text-white shadow-xl shadow-indigo-900/20">
      <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-48 h-48 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs font-semibold text-blue-100 tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
            AI-Powered Resume Hub
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            My Saved Resumes
          </h1>
          <p className="text-blue-100/90 text-sm sm:text-base max-w-xl font-normal leading-relaxed">
            Manage, edit, and optimize your tailored ATS resumes to land your dream job faster.
          </p>
        </div>

        <button
          onClick={onCreateNew}
          className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white text-blue-700 hover:bg-blue-50 font-bold text-sm shadow-lg shadow-black/10 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer group shrink-0"
        >
          <Plus className="w-5 h-5 text-blue-700 transition-transform duration-200 group-hover:rotate-90" />
          Create New Resume
        </button>
      </div>
    </div>
  );
};
