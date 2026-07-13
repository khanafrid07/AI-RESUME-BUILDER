import InputField from "../../../components/InputFiled";
import type { Dispatch, SetStateAction } from "react";
import type { Education, ResumeData } from "../types";

type EducationFormProps = {
  education: Education;
  index: number;
  setResumeData: Dispatch<SetStateAction<ResumeData>>;
  handleGenerate: (
    idx: number
  ) => Promise<any>;
  onClose: () => void;
};

export default function EducationForm({
  education,
  index,
  setResumeData,
  handleGenerate,
  onClose,
}: EducationFormProps) {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setResumeData((prev) => {
      const updatedEducation = [...prev.education];

      updatedEducation[index] = {
        ...updatedEducation[index],
        [name]: value,
      };

      return {
        ...prev,
        education: updatedEducation,
      };
    });
  };
  const generateDescription = async () => {

    if (!education.schoolName || !education.degree) {
      alert("Please enter school name and degree.");
      return;
    }

    const res = await handleGenerate(index);

    if (!res) return;

    setResumeData((prev) => {
      const updatedEducation = [...prev.education];

      updatedEducation[index] = {
        ...updatedEducation[index],
        description: res,
      };

      return {
        ...prev,
        education: updatedEducation,
      };
    });
  };

  return (
    <div className="border rounded-xl p-6 shadow-md bg-base-100 space-y-6">

      <h2 className="text-2xl font-semibold">
        Education
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <InputField
          label="School Name"
          name="schoolName"
          type="text"
          placeholder="Harvard University"
          value={education.schoolName}
          onChange={handleChange}
        />

        <InputField
          label="Location"
          name="location"
          type="text"
          placeholder="New York"
          value={education.location}
          onChange={handleChange}
        />

      </div>

      <div className="grid grid-cols-[2fr_1fr_1fr] gap-4">

        <InputField
          label="Degree"
          name="degree"
          type="text"
          placeholder="Bachelor of Computer Science"
          value={education.degree}
          onChange={handleChange}
        />

        <InputField
          label="Start Date"
          name="startDate"
          type="date"
          value={education.startDate}
          onChange={handleChange}
        />

        <InputField
          label="End Date"
          name="endDate"
          type="date"
          value={education.endDate}
          onChange={handleChange}
        />

      </div>

      <div>

        <label className="label">
          <span className="label-text font-medium">
            Description
          </span>
        </label>

        <textarea
          className="textarea textarea-bordered w-full"
          rows={8}
          name="description"
          placeholder="Mention achievements, GPA, coursework, awards..."
          value={education.description}
          onChange={handleChange}
        />

        <div className="mt-3 flex justify-end">
          <button
            className="btn btn-primary btn-sm"
            onClick={generateDescription}
          >
            Generate Description
          </button>
        </div>

      </div>

      <div className="flex justify-end">

        <button
          className="btn btn-primary"
          onClick={onClose}
        >
          Done
        </button>

      </div>

    </div>
  );
}