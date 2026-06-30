import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { Experience as ExperienceType, ResumeData } from "../types.ts";
import ExperienceForm from "../ExperienceForm";

type ExperienceProps = {
  experience: ExperienceType[];
  setResumeData: Dispatch<SetStateAction<ResumeData>>;
};

const emptyExperience: ExperienceType = {
  jobRole: "",
  companyName: "",
  location: "",
  startDate: "",
  endDate: "",
  description: "",
};

export default function Experience({
  experience,
  setResumeData,
}: ExperienceProps) {
  const [showForm, setShowForm] = useState(true);

  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const [currentExperience, setCurrentExperience] =
    useState<ExperienceType>(emptyExperience);

  const handleAdd = () => {
    setEditingIndex(null);
    setCurrentExperience(emptyExperience);
    setShowForm(true);
  };

  const handleEdit = (index: number) => {
    setEditingIndex(index);
    setCurrentExperience(experience[index]);
    setShowForm(true);
  };

  const handleDelete = (index: number) => {
    setResumeData((prev) => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index),
    }));
  };

  const handleSave = () => {
    if (editingIndex !== null) {
      setResumeData((prev) => {
        const updated = [...prev.experience];

        updated[editingIndex] = currentExperience;

        return {
          ...prev,
          experience: updated,
        };
      });
    } else {
      setResumeData((prev) => ({
        ...prev,
        experience: [...prev.experience, currentExperience],
      }));
    }

    setCurrentExperience(emptyExperience);
    setEditingIndex(null);
    setShowForm(false);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingIndex(null);
    setCurrentExperience(emptyExperience);
  };

  return (
    <div className="space-y-8">
      {/* Header */}

      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">Experience</h1>

        {!showForm && (
          <button
            onClick={handleAdd}
            className="btn btn-primary"
          >
            + Add Experience
          </button>
        )}
      </div>

      {/* Saved Experiences */}

      {experience.length > 0 && (
        <div className="space-y-4">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="border rounded-xl p-5 shadow-sm"
            >
              <div className="flex justify-between">
                <div>
                  <h2 className="font-semibold text-xl">
                    {exp.jobRole || "Untitled"}
                  </h2>

                  <p className="text-gray-500">
                    {exp.companyName}
                  </p>

                  <p className="text-sm text-gray-400">
                    {exp.startDate} - {exp.endDate}
                  </p>
                </div>

                <div className="space-x-3">
                  <button
                    className="btn btn-outline btn-sm"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-error btn-sm"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Form */}

      {showForm && (
        <ExperienceForm
          experience={currentExperience}
          setExperience={setCurrentExperience}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
}