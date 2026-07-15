import { FolderGit2 } from "lucide-react";
import SectionHeading from "./SectionHeading";

import type { Projects } from "../../EditorForms/types";

type Props = {
    projects: Projects[];
};


export default function Projects({ projects }: Props) {
    const ProjectFilter = projects.filter((project) => Object.values(project).some((value) => String(value).trim() !== ""))
    return (
        <section>

            {ProjectFilter.length > 0 && <SectionHeading title="Projects" />}

            <div className="space-y-6">

                {ProjectFilter.map((project, id) => (



                    <div key={id}>

                        <div className="flex items-center justify-between gap-2">
                            <div className="flex items-center gap-2">
                                <FolderGit2
                                    size={18}
                                    className="text-blue-700"
                                />

                                <h3 className="font-bold text-[15px]">
                                    {project.projectName}
                                </h3>
                            </div>

                            <div className="text-sm text-slate-500 font-medium">{project.startDate} - {project.endDate}</div>

                        </div>

                        <p className="mt-2 text-[14px] text-slate-700 leading-6">
                            {project.description}
                        </p>

                        {project.technologies.length > 0 && (

                            <div className="flex flex-wrap gap-2 mt-3">

                                {project.technologies.map((tech, i) => (

                                    <span
                                        key={i}
                                        className="bg-slate-100 border border-slate-300 px-3 py-1 rounded-full text-xs font-medium"
                                    >
                                        {tech}
                                    </span>

                                ))}

                            </div>

                        )}

                    </div>



                ))}


            </div>

        </section >
    );
}