import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { ResumeData, Skill } from "../types";

import SkillForm from "./components/SkillForm";
import SkillCategoryCard from "./components/SkillCategoryCard";
import AISkillSuggestions from "./components/AiSkillSuggestion";

type SkillsProps = {
  skills: Skill[];
  setResumeData: Dispatch<SetStateAction<ResumeData>>;
  handleGenerate: (
    type: string,
    aiFormData: Record<string, string>
  ) => Promise<any>;
};

const emptySkill: Skill = {
  id: "",
  category: "",
  skills: [],
};

export default function Skills({
  skills,
  setResumeData,
  handleGenerate,
}: SkillsProps) {
  const [showForm, setShowForm] = useState(true);

  const [editingIndex, setEditingIndex] =
    useState<number | null>(null);

  const [currentSkill, setCurrentSkill] =
    useState<Skill>(emptySkill);

  // ---------------- Add ----------------

  const handleAdd = () => {
    setCurrentSkill({
      id: crypto.randomUUID(),
      category: "",
      skills: [],
    });

    setEditingIndex(null);
    setShowForm(true);
  };

  // ---------------- Edit ----------------

  const handleEdit = (index: number) => {
    setCurrentSkill(skills[index]);
    setEditingIndex(index);
    setShowForm(true);
  };

  // ---------------- Delete ----------------

  const handleDelete = (index: number) => {
    setResumeData((prev) => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index),
    }));

    if (editingIndex === index) {
      setShowForm(false);
      setEditingIndex(null);
      setCurrentSkill(emptySkill);
    }
  };

  // ---------------- Save ----------------

  const handleSave = () => {
    if (currentSkill.skills.length === 0) {
      alert("Please add at least one skill.");
      return;
    }

    setResumeData((prev) => {
      const updated = [...prev.skills];

      if (editingIndex !== null) {
        updated[editingIndex] = currentSkill;
      } else {
        updated.push(currentSkill);
      }

      return {
        ...prev,
        skills: updated,
      };
    });

    setCurrentSkill(emptySkill);
    setEditingIndex(null);
    setShowForm(false);
  };

  // ---------------- Cancel ----------------

  const handleCancel = () => {
    setCurrentSkill(emptySkill);
    setEditingIndex(null);
    setShowForm(false);
  };

  const handleSuggestionAdd = ()=>{
    console.log("gay")
  }


  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-3xl font-semibold">
            Skills
          </h1>

          <p className="text-base-content/60 mt-2">
            Organize your skills into categories.
            Categories are optional.
          </p>

        </div>

        {!showForm && (

          <button
            className="btn btn-primary"
            onClick={handleAdd}
          >
            + Add Skill Category
          </button>

        )}

      </div>

      {/* Saved Categories */}

      {skills.length > 0 && (

        <div className="space-y-4">

          {skills.map((skill, index) => (

            <SkillCategoryCard
              key={skill.id}
              skill={skill}
              onEdit={() => handleEdit(index)}
              onDelete={() => handleDelete(index)}
            />

          ))}

        </div>

      )}

      {/* Form */}

      {showForm && (

        <SkillForm
          skill={currentSkill}
          setSkill={setCurrentSkill}
          onSave={handleSave}
          onCancel={handleCancel}
        />

      )}
      <AISkillSuggestions selectedSkills= {skills} handleGenerate={handleGenerate} onAddSuggestions={handleSuggestionAdd} />

    </div>
  );
}