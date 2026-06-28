import {
    Mail,
    Phone,
    MapPin,
    Briefcase,
    GraduationCap,
    Code2,
} from "lucide-react";

export default function ExecutiveSlate() {
    return (
        <div className=" min-h-screen py-10">
            <div className="w-[794px] min-h-[1123px] mx-auto bg-white shadow-xl">

                <div className="grid grid-cols-4">
                    {/* Sidebar */}
                    <div className="col-span-1 bg-gradient-to-b from-red-700 to-red-900 text-white px-6 py-10 space-y-8">
                        
                        {/* Name */}
                        <div>
                            <div className="w-16 h-16 rounded-full bg-red-200 mx-auto mb-3"></div>
                            <h1 className="text-2xl font-black text-center">Afrid Khan</h1>
                            <p className="text-red-100 text-xs text-center mt-2 font-semibold">DEVELOPER</p>
                        </div>

                        {/* Contact */}
                        <div className="space-y-3 text-xs">
                            <p className="flex gap-2 items-start"><Phone size={14} className="mt-0.5 flex-shrink-0" /> +91 9814790265</p>
                            <p className="flex gap-2 items-start"><Mail size={14} className="mt-0.5 flex-shrink-0" /> example@gmail.com</p>
                            <p className="flex gap-2 items-start"><MapPin size={14} className="mt-0.5 flex-shrink-0" /> New York</p>
                        </div>

                        {/* Skills */}
                        <div>
                            <h3 className="text-xs font-black uppercase tracking-wider mb-3 border-b border-red-200 pb-2">Skills</h3>
                            <ul className="space-y-2 text-xs">
                                <li>• React.js</li>
                                <li>• TypeScript</li>
                                <li>• Node.js</li>
                                <li>• MongoDB</li>
                                <li>• Express</li>
                                <li>• Tailwind</li>
                            </ul>
                        </div>

                        {/* Languages */}
                        <div>
                            <h3 className="text-xs font-black uppercase tracking-wider mb-2 border-b border-red-200 pb-2">Languages</h3>
                            <ul className="space-y-1 text-xs">
                                <li>• English</li>
                                <li>• Hindi</li>
                                <li>• Urdu</li>
                            </ul>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="col-span-3 px-8 py-8 space-y-8">

                        {/* Summary */}
                        <section>
                            <h2 className="text-sm font-black uppercase tracking-widest text-red-700 mb-3 border-b-2 border-red-700 pb-2">
                                Professional Profile
                            </h2>
                            <p className="text-sm text-gray-700 leading-7">
                                Results-oriented full-stack developer with 5+ years of experience. 
                                Specialist in React, Node.js, and scalable architecture. 
                                Track record of delivering high-impact solutions for enterprise clients.
                            </p>
                        </section>

                        {/* Experience */}
                        <section>
                            <h2 className="text-sm font-black uppercase tracking-widest text-red-700 mb-4 border-b-2 border-red-700 pb-2">
                                Professional Experience
                            </h2>
                            <div className="space-y-5">
                                <div>
                                    <h3 className="font-bold text-sm text-gray-900">Senior Developer</h3>
                                    <p className="text-xs font-semibold text-red-600 mt-1">ABC Corporation | 2024 - Present</p>
                                    <ul className="list-disc ml-5 mt-2 space-y-1 text-sm text-gray-700">
                                        <li>Led architecture redesign improving performance by 70%</li>
                                        <li>Managed team of developers and code reviews</li>
                                        <li>Implemented CI/CD pipelines</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm text-gray-900">Full Stack Developer</h3>
                                    <p className="text-xs font-semibold text-red-600 mt-1">Tech Solutions | 2022 - 2024</p>
                                    <p className="text-sm text-gray-700 mt-2">Full-stack development, database optimization, API design</p>
                                </div>
                            </div>
                        </section>

                        {/* Projects */}
                        <section>
                            <h2 className="text-sm font-black uppercase tracking-widest text-red-700 mb-3 border-b-2 border-red-700 pb-2">
                                Notable Projects
                            </h2>
                            <div className="space-y-3">
                                <div>
                                    <h3 className="font-semibold text-sm text-gray-900">AI Resume Builder</h3>
                                    <p className="text-sm text-gray-700 mt-1">Built with React, Node.js, MongoDB. Features template system and PDF export.</p>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
            </div>
        </div>
    );
}