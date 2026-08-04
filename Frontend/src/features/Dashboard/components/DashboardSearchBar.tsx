import React from "react";
import { Search } from "lucide-react";

interface DashboardSearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  filteredCount: number;
  totalCount: number;
}

export const DashboardSearchBar: React.FC<DashboardSearchBarProps> = ({
  searchTerm,
  setSearchTerm,
  filteredCount,
  totalCount,
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-blue-100  p-4 rounded-2xl border border-slate-200/80 shadow-sm">
      <div className="relative w-full sm:max-w-md">
        <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          placeholder="Search by role, template, or name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50  rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400"
        />
      </div>
      <div className="text-xs font-medium text-slate-500 dark:text-slate-400 self-end sm:self-center">
        Showing {filteredCount} of {totalCount} resume{totalCount !== 1 ? "s" : ""}
      </div>
    </div>
  );
};
