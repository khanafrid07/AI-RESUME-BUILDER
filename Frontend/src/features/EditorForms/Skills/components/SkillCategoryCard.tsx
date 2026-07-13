import type { Skill } from "../../types";

type SkillCategoryCardProps = {
  skill: Skill;
  onEdit: () => void;
  onDelete: () => void;
};

export default function SkillCategoryCard({
  skill,
  onEdit,
  onDelete,
}: SkillCategoryCardProps) {
  return (
    <div className="rounded-xl border bg-base-100 p-5 shadow-sm space-y-5">

      {/* Header */}

      <div className="flex justify-between items-start">

        <div>

          <h2 className="text-xl font-semibold">
            {skill.category?.trim() || "Skills"}
          </h2>

          <p className="text-sm text-base-content/60 mt-1">
            {skill.skills.length}{" "}
            {skill.skills.length === 1 ? "Skill" : "Skills"}
          </p>

        </div>

        <div className="flex gap-2">

          <button
            className="btn btn-outline btn-sm"
            onClick={onEdit}
          >
            Edit
          </button>

          <button
            className="btn btn-error btn-sm"
            onClick={onDelete}
          >
            Delete
          </button>

        </div>

      </div>

      {/* Skills */}

      <div className="flex flex-wrap gap-3">

        {skill.skills.map((item) => (

          <span
            key={item}
            className="badge badge-primary badge-lg"
          >
            {item}
          </span>

        ))}

      </div>

    </div>
  );
}