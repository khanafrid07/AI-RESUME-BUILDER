import {
    Mail,
    Phone,
    MapPin,
    Briefcase,
    GraduationCap,
    Award,
    Code2,
    Globe,
} from "lucide-react";
import type { ContactInfo, AiFormInfo } from "../Dashboard/types";


export default function ClassicFormatted({contactInfo, aiFormInfo}:{contactInfo:ContactInfo, aiFormInfo:AiFormInfo}) {
    return (
        <div className="min-h-screen py-10">
            <div className="w-[794px] min-h-[1123px] mx-auto bg-white shadow-xl">

                {/* Split Header */}
                <div className="grid grid-cols-3">
                    <div className="col-span-2 bg-gray-900 text-white px-10 py-12">
                        <h1 className="text-5xl font-bold">{`${contactInfo?.firstName}   ${contactInfo?.lastName}`}</h1>
                        <p className="text-amber-400 font-semibold mt-2 text-lg">{aiFormInfo?.targetRole}</p>
                        <p className="text-gray-300 text-sm mt-4 leading-6">
                            Experienced in building enterprise-level applications with modern web technologies.
                        </p>
                    </div>
                    <div className="bg-amber-400 px-6 py-8 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-gray-300 border-4 border-gray-900"></div>
                    </div>
                </div>

                {/* Contact */}
            
                <div className="bg-gray-100 px-10 py-4 border-b-4 border-amber-400 grid grid-cols-2 gap-4 text-sm font-medium">
                    {contactInfo?.phone &&
                    
                    <p className="flex items-center gap-2 text-gray-800"><Phone size={16} />{ contactInfo?.phone} </p>
                    }
                    {contactInfo?.email &&
                    <p className="flex items-center gap-2 text-gray-800"><Mail size={16} />{contactInfo?.email} </p>
                    }
                    {contactInfo?.country &&
                    
                    <p className="flex items-center gap-2 text-gray-800"><MapPin size={16} />{contactInfo?.city}</p>
                    }
                    {contactInfo?.portfolioWeb &&
                    <p className="flex items-center gap-2 text-gray-800"><Globe size={16} />{contactInfo.portfolioWeb}</p>
                    }
                </div>
                

                <div className="px-10 py-8 space-y-8">

                    {/* Summary */}
                    {aiFormInfo?.summary &&
                    <section>
                        <h2 className="text-sm font-bold uppercase tracking-widest text-gray-900 border-b-2 border-amber-400 pb-2 mb-3">
                            
                            "Professional Summary"
                            
                        </h2>
                        <p className="text-sm text-gray-700 leading-7">
                           {aiFormInfo?.summary}
                        </p>
                    </section>
                    }

                    {/* Experience */}
                                {aiFormInfo?.workExperience &&
                    <section>
                        <h2 className="text-sm font-bold uppercase tracking-widest text-gray-900 border-b-2 border-amber-400 pb-2 mb-4">
                            Professional Experience
                        </h2>
                        <div className="space-y-5">
                            <div className="border-l-4 border-amber-400 pl-4">
                                
                                <h3 className="font-bold text-sm text-gray-900">Senior Frontend Developer</h3>
                                <p className="text-xs font-semibold text-amber-600 mt-1">ABC Company | 2024 - Present</p>
                                <ul className="list-disc ml-5 mt-3 text-sm space-y-1 text-gray-700">
                                    <li>Led development of customer-facing applications</li>
                                    <li>Mentored team of 3 junior developers</li>
                                    <li>Improved performance by 50% through optimization</li>
                                </ul>
                            </div>
                            <div className="border-l-4 border-amber-400 pl-4">
                                <h3 className="font-bold text-sm text-gray-900">Full Stack Developer</h3>
                                <p className="text-xs font-semibold text-amber-600 mt-1">Tech Startup | 2022 - 2024</p>
                                <p className="text-sm text-gray-700 mt-2">Developed end-to-end solutions with React and Node.js</p>
                            </div>
                        </div>
                    </section>}

                    {/* Skills & Certifications */}
                    <div className="grid grid-cols-2 gap-6">
                            {aiFormInfo?.skills&&
                        <section>
                            <h2 className="text-sm font-bold uppercase tracking-widest text-gray-900 border-b-2 border-amber-400 pb-2 mb-3">
                                Technical Skills
                            </h2>
                            <div className="space-y-2 text-sm text-gray-700">
                                <p><span className="font-semibold">Languages:</span> JavaScript, TypeScript, Python</p>
                                <p><span className="font-semibold">Frontend:</span> React, Tailwind, Next.js</p>
                                <p><span className="font-semibold">Backend:</span> Node.js, Express, MongoDB</p>
                            </div>
                            
                        </section>}
                            {aiFormInfo?.certifications&&
                        <section>
                            
                            <h2 className="text-sm font-bold uppercase tracking-widest text-gray-900 border-b-2 border-amber-400 pb-2 mb-3">
                                Certifications
                            </h2>
                            <ul className="space-y-1 text-sm text-gray-700">
                                <li className="flex gap-2"><Award size={14} className="text-amber-600" /> AWS Developer</li>
                                <li className="flex gap-2"><Award size={14} className="text-amber-600" /> React Specialist</li>
                            </ul>
                        </section>}
                    </div>

                    {/* Education */}
                    {aiFormInfo?.education&&
                    <section>
                        <h2 className="text-sm font-bold uppercase tracking-widest text-gray-900 border-b-2 border-amber-400 pb-2 mb-3">
                            Education
                        </h2>
                        <h3 className="font-bold text-sm text-gray-900">BCA (Bachelor of Computer Applications)</h3>
                        <p className="text-xs text-amber-600 font-semibold mt-1">XYZ University | 2021 - 2024</p>
                    </section>
                    }

                </div>
            </div>
        </div>
    );
}