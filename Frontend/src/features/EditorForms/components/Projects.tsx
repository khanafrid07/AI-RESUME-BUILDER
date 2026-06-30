import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { Projects, ResumeData } from "../types";
import ProjectForm from "../ProjectForm";

type ProjectProps = {
  projects: Projects[];
  setResumeData: Dispatch<SetStateAction<ResumeData>>;
};

const emptyProject: Projects = {
  projectName: "",
  projectLink: "",
  githubLink: "",
  description: "",
  startDate: "",
  endDate: "",
  techStack: [],
};

export default function Projects({
  projects,
  setResumeData,
}: ProjectProps) {
  const [showForm, setShowForm] = useState(true);

  const [editingIndex, setEditingIndex] =
    useState<number | null>(null);

  const [currentProject, setCurrentProject] =
    useState<Projects>(emptyProject);

  const handleAdd = () => {
    setEditingIndex(null);
    setCurrentProject(emptyProject);
    setShowForm(true);
  };

  const handleEdit = (index: number) => {
    setEditingIndex(index);
    setCurrentProject(projects[index]);
    setShowForm(true);
  };

  const handleDelete = (index: number) => {
    setResumeData((prev) => ({
      ...prev,
      projects: prev.projects.filter((_, i) => i !== index),
    }));
  };

  const handleSave = () => {
    if (editingIndex !== null) {
      setResumeData((prev) => {
        const updated = [...prev.projects];

        updated[editingIndex] = currentProject;

        return {
          ...prev,
          projects: updated,
        };
      });
    } else {
      setResumeData((prev) => ({
        ...prev,
        projects: [...prev.projects, currentProject],
      }));
    }

    setCurrentProject(emptyProject);
    setEditingIndex(null);
    setShowForm(false);
  };

  const handleCancel = () => {
    setCurrentProject(emptyProject);
    setEditingIndex(null);
    setShowForm(false);
  };

  return (
    <div className="space-y-6">

      <div className="flex justify-between items-center">

        <h1 className="text-3xl font-semibold">
          Projects
        </h1>

        {!showForm && (
          <button
            className="btn btn-primary"
            onClick={handleAdd}
          >
            + Add Project
          </button>
        )}

      </div>

      {projects.length > 0 && (
        <div className="space-y-4">

          {projects.map((project, index) => (

            <div
              key={index}
              className="border rounded-xl p-5 shadow-sm"
            >
              <div className="flex justify-between">

                <div>

                  <h2 className="font-semibold text-xl">
                    {project.projectName || "Untitled Project"}
                  </h2>

                  <p className="text-gray-500">
                    {project.startDate} - {project.endDate}
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
        <ProjectForm
          project={currentProject}
          setProject={setCurrentProject}
          onSave={handleSave}
          onCancel={handleCancel}
          isEditing={editingIndex !== null}
        />
      )}

    </div>
  );
}