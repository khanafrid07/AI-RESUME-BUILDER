import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { Education as EducationType, ResumeData } from "./types";
import EducationForm from "./components/EducationForm";

type EducationProps = {
  educations: EducationType[];
  setResumeData: Dispatch<SetStateAction<ResumeData>>;
  handleGenerate: (
    idx: number
  ) => Promise<any>;
};

const emptyEducation: EducationType = {
  schoolName: "",
  degree: "",
  location: "",
  startDate: "",
  endDate: "",
  description: "",
};

export default function Education({
  educations,
  setResumeData,
  handleGenerate,
}: EducationProps) {
  const [showForm, setShowForm] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState<number | 0>(0);

  const handleAdd = () => {
    setResumeData((prev) => ({
      ...prev,
      education: [...prev.education, { ...emptyEducation }],
    }));

    setSelectedIndex(educations.length);
    setShowForm(true);
  };

  const handleEdit = (index: number) => {
    setSelectedIndex(index);
    setShowForm(true);
  };

  const handleDelete = (index: number) => {
    setResumeData((prev) => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index),
    }));

    if (selectedIndex === index) {
      setShowForm(false);
      setSelectedIndex(0);
    }
  };

  const handleClose = () => {
    setShowForm(false);
    setSelectedIndex(0);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold">Education</h1>

        <button className="btn btn-primary" onClick={handleAdd}>
          + Add Education
        </button>
      </div>

      {educations.length > 0 && (
        <div className="space-y-4">
          {educations.map((edu, index) => (
            <div
              key={index}
              className="rounded-xl border bg-base-100 p-5 shadow-sm"
            >
              <div className="flex justify-between">
                <div>
                  <h2 className="text-lg font-semibold">
                    {edu.degree || "Untitled Degree"}
                  </h2>

                  <p className="text-sm text-gray-500">
                    {edu.schoolName || "School Name"}
                  </p>

                  <p className="text-xs text-gray-400 mt-1">
                    {edu.startDate || "Start"} - {edu.endDate || "End"}
                  </p>
                </div>

                <div className="flex gap-2">
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
        <EducationForm
          index={selectedIndex}
          education={educations[selectedIndex]}
          setResumeData={setResumeData}
          handleGenerate={handleGenerate}
          onClose={handleClose}
        />
      )}
    </div>
  );
}