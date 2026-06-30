import { useState } from "react";
import { Plus } from "lucide-react";

type ManualSkillFormProps = {
  onAddSkill: (skill: string) => void;
};

export default function ManualSkillForm({
  onAddSkill,
}: ManualSkillFormProps) {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    const value = input.trim();

    if (!value) return;

    onAddSkill(value);
    setInput("");
  };

  return (
    <div className="card border bg-base-100 shadow-sm">
      <div className="card-body">

        <h2 className="card-title">
          Add Skill Manually
        </h2>

        <p className="text-sm text-base-content/60 mb-2">
          Can't find a skill from AI suggestions?
          Add it manually.
        </p>

        <div className="flex gap-3">

          <input
            type="text"
            className="input input-bordered flex-1"
            placeholder="e.g. React, Docker, Leadership..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleAdd();
              }
            }}
          />

          <button
            className="btn btn-primary gap-2"
            onClick={handleAdd}
          >
            <Plus size={18} />
            Add
          </button>

        </div>

      </div>
    </div>
  );
}