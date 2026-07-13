import { useMemo, useState, useEffect } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { Skill } from "../../types";

type SkillFormProps = {
  skill: Skill;
  setSkill: Dispatch<SetStateAction<Skill>>;
  onSave: () => void;
  onCancel: () => void;
};

export default function SkillForm({
  skill,
  setSkill,
  onSave,
  onCancel,
}: SkillFormProps) {

  const [skillInput, setSkillInput] = useState("");

//   useEffect(() => {
//     setSkillInput(skill.skills.join(", "));
//   }, [skill]);

  const previewSkills = useMemo(() => {
    return skillInput
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
  }, [skillInput]);

  const handleCategoryChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSkill((prev) => ({
      ...prev,
      category: e.target.value,
    }));
  };

  const handleSkillChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;

    setSkillInput(value);

    const parsedSkills = value
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);

    setSkill((prev) => ({
      ...prev,
      skills: [...new Set(parsedSkills)],
    }));
  };

  return (
    <div className="rounded-xl border bg-base-100 p-6 shadow-md space-y-6">

      <h2 className="text-2xl font-semibold">
        {skill.id ? "Edit Skill Category" : "Add Skill Category"}
      </h2>

      {/* Category */}

      <div>

        <label className="label">

          <span className="label-text font-medium">
            Category (Optional)
          </span>

        </label>

        <input
          type="text"
          className="input input-bordered w-full"
          placeholder="Frontend"
          value={skill.category}
          onChange={handleCategoryChange}
        />

      </div>

      {/* Skills */}

      <div>

        <label className="label">

          <span className="label-text font-medium">
            Skills
          </span>

        </label>

        <input
          type="text"
          className="input input-bordered w-full"
          placeholder="React, Next.js, Redux"
          value={skillInput}
          onChange={handleSkillChange}
        />

        <p className="mt-2 text-sm text-base-content/60">
          Separate multiple skills with commas.
        </p>

      </div>

      {/* Preview */}

      {previewSkills.length > 0 && (

        <div>

          <h3 className="font-medium mb-3">
            Preview
          </h3>

          <div className="flex flex-wrap gap-2">

            {previewSkills.map((item, idd) => (

              <div
                key={idd}
                className="badge badge-primary badge-lg"
              >
                {item}
              </div>

            ))}

          </div>

        </div>

      )}

      {/* Buttons */}

      <div className="flex justify-end gap-3">

        <button
          className="btn btn-outline"
          onClick={onCancel}
        >
          Cancel
        </button>

        <button
          className="btn btn-primary"
          onClick={onSave}
        >
          Save Category
        </button>

      </div>

    </div>
  );
}