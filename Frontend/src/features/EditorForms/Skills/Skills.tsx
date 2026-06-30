import type { Dispatch, SetStateAction } from "react";
import type { ResumeData } from "../types";

import ManualSkillForm from "./components/ManualSkillForm";
import SkillList from "./components/SkillList";
import AISkillSuggestions from "./components/AiSkillSuggestion";

type SkillsProps = {
  skills: string[];
  setResumeData: Dispatch<SetStateAction<ResumeData>>;
};

export default function Skills({
  skills,
  setResumeData,
}: SkillsProps) {
  const addSkill = (skill: string) => {
    const value = skill.trim();

    if (!value) return;

    // Prevent duplicates (case-insensitive)
    if (
      skills.some(
        (s) => s.toLowerCase() === value.toLowerCase()
      )
    ) {
      return;
    }

    setResumeData((prev) => ({
      ...prev,
      skills: [...prev.skills, value],
    }));
  };

  const removeSkill = (skill: string) => {
    setResumeData((prev) => ({
      ...prev,
      skills: prev.skills.filter((s) => s !== skill),
    }));
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">
          Skills
        </h1>

        <p className="mt-2 text-base-content/60">
          Add your own skills or let AI recommend
          skills based on your experience,
          education and projects.
        </p>
      </div>

      {/* Manual Skill Input */}
      <ManualSkillForm
        onAddSkill={addSkill}
      />

      {/* Selected Skills */}
      <SkillList
        skills={skills}
        onRemoveSkill={removeSkill}
      />

      {/* AI Suggestions */}
      <AISkillSuggestions
        selectedSkills={skills}
        onAddSkill={addSkill}
      />
    </div>
  );
}