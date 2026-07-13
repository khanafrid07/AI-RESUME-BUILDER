import {
    Mail,
    Phone,
    MapPin,
    Briefcase,
    GraduationCap,
    Code2,
    Award,
} from "lucide-react";


export default function BoldModern() {
    return (
        <div className="min-h-screen ">
            <div className="w-[794px] min-h-[1123px] mx-auto bg-white shadow-2xl">

                {/* Vibrant Header with Gradient */}
                <div className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white px-12 py-14">
                    <h1 className="text-6xl font-black tracking-tight">Afrid Khan</h1>
                    <p className="text-xl mt-3 font-light text-orange-50">Full Stack Developer & Solution Architect</p>
                    <div className="flex gap-2 mt-4">
                        <div className="w-8 h-1 bg-white"></div>
                        <div className="w-8 h-1 bg-orange-200"></div>
                        <div className="w-8 h-1 bg-pink-200"></div>
                    </div>
                </div>

                {/* Contact Section with Color Blocks */}
                <div className="grid grid-cols-3 bg-gradient-to-r from-orange-50 to-pink-50">
                    <div className="px-6 py-4 border-r border-orange-200">
                        <p className="text-xs text-gray-500 font-semibold">PHONE</p>
                        <p className="text-sm font-bold text-gray-900 mt-1">+91 9814790265</p>
                    </div>
                    <div className="px-6 py-4 border-r border-orange-200">
                        <p className="text-xs text-gray-500 font-semibold">EMAIL</p>
                        <p className="text-sm font-bold text-gray-900 mt-1">example@gmail.com</p>
                    </div>
                    <div className="px-6 py-4">
                        <p className="text-xs text-gray-500 font-semibold">LOCATION</p>
                        <p className="text-sm font-bold text-gray-900 mt-1">New York, USA</p>
                    </div>
                </div>

                <div className="px-12 py-10 space-y-8">

                    {/* Professional Summary */}
                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-1 h-8 bg-gradient-to-b from-orange-500 to-pink-500 rounded-full"></div>
                            <h2 className="text-sm font-black uppercase tracking-widest text-gray-900">Professional Summary</h2>
                        </div>
                        <p className="text-sm text-gray-700 leading-7 ml-4">
                            Innovative full-stack developer with 6+ years of experience architecting and delivering
                            high-performance web applications. Proven expertise in React, Node.js, and cloud technologies.
                            Leader with strong mentoring capabilities.
                        </p>
                    </section>

                    {/* Experience */}
                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <Briefcase size={18} className="text-orange-600" />
                            <h2 className="text-sm font-black uppercase tracking-widest text-gray-900">Professional Experience</h2>
                        </div>
                        <div className="space-y-5 ml-4">
                            <div className="bg-gradient-to-r from-orange-50 to-pink-50 border-l-4 border-orange-500 pl-4 py-4 pr-4 rounded-r-lg">
                                <h3 className="font-bold text-sm text-gray-900">Senior Developer & Tech Lead</h3>
                                <p className="text-xs font-semibold text-orange-600 mt-1">ABC Company | 2024 - Present</p>
                                <ul className="list-disc ml-5 mt-3 space-y-1 text-sm text-gray-700">
                                    <li>Led team of 8 developers across multiple projects</li>
                                    <li>Architected microservices improving scalability by 10x</li>
                                    <li>Implemented CI/CD reducing deployment time by 80%</li>
                                    <li>Mentored junior developers and code review culture</li>
                                </ul>
                            </div>
                            <div className="bg-gradient-to-r from-pink-50 to-purple-50 border-l-4 border-pink-500 pl-4 py-4 pr-4 rounded-r-lg">
                                <h3 className="font-bold text-sm text-gray-900">Full Stack Developer</h3>
                                <p className="text-xs font-semibold text-pink-600 mt-1">Startup Inc | 2022 - 2024</p>
                                <p className="text-sm text-gray-700 mt-2">Built and maintained multiple production applications, API design, database optimization</p>
                            </div>
                        </div>
                    </section>

                    {/* Skills */}
                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <Code2 size={18} className="text-orange-600" />
                            <h2 className="text-sm font-black uppercase tracking-widest text-gray-900">Technical Stack</h2>
                        </div>
                        <div className="grid grid-cols-4 gap-3 ml-4">
                            {["React", "TypeScript", "Node.js", "Express", "MongoDB", "Docker", "AWS", "GraphQL", "Tailwind", "PostgreSQL", "Redis", "Git"].map((skill) => (
                                <div key={skill} className="bg-gradient-to-r from-orange-100 to-pink-100 px-3 py-2 rounded-lg border border-orange-200">
                                    <span className="text-xs font-bold text-gray-900">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Education & Awards */}
                    <div className="grid grid-cols-2 gap-6">
                        <section>
                            <div className="flex items-center gap-2 mb-3">
                                <GraduationCap size={16} className="text-orange-600" />
                                <h2 className="text-sm font-black uppercase tracking-widest text-gray-900">Education</h2>
                            </div>
                            <div className="ml-6 bg-orange-50 p-3 rounded border-l-4 border-orange-500">
                                <h3 className="font-bold text-sm text-gray-900">BCA</h3>
                                <p className="text-xs text-gray-600 mt-1">XYZ University | 2021 - 2024</p>
                            </div>
                        </section>
                        <section>
                            <div className="flex items-center gap-2 mb-3">
                                <Award size={16} className="text-orange-600" />
                                <h2 className="text-sm font-black uppercase tracking-widest text-gray-900">Awards</h2>
                            </div>
                            <div className="ml-6 space-y-2">
                                <p className="text-sm font-semibold text-gray-900">🏆 Developer of the Year 2024</p>
                                <p className="text-sm font-semibold text-gray-900">🚀 Innovation Award 2023</p>
                            </div>
                        </section>
                    </div>

                </div>
            </div>
        </div>
    );
}