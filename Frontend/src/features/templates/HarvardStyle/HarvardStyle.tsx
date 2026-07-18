import type { ResumeData, Skill, Experience, Education, Projects, Certification, Language, CustomSection } from "../../EditorForms/types";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

type Props = { resumeData: ResumeData };

function Heading({ title }: { title: string }) {
    return (
        <div className="mt-6 mb-3">
            <h2
                className="text-[11px] font-bold uppercase tracking-[3.5px] text-gray-900 text-center py-1"
                style={{ borderTop: "1px solid #374151", borderBottom: "1px solid #374151" }}
            >
                {title}
            </h2>
        </div>
    );
}

export default function HarvardStyle({ resumeData }: Props) {
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
        <div
            className="mx-auto w-[794px] min-h-[1123px] bg-white text-gray-900"
            style={{ fontFamily: "'Garamond', 'Georgia', 'Times New Roman', serif" }}
        >

            {/* ── HEADER ── */}
            <div className="text-center px-12 pt-8 ">
                <h1 className="text-[28px] font-bold text-gray-900 tracking-[1px]">
                    {personalInfo.firstName} {personalInfo.lastName}
                </h1>

                <div
                    className="flex flex-wrap justify-center gap-x-4 gap-y-1 mt-2 text-[11px] text-gray-700"
                    style={{ borderTop: "1px solid #374151", borderBottom: "1px solid #374151", padding: "6px 0" }}
                >
                    {personalInfo.phone && (
                        <span className="flex items-center gap-1"><Phone size={9} />{personalInfo.phone}</span>
                    )}
                    {personalInfo.email && (
                        <span className="flex items-center gap-1"><Mail size={9} />{personalInfo.email}</span>
                    )}
                    {(personalInfo.city || personalInfo.country) && (
                        <span className="flex items-center gap-1">
                            <MapPin size={9} />
                            {[personalInfo.city, personalInfo.country].filter(Boolean).join(", ")}
                        </span>
                    )}
                    {personalInfo.portfolioWeb && (
                        <span className="flex items-center gap-1"><Globe size={9} />{personalInfo.portfolioWeb}</span>
                    )}
                </div>

                {targetRole && (
                    <p className="text-[16px] text-gray-600 italic mt-6">{targetRole}</p>
                )}
            </div>

            {/* ── BODY ── */}
            <div className="px-12 pb-10">

                {summary && (
                    <>
                        <Heading title="Summary" />
                        <p className="text-[12.5px] leading-[1.8] text-gray-800 text-justify">{summary}</p>
                    </>
                )}

                {filteredEdu.length > 0 && (
                    <>
                        <Heading title="Education" />
                        <div className="space-y-4">
                            {filteredEdu.map((edu: Education, i: number) => (
                                <div key={i} className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-[13px] font-bold text-gray-900">{edu.schoolName}</h3>
                                        <p className="text-[12px] italic text-gray-700">
                                            {edu.degree}{edu.location ? `, ${edu.location}` : ""}
                                        </p>
                                        {edu.description && (
                                            <p className="text-[12px] text-gray-700 mt-0.5">{edu.description}</p>
                                        )}
                                    </div>
                                    <span className="text-[11.5px] text-gray-600 shrink-0 mt-0.5">
                                        {edu.startDate} – {edu.endDate}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {filteredExp.length > 0 && (
                    <>
                        <Heading title="Professional Experience" />
                        <div className="space-y-5">
                            {filteredExp.map((exp: Experience, i: number) => (
                                <div key={i}>
                                    <div className="flex justify-between items-baseline">
                                        <h3 className="text-[13px] font-bold text-gray-900">
                                            {exp.companyName}{exp.location ? ` — ${exp.location}` : ""}
                                        </h3>
                                        <span className="text-[11.5px] text-gray-600">
                                            {exp.startDate} – {exp.currentlyWorking ? "Present" : exp.endDate}
                                        </span>
                                    </div>
                                    <p className="text-[12px] italic text-gray-700">{exp.jobRole}</p>
                                    <ul className="mt-2 list-disc pl-5 space-y-1">
                                        {exp.description.map((item: string, j: number) => (
                                            <li key={j} className="text-[12.5px] leading-[1.7] text-gray-800">{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {filteredProj.length > 0 && (
                    <>
                        <Heading title="Projects" />
                        <div className="space-y-4">
                            {filteredProj.map((proj: Projects, i: number) => (
                                <div key={i}>
                                    <div className="flex justify-between items-baseline">
                                        <h3 className="text-[13px] font-bold">{proj.projectName}</h3>
                                        <span className="text-[11.5px] text-gray-600">
                                            {proj.startDate}{proj.endDate ? ` – ${proj.endDate}` : ""}
                                        </span>
                                    </div>
                                    <p className="text-[12.5px] leading-[1.7] text-gray-800 mt-1 text-justify">
                                        {proj.description}
                                    </p>
                                    {proj.technologies.length > 0 && (
                                        <p className="text-[11.5px] italic text-gray-600 mt-1">
                                            Technologies: {proj.technologies.join(", ")}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {skills.length > 0 && (
                    <>
                        <Heading title="Skills" />
                        <div className="space-y-1.5">
                            {Object.entries(groupedSkills).map(([cat, list]) => (
                                <p key={cat} className="text-[12.5px] text-gray-800">
                                    <span className="font-bold">{cat}: </span>
                                    {list.flatMap((s: Skill) => s.skills).join(", ")}
                                </p>
                            ))}
                        </div>
                    </>
                )}

                {certifications?.length > 0 && (
                    <>
                        <Heading title="Certifications" />
                        <div className="space-y-2">
                            {certifications.map((cert: Certification) => (
                                <div key={cert.id} className="flex justify-between">
                                    <p className="text-[12.5px]">
                                        <span className="font-bold">{cert.title}</span>, {cert.issuer}
                                    </p>
                                    {cert.issueDate && (
                                        <span className="text-[11.5px] text-gray-600">{cert.issueDate}</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {languages?.length > 0 && (
                    <>
                        <Heading title="Languages" />
                        <p className="text-[12.5px] text-gray-800 text-center">
                            {languages.map((l: Language) => `${l.language} (${l.proficiency})`).join(" · ")}
                        </p>
                    </>
                )}

                {hobbies?.length > 0 && (
                    <>
                        <Heading title="Activities &amp; Interests" />
                        <p className="text-[12.5px] text-gray-800">{hobbies.join(", ")}</p>
                    </>
                )}

                {customSections?.map((sec: CustomSection) => (
                    <div key={sec.id}>
                        <Heading title={sec.title} />
                        <p className="text-[12.5px] leading-[1.7] text-gray-800 whitespace-pre-line">{sec.content}</p>
                    </div>
                ))}

            </div>
        </div>
    );
}
