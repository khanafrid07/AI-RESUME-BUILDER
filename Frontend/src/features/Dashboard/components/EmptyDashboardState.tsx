import React from "react";
import { FilePlus, Plus } from "lucide-react";

interface EmptyDashboardStateProps {
  onCreateNew: () => void;
}

export const EmptyDashboardState: React.FC<EmptyDashboardStateProps> = ({ onCreateNew }) => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-10 sm:p-16 border border-slate-200/80 dark:border-slate-800 shadow-sm text-center max-w-2xl mx-auto space-y-6">
      <div className="w-20 h-20 bg-blue-50 dark:bg-blue-950/60 rounded-3xl flex items-center justify-center mx-auto text-blue-600 dark:text-blue-400">
        <FilePlus className="w-10 h-10" />
      </div>
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">No Resumes Built Yet</h2>
        <p className="text-slate-500 dark:text-slate-400 text-sm max-w-md mx-auto">
          Create a high-impact, AI-tailored resume in minutes using our professional templates.
        </p>
      </div>
      <button
        onClick={onCreateNew}
        className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md shadow-blue-500/20 transition-all hover:scale-105 cursor-pointer"
      >
        <Plus className="w-5 h-5" />
        Build My First Resume
      </button>
    </div>
  );
};
