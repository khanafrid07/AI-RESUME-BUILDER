import InputField from "../../../components/InputFiled";
import { useState, type Dispatch, type SetStateAction } from "react";
import type { Projects, ResumeData } from "../types";

type ProjectFormProps = {
  project: Projects;
  index: number;
  setResumeData: Dispatch<SetStateAction<ResumeData>>;
  onClose: () => void;
  handleGenerate: (
    idx: number
  ) => Promise<any>;
};

export default function ProjectForm({
  project,
  index,
  setResumeData,
  onClose,
  handleGenerate,
}: ProjectFormProps) {


  const [tech, setTech] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {

    const { name, value } = e.target;

    setResumeData((prev) => {

      const updated = [...prev.projects];

      updated[index] = {
        ...updated[index],
        [name]: value,
      };

      return {
        ...prev,
        projects: updated,
      };

    });

  };

  const handleTechnologyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTech(value);
  }
  const handleAddTechnology = () => {
    if (tech.trim() === "") return;

    setResumeData((prev) => {
      const updated = [...prev.projects];
      const technologies = tech.split(",").map((t) => t.trim()).filter((t) => t !== "");
      updated[index] = {
        ...updated[index],
        technologies: [...updated[index].technologies, ...technologies],
      };
      return {
        ...prev,
        projects: updated,
      };
    })
    setTech("");

  }


  return (

    <div className="rounded-xl border bg-base-100 p-6 shadow-md space-y-6">

      <h2 className="text-2xl font-semibold">
        Project
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <InputField
          label="Project Name"
          name="projectName"
          type="text"
          placeholder="AI Resume Builder"
          value={project.projectName}
          onChange={handleChange}
        />

        <InputField
          label="Live URL"
          name="projectLink"
          type="text"
          placeholder="https://..."
          value={project.projectLink}
          onChange={handleChange}
        />

      </div>

      <div className="grid grid-cols-2 gap-4">

        <InputField
          label="GitHub URL"
          name="githubLink"
          type="text"
          placeholder="https://github.com/..."
          value={project.githubLink}
          onChange={handleChange}
        />
        <div className="flex flex-row  gap-2">
          <InputField
            label="Technologies"
            name="technologies"
            type="text"
            placeholder="React, Node.js, MongoDB"
            value={tech}
            onChange={handleTechnologyChange}
          />
          <button className="btn" onClick={handleAddTechnology}>Add</button>

        </div>


      </div>

      <div className="grid grid-cols-2 gap-4">

        <InputField
          label="Start Date"
          name="startDate"
          type="date"
          value={project.startDate}
          onChange={handleChange}
        />

        <InputField
          label="End Date"
          name="endDate"
          type="date"
          value={project.endDate}
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
          value={project.description}
          onChange={handleChange}
        />

        <div className="mt-3 flex justify-end">

          <button
            className="btn btn-primary btn-sm"
            onClick={() => handleGenerate(index)}
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