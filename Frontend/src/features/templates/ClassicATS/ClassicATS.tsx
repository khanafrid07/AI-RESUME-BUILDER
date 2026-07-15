import Header from "./Header";
import Summary from "./Summary";
import Experience from "./Experience";
import Education from "./Education";
import Projects from "./Projects";
import Skills from "./Skills";
import Certifications from "./Certification";
import Languages from "./Languages";
import SectionHeading from "./SectionHeading";

import type { ResumeData } from "../../EditorForms/types";

type Props = {
    resumeData: ResumeData;
};

export default function ClassicATS({
    resumeData,
}: Props) {
    return (
        <div className="mx-auto w-[794px] h-[1123px] bg-white shadow-2xl">

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

                {resumeData.certifications && resumeData.certifications.length > 0 && (
                    <Certifications
                        certifications={
                            resumeData.certifications
                        }
                    />
                )}

                {resumeData.languages && resumeData.languages.length > 0 && (
                    <Languages
                        languages={resumeData.languages}
                    />
                )}

                {resumeData.hobbies && resumeData.hobbies.length > 0 && (
                    <section>
                        <SectionHeading title="Hobbies & Interests" />
                        <p className="text-sm text-slate-700 leading-normal">
                            {resumeData.hobbies.join(", ")}
                        </p>
                    </section>
                )}

                {resumeData.customSections && resumeData.customSections.length > 0 && (
                    <>
                        {resumeData.customSections.map((section) => (
                            <section key={section.id}>
                                <SectionHeading title={section.title} />
                                <p className="text-sm text-slate-700 whitespace-pre-line leading-relaxed">
                                    {section.content}
                                </p>
                            </section>
                        ))}
                    </>
                )}
            </div>
        </div>
    );
}