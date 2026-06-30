import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { Education as EducationType, ResumeData } from "../types";
import EducationForm from "../EducationForm";

type EducationProps = {
  educations: EducationType[];
  setResumeData: Dispatch<SetStateAction<ResumeData>>;
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
}: EducationProps) {
  const [showForm, setShowForm] = useState(true);

  const [editingIndex, setEditingIndex] =
    useState<number | null>(null);

  const [currentEducation, setCurrentEducation] =
    useState<EducationType>(emptyEducation);

  const handleAdd = () => {
    setEditingIndex(null);
    setCurrentEducation(emptyEducation);
    setShowForm(true);
  };

  const handleEdit = (index: number) => {
    setEditingIndex(index);
    setCurrentEducation(educations[index]);
    setShowForm(true);
  };

  const handleDelete = (index: number) => {
    setResumeData((prev) => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index),
    }));
  };

  const handleSave = () => {
    if (editingIndex !== null) {
      setResumeData((prev) => {
        const updated = [...prev.education];

        updated[editingIndex] = currentEducation;

        return {
          ...prev,
          education: updated,
        };
      });
    } else {
      setResumeData((prev) => ({
        ...prev,
        education: [...prev.education, currentEducation],
      }));
    }

    setCurrentEducation(emptyEducation);
    setEditingIndex(null);
    setShowForm(false);
  };

  const handleCancel = () => {
    setCurrentEducation(emptyEducation);
    setEditingIndex(null);
    setShowForm(false);
  };

  return (
    <div className="space-y-6">

      <div className="flex justify-between items-center">

        <h1 className="text-3xl font-semibold">
          Education
        </h1>

        {!showForm && (
          <button
            className="btn btn-primary"
            onClick={handleAdd}
          >
            + Add Education
          </button>
        )}

      </div>

      {educations.length > 0 && (

        <div className="space-y-4">

          {educations.map((edu, index) => (

            <div
              key={index}
              className="border rounded-xl p-5 shadow-sm"
            >

              <div className="flex justify-between">

                <div>

                  <h2 className="font-semibold text-xl">
                    {edu.degree || "Untitled"}
                  </h2>

                  <p className="text-gray-500">
                    {edu.schoolName}
                  </p>

                  <p className="text-sm text-gray-400">
                    {edu.startDate} - {edu.endDate}
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

      {showForm && (

        <EducationForm
          education={currentEducation}
          setEducation={setCurrentEducation}
          onSave={handleSave}
          onCancel={handleCancel}
          isEditing={editingIndex !== null}
        />

      )}

    </div>
  );
}