import { Sparkles, Plus, RotateCw, Wand2 } from "lucide-react";

type AISkillSuggestionsProps = {
  selectedSkills: string[];
  onAddSkill: (skill: string) => void;
};

const DUMMY_SUGGESTIONS = [
  {
    category: "Frontend",
    skills: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "Next.js",
    ],
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST API",
      "JWT",
      "Socket.io",
    ],
  },
  {
    category: "Database",
    skills: [
      "MongoDB",
      "PostgreSQL",
      "Redis",
    ],
  },
  {
    category: "Tools",
    skills: [
      "Git",
      "Docker",
      "Postman",
      "GitHub Actions",
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      "Problem Solving",
      "Leadership",
      "Communication",
      "Team Collaboration",
    ],
  },
];

export default function AISkillSuggestions({
  selectedSkills,
  onAddSkill,
}: AISkillSuggestionsProps) {
  return (
    <div className="card border bg-base-100 shadow-sm">

      <div className="card-body">

        {/* Header */}

        <div className="flex justify-between items-start">

          <div>

            <div className="flex items-center gap-2">

              <Sparkles
                size={22}
                className="text-primary"
              />

              <h2 className="card-title">
                AI Skill Suggestions
              </h2>

            </div>

            <p className="text-base-content/60 mt-2">

              AI analyzes your education,
              experience and projects to recommend
              the most relevant skills.

            </p>

          </div>

          <div className="flex gap-2">

            <button className="btn btn-primary">

              <Wand2 size={18} />

              Generate

            </button>

            <button className="btn btn-outline">

              <RotateCw size={18} />

              Regenerate

            </button>

          </div>

        </div>

        <div className="divider" />

        {/* Categories */}

        <div className="space-y-6">

          {DUMMY_SUGGESTIONS.map((group) => {

            const remainingSkills = group.skills.filter(
              (skill) =>
                !selectedSkills.some(
                  (s) =>
                    s.toLowerCase() ===
                    skill.toLowerCase()
                )
            );

            if (remainingSkills.length === 0) return null;

            return (
              <div key={group.category}>

                <h3 className="font-semibold text-lg mb-3">

                  {group.category}

                </h3>

                <div className="flex flex-wrap gap-3">

                  {remainingSkills.map((skill) => (

                    <button
                      key={skill}
                      className="btn btn-outline btn-sm gap-2"
                      onClick={() => onAddSkill(skill)}
                    >

                      <Plus size={15} />

                      {skill}

                    </button>

                  ))}

                </div>

              </div>
            );
          })}

        </div>

      </div>

    </div>
  );
}