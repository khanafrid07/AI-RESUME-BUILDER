import type { ResumeData, Skill, Experience, Education, Projects, Certification, Language, CustomSection } from "../../EditorForms/types";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

type Props = { resumeData: ResumeData };

function Heading({ title }: { title: string }) {
    return (
        <div className="mt-6 mb-3">
            <h2
                className="text-[14px] font-extrabold uppercase tracking-[1.2px] text-gray-900 pb-1"
                style={{ borderBottom: "2px solid #1a1a1a" }}
            >
                {title}
            </h2>
        </div>
    );
}

export default function ExecutiveTimeline({ resumeData }: Props) {
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
        <div className="mx-auto w-[794px] min-h-[1123px] bg-white" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>

            {/* ── HEADER ── */}
            <div className="px-10 pt-9 pb-5" style={{ borderBottom: "3px solid #1a1a1a" }}>
                <h1 className="text-[30px] font-black text-gray-900 uppercase tracking-wide leading-none">
                    {personalInfo.firstName}{" "}
                    <span className="font-light">{personalInfo.lastName}</span>
                </h1>

                {targetRole && (
                    <p className="text-[16px] font-semibold text-gray-600 mt-1 tracking-wide">
                        {targetRole}
                    </p>
                )}

                <div className="flex flex-wrap gap-x-8 gap-y-1 mt-3 text-[14px] text-gray-700">
                    {personalInfo.phone && (
                        <span className="flex items-center gap-1.5"><Phone size={10} className="shrink-0" />{personalInfo.phone}</span>
                    )}
                    {personalInfo.email && (
                        <span className="flex items-center gap-1.5"><Mail size={10} className="shrink-0" />{personalInfo.email}</span>
                    )}
                    {(personalInfo.city || personalInfo.country) && (
                        <span className="flex items-center gap-1.5">
                            <MapPin size={10} className="shrink-0" />
                            {[personalInfo.city, personalInfo.country].filter(Boolean).join(", ")}
                        </span>
                    )}
                    {personalInfo.portfolioWeb && (
                        <span className="flex items-center gap-1.5"><Globe size={10} className="shrink-0" />{personalInfo.portfolioWeb}</span>
                    )}
                </div>
            </div>

            {/* ── BODY: Two-column layout ── */}
            <div className="flex px-10 pb-8 gap-8">

                {/* Left column – main content */}
                <div className="flex-1 min-w-0">

                    {summary && (
                        <>
                            <Heading title="Summary" />
                            <p className="text-[14px] text-justify leading-[1.7] text-gray-800">{summary}</p>
                        </>
                    )}

                    {filteredExp.length > 0 && (
                        <>
                            <Heading title="Professional Experience" />
                            <div className="space-y-5">
                                {filteredExp.map((exp: Experience, i: number) => (
                                    <div key={i} className="relative pl-4" style={{ borderLeft: "2px solid #d1d5db" }}>
                                        <div className="flex justify-between items-baseline">
                                            <h3 className="text-[14px] font-bold text-gray-900">{exp.jobRole}</h3>
                                            <span className="text-[11px] text-gray-500 shrink-0 ml-2">
                                                {exp.startDate} – {exp.currentlyWorking ? "Present" : exp.endDate}
                                            </span>
                                        </div>
                                        <p className="text-[12px] font-semibold text-gray-700">
                                            {exp.companyName}{exp.location ? ` | ${exp.location}` : ""}
                                        </p>
                                        <ul className="mt-2 list-disc pl-4 space-y-1">
                                            {exp.description.map((item: string, j: number) => (
                                                <li key={j} className="text-[14px] leading-[1.6] text-gray-800">{item}</li>
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
                                    <div key={i} className="relative pl-4" style={{ borderLeft: "2px solid #d1d5db" }}>
                                        <div className="flex justify-between items-baseline">
                                            <h3 className="text-[15px] font-bold">{proj.projectName}</h3>
                                            <span className="text-[11px] text-gray-500 shrink-0 ml-2">
                                                {proj.startDate}{proj.endDate ? ` – ${proj.endDate}` : ""}
                                            </span>
                                        </div>
                                        <p className="text-[14px]  leading-[1.6] text-gray-800 mt-1">{proj.description}</p>
                                        {proj.technologies.length > 0 && (
                                            <p className="text-[14px] text-gray-600 mt-1">
                                                <span className="font-semibold">Stack:</span> {proj.technologies.join(", ")}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </>
                    )}

                    {customSections?.map((sec: CustomSection) => (
                        <div key={sec.id}>
                            <Heading title={sec.title} />
                            <p className="text-[14px] leading-[1.6] text-gray-800 whitespace-pre-line">{sec.content}</p>
                        </div>
                    ))}
                </div>

                {/* Right column – sidebar */}
                <div className="w-[185px] shrink-0">

                    {filteredEdu.length > 0 && (
                        <>
                            <Heading title="Education" />
                            <div className="space-y-4">
                                {filteredEdu.map((edu: Education, i: number) => (
                                    <div key={i}>
                                        <h3 className="text-[14px] font-bold text-gray-900">{edu.degree}</h3>
                                        <p className="text-[12px] text-gray-700 mt-0.5">{edu.schoolName}</p>
                                        {edu.location && <p className="text-[12px] text-gray-500">{edu.location}</p>}
                                        <p className="text-[11px] text-gray-500">{edu.startDate} – {edu.endDate}</p>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}

                    {skills.length > 0 && (
                        <>
                            <Heading title="Skills" />
                            <div className="space-y-3">
                                {Object.entries(groupedSkills).map(([cat, list]) => (
                                    <div key={cat}>
                                        <p className="text-[13px] font-bold text-gray-800 uppercase tracking-wide">{cat}</p>
                                        <p className="text-[13px] text-gray-700 mt-0.5 leading-[1.6]">
                                            {list.flatMap((s: Skill) => s.skills).join(" · ")}
                                        </p>
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
                                    <div key={cert.id}>
                                        <p className="text-[13px] font-bold text-gray-900">{cert.title}</p>
                                        <p className="text-[13px] text-gray-600">{cert.issuer}</p>
                                        {cert.issueDate && <p className="text-[11px] text-gray-500">{cert.issueDate}</p>}
                                    </div>
                                ))}
                            </div>
                        </>
                    )}

                    {languages?.length > 0 && (
                        <>
                            <Heading title="Languages" />
                            <div className="space-y-1">
                                {languages.map((l: Language) => (
                                    <div key={l.id} className="flex justify-between text-[13px]">
                                        <span className="text-gray-800 font-medium">{l.language}</span>
                                        <span className="text-gray-500">{l.proficiency}</span>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}

                    {hobbies?.length > 0 && (
                        <>
                            <Heading title="Interests" />
                            <p className="text-[11px] text-gray-700 leading-[1.7]">{hobbies.join(", ")}</p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
