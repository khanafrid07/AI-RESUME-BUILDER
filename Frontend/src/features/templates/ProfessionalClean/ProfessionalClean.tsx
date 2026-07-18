import type { ResumeData, Skill, Experience, Education, Projects, Certification, Language, CustomSection } from "../../EditorForms/types";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

type Props = { resumeData: ResumeData };

/* ── Section heading: thin top rule, bold uppercase label ── */
function Heading({ title }: { title: string }) {
    return (
        <div className="mt-4 mb-1">
            <div className="border-t border-gray-400 w-full" />
            <h2 className="text-[17px] font-bold uppercase tracking-[2px] text-gray-800 mt-1">
                {title}
            </h2>
        </div>
    );

}

export default function ProfessionalClean({ resumeData }: Props) {
    const { personalInfo, targetRole, summary, experience, education, projects, skills, certifications, languages, hobbies, customSections } = resumeData;

    const filteredExp = experience.filter(e => Object.values(e).some(v => String(v).trim() !== ""));
    const filteredEdu = education.filter(e => Object.values(e).some(v => String(v).trim() !== ""));
    const filteredProj = projects.filter(p => Object.values(p).some(v => String(v).trim() !== ""));

    const groupedSkills = skills.reduce((acc: Record<string, Skill[]>, skill) => {
        const cat = skill.category || "General";
        if (!acc[cat]) acc[cat] = [];
        acc[cat].push(skill);
        return acc;
    }, {});

    return (
        <div className="mx-auto w-[794px] h-[1123px] bg-white font-sans text-gray-900" style={{ fontFamily: "'Times New Roman', Times, serif" }}>

            {/* ── HEADER ── */}
            <div className="text-center px-12 pt-10 pb-4">
                <h1 className="text-[28px] font-bold uppercase tracking-[4px] text-gray-900">
                    {personalInfo.firstName} {personalInfo.lastName}
                </h1>

                {targetRole && (
                    <p className="text-[14px] tracking-widest text-gray-600 mt-1 uppercase">
                        {targetRole}
                    </p>
                )}

                <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 mt-3 text-[12px] text-gray-700">
                    {personalInfo.phone && (
                        <span className="flex items-center gap-1"><Phone size={10} />{personalInfo.phone}</span>
                    )}
                    {personalInfo.email && (
                        <span className="flex items-center gap-1"><Mail size={10} />{personalInfo.email}</span>
                    )}
                    {(personalInfo.address || personalInfo.address) && (
                        <span className="flex items-center gap-1">
                            <MapPin size={10} />
                            {personalInfo.address}
                        </span>
                    )}
                    {personalInfo.portfolioWeb && (
                        <span className="flex items-center gap-1"><Globe size={10} />{personalInfo.portfolioWeb}</span>
                    )}
                </div>


            </div>

            {/* ── BODY ── */}
            <div className="px-12 pb-8">

                {/* Summary */}
                {summary && (
                    <>
                        <Heading title="Professional Summary" />
                        <p className="text-[14px] leading-[1.7] text-gray-800">{summary}</p>
                    </>
                )}

                {/* Experience */}
                {filteredExp.length > 0 && (
                    <>
                        <Heading title="Work Experience" />
                        <div className="space-y-5">
                            {filteredExp.map((exp: Experience, i: number) => (
                                <div key={i}>
                                    <div className="flex justify-between items-baseline">
                                        <h3 className="text-[14px] font-bold text-gray-900">{exp.jobRole}</h3>
                                        <span className="text-[12px] text-gray-600">
                                            {exp.startDate} – {exp.currentlyWorking ? "Present" : exp.endDate}
                                        </span>
                                    </div>
                                    <p className="text-[13px] italic text-gray-700">{exp.companyName}{exp.location ? ` · ${exp.location}` : ""}</p>
                                    <ul className="mt-2 list-disc pl-5 space-y-0.5">
                                        {exp.description.map((item: string, j: number) => (
                                            <li key={j} className="text-[15px] leading-[1.6] text-gray-800">{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {/* Projects */}
                {filteredProj.length > 0 && (
                    <>
                        <Heading title="Projects" />
                        <div className="space-y-4">
                            {filteredProj.map((proj: Projects, i: number) => (
                                <div key={i}>
                                    <div className="flex justify-between items-baseline">
                                        <h3 className="text-[15px] font-bold">{proj.projectName}</h3>
                                        <span className="text-[12px] text-gray-600">{proj.startDate}{proj.endDate ? ` – ${proj.endDate}` : ""}</span>
                                    </div>
                                    <p className="text-[14px] leading-[1.6] text-gray-800 mt-1">{proj.description}</p>
                                    {proj.technologies.length > 0 && (
                                        <p className="text-[13px] text-gray-600 mt-1">
                                            <span className="font-semibold">Tech:</span> {proj.technologies.join(", ")}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {/* Education */}
                {filteredEdu.length > 0 && (
                    <>
                        <Heading title="Education" />
                        <div className="space-y-3">
                            {filteredEdu.map((edu: Education, i: number) => (
                                <div key={i} className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-[14px] font-bold">{edu.degree}</h3>
                                        <p className="text-[14px] italic text-gray-700">{edu.schoolName}{edu.location ? `, ${edu.location}` : ""}</p>
                                    </div>
                                    <span className="text-[12px] text-gray-600 shrink-0 mt-0.5">
                                        {edu.startDate} – {edu.endDate}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {/* Skills */}
                {skills.length > 0 && (
                    <>
                        <Heading title="Skills" />
                        <div className="space-y-2">
                            {Object.entries(groupedSkills).map(([cat, list]) => (
                                <div key={cat} className="flex gap-2 text-[13spx]">
                                    <span className="font-bold text-gray-900 shrink-0">{cat}:</span>
                                    <span className="text-gray-800">
                                        {list.flatMap((s: Skill) => s.skills).join(", ")}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {/* Certifications */}
                {certifications?.length > 0 && (
                    <>
                        <Heading title="Certifications" />
                        <div className="space-y-2">
                            {certifications.map((cert: Certification) => (
                                <div key={cert.id} className="flex justify-between text-[13px]">
                                    <span><span className="font-bold">{cert.title}</span> — {cert.issuer}</span>
                                    {cert.issueDate && <span className="text-gray-600">{cert.issueDate}</span>}
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {/* Languages */}
                {languages?.length > 0 && (
                    <>
                        <Heading title="Languages" />
                        <p className="text-[13px] text-gray-800">
                            {languages.map((l: Language) => `${l.language} (${l.proficiency})`).join(" · ")}
                        </p>
                    </>
                )}

                {/* Hobbies */}
                {hobbies?.length > 0 && (
                    <>
                        <Heading title="Interests" />
                        <p className="text-[13px] text-gray-800">{hobbies.join(", ")}</p>
                    </>
                )}

                {/* Custom Sections */}
                {customSections?.map((sec: CustomSection) => (
                    <div key={sec.id}>
                        <Heading title={sec.title} />
                        <p className="text-[13px] leading-[1.6] text-gray-800 whitespace-pre-line">{sec.content}</p>
                    </div>
                ))}

            </div>
        </div>
    );
}
