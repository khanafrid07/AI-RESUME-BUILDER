import InputField from "../../components/InputFiled";
import type { Experience } from "./types";

type ExperienceFormProps = {
  experience: Experience;
  setExperience: React.Dispatch<React.SetStateAction<Experience>>;
  onSave: () => void;
  onCancel: () => void;
};

export default function ExperienceForm({
  experience,
  setExperience,
  onSave,
  onCancel,
}: ExperienceFormProps) {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setExperience((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  console.log(experience)
  return (
    <div className="rounded-xl border bg-base-100 p-6 shadow-md space-y-6">

      <h2 className="text-2xl font-semibold">
        {experience.jobRole ? "Edit Experience" : "Add Experience"}
      </h2>

      {/* Row 1 */}

      <div className="grid grid-cols-2 gap-4">
        <InputField
          label="Job Title"
          name="jobRole"
          type="text"
          placeholder="Senior Frontend Developer"
          value={experience.jobRole}
          onChange={handleChange}
        />

        <InputField
          label="Employer"
          name="companyName"
          type="text"
          placeholder="Google"
          value={experience.companyName}
          onChange={handleChange}
        />
      </div>

      {/* Row 2 */}

      <div className="grid grid-cols-[2fr_1fr_1fr] gap-4">
        <InputField
          label="Location"
          name="location"
          type="text"
          placeholder="New York, USA"
          value={experience.location}
          onChange={handleChange}
        />

        <InputField
          label="Start Date"
          name="startDate"
          type="date"
          value={experience.startDate}
          onChange={handleChange}
        />

        <InputField
          label="End Date"
          name="endDate"
          type="date"
          value={experience.endDate}
          onChange={handleChange}
        />
      </div>

      {/* Description */}

      <div>
        <label className="label">
          <span className="label-text font-medium">Description</span>
        </label>

        <textarea
          className="textarea textarea-bordered w-full"
          rows={8}
          name="description"
          placeholder="Describe your work, achievements, technologies used..."
          value={experience.description}
          onChange={handleChange}
        />
      </div>

      {/* Buttons */}

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
          Save Experience
        </button>

      </div>
    </div>
  );
}