import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { Experience as ExperienceType, ResumeData } from "./types";
import ExperienceForm from "./components/ExperienceForm";

type ExperienceProps = {
  experience: ExperienceType[];
  setResumeData: Dispatch<SetStateAction<ResumeData>>;
  handleGenerate: (
    idx: number
  ) => Promise<any>;
};

const emptyExperience: ExperienceType = {
  companyName: "",
  jobRole: "",
  startDate: "",
  endDate: "",
  currentlyWorking: "",
  location: "",
  description: [],
};

export default function Experience({
  experience,
  setResumeData,
  handleGenerate,
}: ExperienceProps) {
  const [showForm, setShowForm] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState<number | 0>(0);

  const handleAdd = () => {
    setResumeData((prev) => ({
      ...prev,
      experience: [...prev.experience, { ...emptyExperience }],
    }));

    setSelectedIndex(experience.length);
    setShowForm(true);
  };

  const handleEdit = (index: number) => {
    setSelectedIndex(index);
    setShowForm(true);
  };

  const handleDelete = (index: number) => {
    setResumeData((prev) => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index),
    }));

    if (selectedIndex === index) {
      setSelectedIndex(0);
      setShowForm(false);
    }
  };

  return (
    <div className="space-y-6">

      <div className="flex justify-between items-center">

        <h1 className="text-3xl font-semibold">
          Experience
        </h1>

        <button
          className="btn btn-primary"
          onClick={handleAdd}
        >
          + Add Experience
        </button>

      </div>

      {experience.length > 0 && (

        <div className="space-y-4">

          {experience.map((exp, index) => (

            <div
              key={index}
              className="rounded-xl border p-5 shadow-sm"
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

                <div className="space-x-2">

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

      {showForm && selectedIndex !== null && (

        <ExperienceForm
          experience={experience[selectedIndex]}
          index={selectedIndex}
          setResumeData={setResumeData}
          handleGenerate={handleGenerate}
          onClose={() => setShowForm(false)}
        />

      )}

    </div>
  );
}