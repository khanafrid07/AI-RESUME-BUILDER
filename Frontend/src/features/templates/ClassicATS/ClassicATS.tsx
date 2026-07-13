import Header from "./Header";
import Summary from "./Summary";
import Experience from "./Experience";
import Education from "./Education";
import Projects from "./Projects";
import Skills from "./Skills";
import Certifications from "./Certification";
import Languages from "./Languages";

import type { ResumeData } from "../../EditorForms/types";

type Props = {
    resumeData: ResumeData;
};

export default function ClassicATS({
    resumeData,
}: Props) {
    return (
        <div className="mx-auto w-[794px] min-h-[1123px] bg-white shadow-2xl">

            <Header
                personalInfo={resumeData.personalInfo}
                targetRole={resumeData.targetRole}
            />

            <div className="px-10 pb-10">

                {resumeData.summary && (
                    <Summary summary={resumeData.summary} />
                )}

                {resumeData.experience.length > 0 && (
                    <Experience
                        experience={resumeData.experience}
                    />
                )}

                {resumeData.projects.length > 0 && (
                    <Projects
                        projects={resumeData.projects}
                    />
                )}

                {resumeData.education.length > 0 && (
                    <Education
                        education={resumeData.education}
                    />
                )}

                {resumeData.skills.length > 0 && (
                    <Skills
                        skills={resumeData.skills}
                    />
                )}

                {resumeData.certifications.length > 0 && (
                    <Certifications
                        certifications={
                            resumeData.certifications
                        }
                    />
                )}

                {resumeData.languages.length > 0 && (
                    <Languages
                        languages={resumeData.languages}
                    />
                )}
            </div>
        </div>
    );
}