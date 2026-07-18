import type { ResumeData, Skill, Experience, Education, Projects, Certification, Language, CustomSection } from "../../EditorForms/types";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

type Props = { resumeData: ResumeData };

function Heading({ title }: { title: string }) {
    return (
        <div className="mt-6 mb-3 flex items-center gap-3">
            <h2 className="text-[11px] font-bold uppercase tracking-[3px] text-gray-900 shrink-0 whitespace-nowrap">
                {title}
            </h2>
            <div className="h-px bg-gray-400 flex-1" />
        </div>
    );
}

export default function FederalATS({ resumeData }: Props) {
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
            style={{ fontFamily: "Courier New, Courier, monospace" }}
        >
            {/* ── HEADER ── */}
            <div className="px-12 pt-10 pb-5 bg-gray-50 border-b-2 border-gray-900">
                <h1 className="text-[22px] font-bold text-gray-900 tracking-wide">
                    {personalInfo.lastName?.toUpperCase()}, {personalInfo.firstName}
                </h1>

                {targetRole && (
                    <p className="text-[12px] text-gray-700 mt-1 font-bold tracking-widest uppercase">
                        POSITION SOUGHT: {targetRole}
                    </p>
                )}

                <div className="mt-3 grid grid-cols-2 gap-x-8 gap-y-1 text-[11px] text-gray-800">
                    {personalInfo.phone && (
                        <span className="flex items-center gap-2"><Phone size={10} />PHONE: {personalInfo.phone}</span>
                    )}
                    {personalInfo.email && (
                        <span className="flex items-center gap-2"><Mail size={10} />EMAIL: {personalInfo.email}</span>
                    )}
                    {(personalInfo.city || personalInfo.country) && (
                        <span className="flex items-center gap-2">
                            <MapPin size={10} />
                            LOCATION: {[personalInfo.city, personalInfo.country].filter(Boolean).join(", ")}
                        </span>
                    )}
                    {personalInfo.portfolioWeb && (
                        <span className="flex items-center gap-2"><Globe size={10} />WEB: {personalInfo.portfolioWeb}</span>
                    )}
                </div>
            </div>

            {/* ── BODY ── */}
            <div className="px-12 pb-10">

                {summary && (
                    <>
                        <Heading title="Objective / Summary" />
                        <p className="text-[12px] leading-[1.8] text-gray-900">{summary}</p>
                    </>
                )}

                {filteredExp.length > 0 && (
                    <>
                        <Heading title="Work Experience" />
                        <div className="space-y-6">
                            {filteredExp.map((exp: Experience, i: number) => (
                                <div key={i}>
                                    <div className="flex justify-between">
                                        <div>
                                            <p className="text-[12px] font-bold uppercase">{exp.jobRole}</p>
                                            <p className="text-[12px]">{exp.companyName}{exp.location ? ` — ${exp.location}` : ""}</p>
                                        </div>
                                        <div className="text-right text-[11px]">
                                            <p>{exp.startDate} to {exp.currentlyWorking ? "Present" : exp.endDate}</p>
                                        </div>
                                    </div>
                                    <div className="mt-2 pl-2 border-l-2 border-gray-400">
                                        {exp.description.map((item: string, j: number) => (
                                            <p key={j} className="text-[12px] leading-[1.7]">• {item}</p>
                                        ))}
                                    </div>
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
                                    <div className="flex justify-between">
                                        <p className="text-[12px] font-bold uppercase">{proj.projectName}</p>
                                        <span className="text-[11px]">{proj.startDate}{proj.endDate ? ` to ${proj.endDate}` : ""}</span>
                                    </div>
                                    <p className="text-[12px] leading-[1.7] mt-1">{proj.description}</p>
                                    {proj.technologies.length > 0 && (
                                        <p className="text-[11px] mt-1">
                                            TECHNOLOGIES: {proj.technologies.join(", ")}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {filteredEdu.length > 0 && (
                    <>
                        <Heading title="Education" />
                        <div className="space-y-4">
                            {filteredEdu.map((edu: Education, i: number) => (
                                <div key={i} className="flex justify-between">
                                    <div>
                                        <p className="text-[12px] font-bold uppercase">{edu.degree}</p>
                                        <p className="text-[12px]">{edu.schoolName}{edu.location ? `, ${edu.location}` : ""}</p>
                                    </div>
                                    <p className="text-[11px] text-right">{edu.startDate} – {edu.endDate}</p>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {skills.length > 0 && (
                    <>
                        <Heading title="Skills &amp; Qualifications" />
                        <div className="space-y-2">
                            {Object.entries(groupedSkills).map(([cat, list]) => (
                                <p key={cat} className="text-[12px]">
                                    <span className="font-bold">{cat.toUpperCase()}: </span>
                                    {list.flatMap((s: Skill) => s.skills).join(", ")}
                                </p>
                            ))}
                        </div>
                    </>
                )}

                {certifications?.length > 0 && (
                    <>
                        <Heading title="Certifications &amp; Licenses" />
                        <div className="space-y-1">
                            {certifications.map((cert: Certification) => (
                                <p key={cert.id} className="text-[12px]">
                                    {cert.title} — {cert.issuer}{cert.issueDate ? ` (${cert.issueDate})` : ""}
                                </p>
                            ))}
                        </div>
                    </>
                )}

                {languages?.length > 0 && (
                    <>
                        <Heading title="Languages" />
                        <p className="text-[12px]">
                            {languages.map((l: Language) => `${l.language} — ${l.proficiency}`).join("; ")}
                        </p>
                    </>
                )}

                {hobbies?.length > 0 && (
                    <>
                        <Heading title="Additional Information" />
                        <p className="text-[12px]">{hobbies.join(", ")}</p>
                    </>
                )}

                {customSections?.map((sec: CustomSection) => (
                    <div key={sec.id}>
                        <Heading title={sec.title} />
                        <p className="text-[12px] leading-[1.7] whitespace-pre-line">{sec.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
