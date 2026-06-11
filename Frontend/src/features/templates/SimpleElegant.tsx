import {
    Mail,
    Phone,
    MapPin,
    Briefcase,
    GraduationCap,
    Code2,
    Award,
} from "lucide-react";

export default function SimpleElegant() {
    return (
        <div className="bg-gray-300 min-h-screen py-10">
            <div className="w-[794px] min-h-[1123px] mx-auto bg-white shadow-xl">

                {/* Header with color accent */}
                <div className="px-12 py-12 border-b-4 border-violet-600">
                    <h1 className="text-6xl font-light text-gray-900">Afrid Khan</h1>
                    <p className="text-violet-600 font-semibold mt-3 text-lg">FULL STACK ENGINEER</p>
                    <div className="w-24 h-1 bg-violet-600 mt-4"></div>
                </div>

                {/* Contact with background */}
                <div className="bg-violet-50 px-12 py-6 border-b-2 border-violet-200">
                    <div className="grid grid-cols-3 gap-6 text-sm">
                        <p className="flex items-center gap-3"><Phone size={16} className="text-violet-600" /> +91 9814790265</p>
                        <p className="flex items-center gap-3"><Mail size={16} className="text-violet-600" /> example@gmail.com</p>
                        <p className="flex items-center gap-3"><MapPin size={16} className="text-violet-600" /> New York, USA</p>
                    </div>
                </div>

                <div className="px-12 py-10 space-y-10">

                    {/* About */}
                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-1 h-6 bg-violet-600"></div>
                            <h2 className="text-sm font-bold uppercase tracking-widest text-gray-900">About</h2>
                        </div>
                        <p className="text-sm text-gray-700 leading-7 ml-4">
                            Innovative full-stack developer with 6+ years crafting exceptional digital experiences. 
                            Specialized in React, Node.js, and cloud-native solutions. 
                            Passionate about mentoring and knowledge sharing.
                        </p>
                    </section>

                    {/* Experience */}
                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <Briefcase size={18} className="text-violet-600" />
                            <h2 className="text-sm font-bold uppercase tracking-widest text-gray-900">Experience</h2>
                        </div>
                        <div className="space-y-5 ml-4">
                            <div className="border-l-4 border-violet-300 pl-4">
                                <h3 className="font-bold text-sm text-gray-900">Senior Full Stack Developer</h3>
                                <p className="text-xs font-semibold text-violet-600 mt-1">ABC Company | 2024 - Present</p>
                                <ul className="list-disc ml-5 mt-3 space-y-1 text-sm text-gray-700">
                                    <li>Architected microservices infrastructure</li>
                                    <li>Mentored 4 junior developers</li>
                                    <li>Improved system performance by 65%</li>
                                </ul>
                            </div>
                            <div className="border-l-4 border-violet-300 pl-4">
                                <h3 className="font-bold text-sm text-gray-900">Full Stack Developer</h3>
                                <p className="text-xs font-semibold text-violet-600 mt-1">Startup Inc | 2022 - 2024</p>
                                <p className="text-sm text-gray-700 mt-2">End-to-end development, deployment, and optimization</p>
                            </div>
                        </div>
                    </section>

                    {/* Skills */}
                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <Code2 size={18} className="text-violet-600" />
                            <h2 className="text-sm font-bold uppercase tracking-widest text-gray-900">Skills</h2>
                        </div>
                        <div className="grid grid-cols-3 gap-3 ml-4">
                            {["React", "TypeScript", "Node.js", "MongoDB", "Docker", "AWS", "Tailwind", "GraphQL"].map((skill) => (
                                <div key={skill} className="bg-violet-50 px-3 py-2 rounded border border-violet-200">
                                    <span className="text-sm font-medium text-gray-900">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Education & Certs */}
                    <div className="grid grid-cols-2 gap-6">
                        <section>
                            <div className="flex items-center gap-2 mb-3">
                                <GraduationCap size={16} className="text-violet-600" />
                                <h2 className="text-sm font-bold uppercase tracking-widest text-gray-900">Education</h2>
                            </div>
                            <h3 className="font-bold text-sm text-gray-900 ml-6">BCA</h3>
                            <p className="text-xs text-gray-600 mt-1 ml-6">XYZ University | 2021 - 2024</p>
                        </section>
                        <section>
                            <div className="flex items-center gap-2 mb-3">
                                <Award size={16} className="text-violet-600" />
                                <h2 className="text-sm font-bold uppercase tracking-widest text-gray-900">Certifications</h2>
                            </div>
                            <p className="text-sm text-gray-700 ml-6">AWS Solutions Architect</p>
                            <p className="text-sm text-gray-700 ml-6">React Specialist</p>
                        </section>
                    </div>

                </div>
            </div>
        </div>
    );
}