import { X, Award } from "lucide-react";

type SkillListProps = {
  skills: string[];
  onRemoveSkill: (skill: string) => void;
};

export default function SkillList({
  skills,
  onRemoveSkill,
}: SkillListProps) {
  return (
    <div className="card border bg-base-100 shadow-sm">
      <div className="card-body">

        {/* Header */}

        <div className="flex justify-between items-center">

          <div className="flex items-center gap-2">

            <Award className="text-primary" size={22} />

            <h2 className="card-title">
              Your Skills
            </h2>

          </div>

          <div className="badge badge-outline">
            {skills.length} {skills.length === 1 ? "Skill" : "Skills"}
          </div>

        </div>

        {/* Empty State */}

        {skills.length === 0 ? (

          <div className="border-2 border-dashed rounded-xl py-12 text-center">

            <h3 className="font-semibold text-lg">
              No Skills Added
            </h3>

            <p className="text-base-content/60 mt-2 max-w-md mx-auto">
              Add skills manually or let AI generate
              personalized recommendations based on your
              resume.
            </p>

          </div>

        ) : (

          <div className="flex flex-wrap gap-3">

            {skills.map((skill) => (

              <div
                key={skill}
                className="
                  badge
                  badge-primary
                  badge-lg
                  gap-2
                  py-4
                  px-4
                  font-medium
                "
              >

                {skill}

                <button
                  className="hover:opacity-70 transition"
                  onClick={() => onRemoveSkill(skill)}
                >
                  <X size={14} />
                </button>

              </div>

            ))}

          </div>

        )}

      </div>
    </div>
  );
}