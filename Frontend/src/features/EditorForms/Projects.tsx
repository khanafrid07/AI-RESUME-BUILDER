import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { Projects as ProjectType, ResumeData } from "./types";
import ProjectForm from "./components/ProjectForm";

type ProjectProps = {
  projects: ProjectType[];
  setResumeData: Dispatch<SetStateAction<ResumeData>>;
  handleGenerate: (
    idx: number
  ) => Promise<any>;
};

const emptyProject: ProjectType = {
  projectName: "",
  projectLink: "",
  githubLink: "",
  description: "",
  startDate: "",
  endDate: "",
  technologies: [],
};

export default function Projects({
  projects,
  setResumeData,
  handleGenerate,
}: ProjectProps) {
  const [showForm, setShowForm] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState<number | 0>(0);

  const handleAdd = () => {
    setResumeData((prev) => ({
      ...prev,
      projects: [...prev.projects, { ...emptyProject }],
    }));

    setSelectedIndex(projects.length);
    setShowForm(true);
  };

  const handleEdit = (index: number) => {
    setSelectedIndex(index);
    setShowForm(true);
  };

  const handleDelete = (index: number) => {
    setResumeData((prev) => ({
      ...prev,
      projects: prev.projects.filter((_, i) => i !== index),
    }));

    if (selectedIndex === index) {
      setSelectedIndex(null);
      setShowForm(false);
    }
  };

  return (
    <div className="space-y-6">

      <div className="flex justify-between items-center">

        <h1 className="text-3xl font-semibold">
          Projects
        </h1>

        <button
          className="btn btn-primary"
          onClick={handleAdd}
        >
          + Add Project
        </button>

      </div>

      {projects.length > 0 && (

        <div className="space-y-4">

          {projects.map((project, index) => (

            <div
              key={index + project.projectName}
              className="rounded-xl border p-5 shadow-sm"
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

      {showForm && selectedIndex !== null && (

        <ProjectForm
          index={selectedIndex}
          project={projects[selectedIndex]}
          setResumeData={setResumeData}
          handleGenerate={handleGenerate}
          onClose={() => setShowForm(false)}
        />

      )}

    </div>
  );
}