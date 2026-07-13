import { useMemo, useState } from "react";
import { Sparkles, Wand2, RotateCw } from "lucide-react";
import type { Skill } from "../../types";

type AISkillSuggestionsProps = {
  selectedSkills: Skill[];
  onAddSuggestions: (skill: Skill) => void;
  handleGenerate: (
    type: string,
    aiFormData: Record<string, string>
  ) => Promise<any>;
};

const DUMMY_SUGGESTIONS: Skill[] = [
  {
    id: "1",
    category: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Redux",
      "Tailwind CSS",
    ],
  },
  {
    id: "2",
    category: "Backend",
    skills: [
      "Node.js",
      "Express",
      "JWT",
      "REST API",
    ],
  },
  {
    id: "3",
    category: "Database",
    skills: [
      "MongoDB",
      "PostgreSQL",
    ],
  },
];

export default function AISkillSuggestions({
  selectedSkills,
  onAddSuggestions,
  handleGenerate,
}: AISkillSuggestionsProps) {
  const [selected, setSelected] = useState<Record<string, string[]>>({});

  const alreadyAdded = useMemo(() => {
    return new Set(
      selectedSkills.flatMap((group) =>
        group.skills.map((skill) => skill.toLowerCase())
      )
    );
  }, [selectedSkills]);

  const toggleSkill = (
    category: string,
    skill: string
  ) => {
    setSelected((prev) => {
      const current = prev[category] ?? [];

      return {
        ...prev,
        [category]: current.includes(skill)
          ? current.filter((s) => s !== skill)
          : [...current, skill],
      };
    });
  };

  const handleAdd = (category: string) => {
    const skills = selected[category] ?? [];

    if (skills.length === 0) return;

    onAddSuggestions({
      id: crypto.randomUUID(),
      category,
      skills,
    });

    setSelected((prev) => ({
      ...prev,
      [category]: [],
    }));
  };

  return (
    <div className="card border bg-base-100 shadow-sm">

      <div className="card-body">

        <div className="flex justify-between items-start">

          <div>

            <div className="flex items-center gap-2">

              <Sparkles
                className="text-primary"
                size={22}
              />

              <h2 className="card-title">
                AI Skill Suggestions
              </h2>

            </div>

            <p className="mt-2 text-base-content/60">

              AI analyzes your resume and recommends
              relevant skills grouped by category.

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

        <div className="space-y-8">

          {DUMMY_SUGGESTIONS.map((group) => (

            <div key={group.id}>

              <div className="flex justify-between items-center mb-4">

                <h3 className="font-semibold text-lg">
                  {group.category}
                </h3>

                <button
                  className="btn btn-primary btn-sm"
                  onClick={() =>
                    handleAdd(group.category ?? "")
                  }
                >
                  Add Selected
                </button>

              </div>

              <div className="flex flex-wrap gap-3">

                {group.skills.map((skill) => {

                  const disabled =
                    alreadyAdded.has(
                      skill.toLowerCase()
                    );

                  const checked =
                    selected[group.category ?? ""]?.includes(
                      skill
                    ) ?? false;

                  return (

                    <label
                      key={skill}
                      className={`label cursor-pointer border rounded-lg px-4 py-2 gap-2 ${
                        disabled
                          ? "opacity-50 cursor-not-allowed"
                          : ""
                      }`}
                    >

                      <input
                        type="checkbox"
                        className="checkbox checkbox-sm"
                        disabled={disabled}
                        checked={checked}
                        onChange={() =>
                          toggleSkill(
                            group.category ?? "",
                            skill
                          )
                        }
                      />

                      <span>

                        {skill}

                        {disabled && (
                          <span className="ml-2 text-success text-xs">
                            (Added)
                          </span>
                        )}

                      </span>

                    </label>

                  );
                })}

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}