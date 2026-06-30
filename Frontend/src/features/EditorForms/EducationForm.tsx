import InputField from "../../components/InputFiled";
import type { Education } from "./types";

type EducationFormProps = {
  education: Education;
  setEducation: React.Dispatch<React.SetStateAction<Education>>;
  onSave: () => void;
  onCancel: () => void;
  isEditing: boolean;
};

export default function EducationForm({
  education,
  setEducation,
  onSave,
  onCancel,
  isEditing,
}: EducationFormProps) {

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setEducation((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="border rounded-xl p-6 shadow-md space-y-6">

      <h2 className="text-2xl font-semibold">

        {isEditing
          ? "Edit Education"
          : "Add Education"}

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
          placeholder="Mention achievements, GPA, coursework, etc."
          value={education.description}
          onChange={handleChange}
        />

      </div>

      <div className="flex justify-end gap-3">

        <button
          className="btn btn-outline"
          onClick={onCancel}
        >
          Cancel
        </button>

        <button
          className="btn btn-primary"
          onClick={onSave}
        >
          Save Education
        </button>

      </div>

    </div>
  );
}