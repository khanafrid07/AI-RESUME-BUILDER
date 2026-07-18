import type { ResumeData, Skill, Experience, Education, Projects, Certification, Language, CustomSection } from "../../EditorForms/types";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

type Props = { resumeData: ResumeData };

function Heading({ title }: { title: string }) {
    return (
        <div className="mt-6 mb-3">
            <div className="flex items-center gap-0">
                <div className="w-1 h-4 bg-gray-800 mr-2" />
                <h2 className="text-[11.5px] font-black uppercase tracking-[2px] text-gray-900">
                    {title}
                </h2>
            </div>
            <div className="border-b border-gray-300 mt-1" />
        </div>
    );
}

export default function ChronologicalPro({ resumeData }: Props) {
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
            style={{ fontFamily: "Calibri, 'Segoe UI', Arial, sans-serif" }}
        >

            {/* ── HEADER ── */}
            <div className="px-10 pt-9">
                <h1 className="text-[26px] font-bold text-gray-900 tracking-normal">
                    {personalInfo.firstName} {personalInfo.lastName}
                </h1>

                {targetRole && (
                    <p className="text-[13px] text-gray-600 mt-0.5">{targetRole}</p>
                )}

                <div className="flex flex-wrap items-center gap-x-1 mt-2 text-[11px] text-gray-700">
                    {personalInfo.phone && (
                        <>
                            <Phone size={9} className="text-gray-500" />
                            <span>{personalInfo.phone}</span>
                        </>
                    )}
                    {personalInfo.phone && personalInfo.email && <span className="text-gray-400 mx-1">|</span>}
                    {personalInfo.email && (
                        <>
                            <Mail size={9} className="text-gray-500" />
                            <span>{personalInfo.email}</span>
                        </>
                    )}
                    {(personalInfo.city || personalInfo.country) && (
                        <>
                            <span className="text-gray-400 mx-1">|</span>
                            <MapPin size={9} className="text-gray-500" />
                            <span>{[personalInfo.city, personalInfo.country].filter(Boolean).join(", ")}</span>
                        </>
                    )}
                    {personalInfo.portfolioWeb && (
                        <>
                            <span className="text-gray-400 mx-1">|</span>
                            <Globe size={9} className="text-gray-500" />
                            <span>{personalInfo.portfolioWeb}</span>
                        </>
                    )}
                </div>

                <div className="border-b-[2px] border-gray-800 mt-2" />
            </div>

            {/* ── BODY ── */}
            <div className="px-10 pb-10">

                {summary && (
                    <>
                        <Heading title="Summary" />
                        <p className="text-[12px] leading-[1.7] text-gray-800">{summary}</p>
                    </>
                )}

                {filteredExp.length > 0 && (
                    <>
                        <Heading title="Experience" />
                        <div className="space-y-5">
                            {filteredExp.map((exp: Experience, i: number) => (
                                <div key={i}>
                                    <div className="flex justify-between items-baseline">
                                        <h3 className="text-[13px] font-bold text-gray-900">{exp.jobRole}</h3>
                                        <span className="text-[11px] text-gray-500">
                                            {exp.startDate} – {exp.currentlyWorking ? "Present" : exp.endDate}
                                        </span>
                                    </div>
                                    <p className="text-[12px] text-gray-700 font-semibold">
                                        {exp.companyName}{exp.location ? `, ${exp.location}` : ""}
                                    </p>
                                    <ul className="mt-1.5 list-disc pl-5 space-y-1">
                                        {exp.description.map((item: string, j: number) => (
                                            <li key={j} className="text-[12px] leading-[1.6] text-gray-800">{item}</li>
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
                                        <span className="text-[11px] text-gray-500">
                                            {proj.startDate}{proj.endDate ? ` – ${proj.endDate}` : ""}
                                        </span>
                                    </div>
                                    <p className="text-[12px] text-gray-800 leading-[1.6] mt-1">{proj.description}</p>
                                    {proj.technologies.length > 0 && (
                                        <p className="text-[11px] text-gray-600 mt-1">
                                            <span className="font-semibold">Technologies:</span> {proj.technologies.join(", ")}
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
                        <div className="space-y-3">
                            {filteredEdu.map((edu: Education, i: number) => (
                                <div key={i} className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-[13px] font-bold text-gray-900">{edu.degree}</h3>
                                        <p className="text-[12px] text-gray-700">
                                            {edu.schoolName}{edu.location ? `, ${edu.location}` : ""}
                                        </p>
                                    </div>
                                    <span className="text-[11px] text-gray-500 shrink-0 mt-0.5">
                                        {edu.startDate} – {edu.endDate}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {skills.length > 0 && (
                    <>
                        <Heading title="Skills" />
                        <div className="space-y-2">
                            {Object.entries(groupedSkills).map(([cat, list]) => (
                                <div key={cat} className="flex gap-1 text-[12px] flex-wrap">
                                    <span className="font-bold text-gray-900">{cat}:</span>
                                    <span className="text-gray-800">{list.flatMap((s: Skill) => s.skills).join(" · ")}</span>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {certifications?.length > 0 && (
                    <>
                        <Heading title="Certifications" />
                        <div className="space-y-2">
                            {certifications.map((cert: Certification) => (
                                <div key={cert.id} className="flex justify-between text-[12px]">
                                    <span><span className="font-bold">{cert.title}</span> · {cert.issuer}</span>
                                    {cert.issueDate && <span className="text-gray-500">{cert.issueDate}</span>}
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {languages?.length > 0 && (
                    <>
                        <Heading title="Languages" />
                        <div className="flex flex-wrap gap-x-6 gap-y-1">
                            {languages.map((l: Language) => (
                                <span key={l.id} className="text-[12px]">
                                    <span className="font-semibold">{l.language}</span> — {l.proficiency}
                                </span>
                            ))}
                        </div>
                    </>
                )}

                {hobbies?.length > 0 && (
                    <>
                        <Heading title="Interests" />
                        <p className="text-[12px] text-gray-800">{hobbies.join(", ")}</p>
                    </>
                )}

                {customSections?.map((sec: CustomSection) => (
                    <div key={sec.id}>
                        <Heading title={sec.title} />
                        <p className="text-[12px] leading-[1.6] text-gray-800 whitespace-pre-line">{sec.content}</p>
                    </div>
                ))}

            </div>
        </div>
    );
}
