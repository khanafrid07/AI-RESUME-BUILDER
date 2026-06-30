import InputField from "../../components/InputFiled";
import type { Projects } from "./types";

type ProjectFormProps = {
  project: Projects;
  setProject: React.Dispatch<React.SetStateAction<Projects>>;
  onSave: () => void;
  onCancel: () => void;
  isEditing: boolean;
};

export default function ProjectForm({
  project,
  setProject,
  onSave,
  onCancel,
  isEditing,
}: ProjectFormProps) {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setProject((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="border rounded-xl p-6 shadow-md space-y-6">

      <h2 className="text-2xl font-semibold">
        {isEditing ? "Edit Project" : "Add Project"}
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
          label="Live Project URL"
          name="projectLink"
          type="text"
          placeholder="https://example.com"
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

        <InputField
          label="Tech Stack"
          name="techStack"
          type="text"
          placeholder="React, Node.js, MongoDB"
          value={project.techStack?.join(", ") ?? ""}
          onChange={(e) =>
            setProject((prev) => ({
              ...prev,
              techStack: e.target.value
                .split(",")
                .map((tech) => tech.trim())
                .filter(Boolean),
            }))
          }
        />

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
          placeholder="Explain what the project does, your contributions, technologies used, challenges solved, etc."
          value={project.description}
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
          Save Project
        </button>

      </div>

    </div>
  );
}