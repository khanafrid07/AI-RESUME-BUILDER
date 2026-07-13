import InputField from "../../../components/InputFiled";
import type { Dispatch, SetStateAction } from "react";
import type { Experience, ResumeData } from "../types";
import { useEffect, useState } from "react";

type ExperienceFormProps = {
  experience: Experience;
  index: number;
  setResumeData: Dispatch<SetStateAction<ResumeData>>;
  onClose: () => void;
  handleGenerate: (
    idx: number
  ) => Promise<any>;
};

export default function ExperienceForm({
  experience,
  index,
  setResumeData,
  onClose,
  handleGenerate,
}: ExperienceFormProps) {
  const [descriptionText, setDescriptionText] = useState(
  experience.description.join("\n")
);

useEffect(() => {
  setDescriptionText(experience.description.join("\n"));
}, [experience.description]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {

    const { name, value } = e.target;

    setResumeData((prev) => {

      const updated = [...prev.experience];

      updated[index] = {
        ...updated[index],
        [name]: value,
      };

      return {
        ...prev,
        experience: updated,
      };

    });

  };

const handleDescriptionChange = (
  e: React.ChangeEvent<HTMLTextAreaElement>
) => {
  const text = e.target.value;

  // Keeps textarea working naturally
  setDescriptionText(text);

  // Updates preview live
  setResumeData((prev) => {
    const updated = [...prev.experience];

    updated[index] = {
      ...updated[index],
      description: text.split("\n"),
    };

    return {
      ...prev,
      experience: updated,
    };
  });
};

  const onGenerateClick = async () => {

    if (!experience.companyName || !experience.jobRole) {
      alert("Please enter Company Name and Job Role.");
      return;
    }

    await handleGenerate(index)

  };

  return (

    <div className="rounded-xl border bg-base-100 p-6 shadow-md space-y-6">

      <h2 className="text-2xl font-semibold">
        Experience
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <InputField
          label="Job Title"
          name="jobRole"
          type="text"
          placeholder="Frontend Developer"
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

      <div className="grid grid-cols-[2fr_1fr_1fr] gap-4">

        <InputField
          label="Location"
          name="location"
          type="text"
          placeholder="New York"
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

      <div>

        <label className="label">
          <span className="label-text font-medium">
            Description
          </span>
        </label>

        <textarea
          className="textarea textarea-bordered w-full"
          rows={8}
          value={experience.description.join("\n")}
          onChange={handleDescriptionChange}
        />

        <div className="mt-3 flex justify-end">

          <button
            className="btn btn-primary btn-sm"
            onClick={onGenerateClick}
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