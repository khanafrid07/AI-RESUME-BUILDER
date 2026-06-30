import { useState } from "react";
import { Sparkles, Plus, X, RotateCw } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";
import type { ResumeData } from "./types";

type SkillsProps = {
  skills: string[];
  setResumeData: Dispatch<SetStateAction<ResumeData>>;
};

const DUMMY_AI_SKILLS = [
  {
    category: "Frontend",
    skills: ["React", "TypeScript", "Tailwind CSS", "Redux Toolkit"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT"],
  },
  {
    category: "Database",
    skills: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "Tools",
    skills: ["Git", "Docker", "Postman"],
  },
  {
    category: "Soft Skills",
    skills: ["Problem Solving", "Communication", "Team Collaboration"],
  },
];

export default function Skills({
  skills,
  setResumeData,
}: SkillsProps) {
  const [input, setInput] = useState("");

  const addSkill = (skill: string) => {
    const value = skill.trim();

    if (!value) return;

    if (
      skills.some(
        (s) => s.toLowerCase() === value.toLowerCase()
      )
    )
      return;

    setResumeData((prev) => ({
      ...prev,
      skills: [...prev.skills, value],
    }));

    setInput("");
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

        <p className="text-base-content/60 mt-2">
          Add your own skills or let AI generate
          personalized recommendations based on your
          education, experience and projects.
        </p>

      </div>

      {/* Manual Add */}

      <div className="card bg-base-100 border shadow-sm">

        <div className="card-body">

          <h2 className="card-title">
            Add Skill Manually
          </h2>

          <div className="flex gap-3">

            <input
              className="input input-bordered flex-1"
              placeholder="React, Docker, Leadership..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  addSkill(input);
                }
              }}
            />

            <button
              className="btn btn-primary"
              onClick={() => addSkill(input)}
            >
              <Plus size={18} />
              Add
            </button>

          </div>

        </div>

      </div>

      {/* Your Skills */}

      <div className="card bg-base-100 border shadow-sm">

        <div className="card-body">

          <div className="flex justify-between items-center">

            <h2 className="card-title">
              Your Skills
            </h2>

            <span className="badge badge-outline">
              {skills.length} Skills
            </span>

          </div>

          {skills.length === 0 ? (

            <div className="border-2 border-dashed rounded-xl p-8 text-center text-base-content/50">

              No skills added yet.

            </div>

          ) : (

            <div className="flex flex-wrap gap-3">

              {skills.map((skill) => (

                <div
                  key={skill}
                  className="badge badge-primary badge-lg gap-2 py-4 px-4"
                >
                  {skill}

                  <button
                    onClick={() => removeSkill(skill)}
                  >
                    <X size={14} />
                  </button>

                </div>

              ))}

            </div>

          )}

        </div>

      </div>

      {/* AI Suggestions */}

      <div className="card bg-base-100 border shadow-sm">

        <div className="card-body">

          <div className="flex justify-between items-center">

            <div>

              <h2 className="card-title flex items-center gap-2">

                <Sparkles size={20} />

                AI Skill Suggestions

              </h2>

              <p className="text-sm text-base-content/60">

                Suggestions generated from your resume.

              </p>

            </div>

            <div className="flex gap-2">

              <button className="btn btn-primary">

                <Sparkles size={18} />

                Generate

              </button>

              <button className="btn btn-outline">

                <RotateCw size={18} />

                Regenerate

              </button>

            </div>

          </div>

          <div className="divider" />

          {DUMMY_AI_SKILLS.map((group) => (

            <div
              key={group.category}
              className="space-y-3 mb-6"
            >

              <h3 className="font-semibold text-lg">

                {group.category}

              </h3>

              <div className="flex flex-wrap gap-3">

                {group.skills
                  .filter(
                    (skill) =>
                      !skills.some(
                        (s) =>
                          s.toLowerCase() ===
                          skill.toLowerCase()
                      )
                  )
                  .map((skill) => (

                    <button
                      key={skill}
                      className="btn btn-outline btn-sm"
                      onClick={() => addSkill(skill)}
                    >

                      <Plus size={14} />

                      {skill}

                    </button>

                  ))}

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}