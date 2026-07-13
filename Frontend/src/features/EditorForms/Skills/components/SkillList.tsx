import { X, Award } from "lucide-react";
import type { Skill } from "../../types";

type SkillListProps = {
  skills: Skill[];
  onRemoveSkill: (id: string) => void;
};

export default function SkillList({
  skills,
  onRemoveSkill,
}: SkillListProps) {
  const groupedSkills = skills.reduce<
    Record<string, Skill[]>
  >((acc, skill) => {
    const category =
      skill.category?.trim() || "Other";

    if (!acc[category]) {
      acc[category] = [];
    }

    acc[category].push(skill);

    return acc;
  }, {});
  console.log("groupedSkills", skills);

  return (
    <div className="card border bg-base-100 shadow-sm">

      <div className="card-body">

        <div className="flex justify-between items-center">

          <div className="flex items-center gap-2">

            <Award
              className="text-primary"
              size={22}
            />

            <h2 className="card-title">
              Your Skills
            </h2>

          </div>

          <div className="badge badge-outline">

            {skills.length}{" "}
            {skills.length === 1
              ? "Skill"
              : "Skills"}

          </div>

        </div>

        {skills.length === 0 ? (

          <div className="border-2 border-dashed rounded-xl py-12 text-center">

            <h3 className="font-semibold text-lg">
              No Skills Added
            </h3>

            <p className="text-base-content/60 mt-2">

              Add your skills manually or let AI
              suggest skills based on your resume.

            </p>

          </div>

        ) : (

          <div className="space-y-6">

            {Object.entries(groupedSkills).map(
              ([category, categorySkills]) => (

                <div key={category}>

                  <h3 className="font-semibold text-sm uppercase tracking-wide text-base-content/60 mb-3">

                    {category}

                  </h3>

                  <div className="flex flex-wrap gap-3">

                    {categorySkills.map((skill) => (

                      <div
                        key={skill.id}
                        className="badge badge-primary badge-lg gap-2 py-4 px-4"
                      >

                        <span>
                          {skill.skills.map((n, idx) => (
                            <span key={idx}>
                              {n}
                            </span>
                          ))}
                        </span>

                        <button
                          onClick={() =>
                            onRemoveSkill(skill.id)
                          }
                        >

                          <X size={14} />

                        </button>

                      </div>

                    ))}

                  </div>

                </div>

              )
            )}

          </div>

        )}

      </div>

    </div>
  );
}