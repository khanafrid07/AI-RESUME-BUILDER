import React from "react";

export const DashboardSkeleton: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3].map((n) => (
        <div
          key={n}
          className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200/80 space-y-4 animate-pulse"
        >
          <div className="flex justify-between items-center">
            <div className="h-5 bg-slate-200 dark:bg-slate-800 rounded w-24" />
            <div className="h-5 bg-slate-200 dark:bg-slate-800 rounded-full w-16" />
          </div>
          <div className="h-6 bg-slate-200 dark:bg-slate-800 rounded w-3/4" />
          <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-1/2" />
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between gap-3">
            <div className="h-9 bg-slate-200 dark:bg-slate-800 rounded-lg w-full" />
            <div className="h-9 bg-slate-200 dark:bg-slate-800 rounded-lg w-12" />
          </div>
        </div>
      ))}
    </div>
  );
};
