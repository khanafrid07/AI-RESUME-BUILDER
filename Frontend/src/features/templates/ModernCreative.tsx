import {
    Mail,
    Phone,
    MapPin,
    Briefcase,
    GraduationCap,
    Award,
    Star,
} from "lucide-react";

export default function ModernCreative() {
    return (
        <div className=" min-h-screen py-10">
            <div className="w-[794px] min-h-[1123px] mx-auto bg-white shadow-2xl overflow-hidden">

                <div className="grid grid-cols-4">
                    {/* Left Sidebar - Colorful */}
                    <div className="col-span-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 text-white px-6 py-12 space-y-10">
                        
                        <div className="text-center">
                            <div className="w-20 h-20 rounded-full bg-white/30 mx-auto mb-4 flex items-center justify-center">
                                <span className="text-4xl font-black">AK</span>
                            </div>
                            <h1 className="text-lg font-black">Afrid Khan</h1>
                            <p className="text-xs font-semibold mt-1 text-purple-100">DEVELOPER</p>
                        </div>

                        {/* Quick Contact */}
                        <div className="space-y-2 text-xs leading-5">
                            <p className="flex items-start gap-2"><Phone size={13} className="mt-0.5 flex-shrink-0" /> +91 9814790265</p>
                            <p className="flex items-start gap-2"><Mail size={13} className="mt-0.5 flex-shrink-0" /> example@gmail.com</p>
                            <p className="flex items-start gap-2"><MapPin size={13} className="mt-0.5 flex-shrink-0" /> New York</p>
                        </div>

                        {/* Skills with Rating */}
                        <div>
                            <h3 className="text-xs font-black uppercase tracking-wider mb-3 pb-2 border-b-2 border-white/30">Top Skills</h3>
                            <div className="space-y-2 text-xs">
                                <div>
                                    <p className="font-semibold mb-1">React</p>
                                    <div className="flex gap-1">
                                        {[1, 2, 3, 4, 5].map(i => <Star key={i} size={10} fill="white" className="text-white" />)}
                                    </div>
                                </div>
                                <div>
                                    <p className="font-semibold mb-1">Node.js</p>
                                    <div className="flex gap-1">
                                        {[1, 2, 3, 4].map(i => <Star key={i} size={10} fill="white" className="text-white" />)}
                                    </div>
                                </div>
                                <div>
                                    <p className="font-semibold mb-1">MongoDB</p>
                                    <div className="flex gap-1">
                                        {[1, 2, 3, 4].map(i => <Star key={i} size={10} fill="white" className="text-white" />)}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Languages */}
                        <div>
                            <h3 className="text-xs font-black uppercase tracking-wider mb-2 pb-2 border-b-2 border-white/30">Languages</h3>
                            <ul className="space-y-1 text-xs">
                                <li>🇮🇳 English - Native</li>
                                <li>🇮🇳 Hindi - Fluent</li>
                                <li>🇵🇰 Urdu - Fluent</li>
                            </ul>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="col-span-3 px-8 py-10 space-y-8">

                        {/* Title Bar */}
                        <div className="border-b-4 border-indigo-500 pb-3">
                            <h2 className="text-2xl font-black text-indigo-600">Full Stack Developer</h2>
                            <p className="text-xs text-gray-600 mt-1">Building modern web applications with React, Node.js & MongoDB</p>
                        </div>

                        {/* Summary */}
                        <section>
                            <div className="inline-block bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold mb-3">
                                PROFESSIONAL PROFILE
                            </div>
                            <p className="text-sm text-gray-700 leading-7">
                                Creative and detail-oriented full-stack developer with 6+ years of experience. 
                                Specialized in building scalable, high-performance applications using modern JavaScript frameworks. 
                                Strong advocate of clean code and best practices.
                            </p>
                        </section>

                        {/* Experience */}
                        <section>
                            <div className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-bold mb-4">
                                PROFESSIONAL EXPERIENCE
                            </div>
                            <div className="space-y-4">
                                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-lg border-l-4 border-indigo-500">
                                    <h3 className="font-bold text-sm text-gray-900">Senior Developer & Tech Lead</h3>
                                    <p className="text-xs font-semibold text-indigo-600 mt-1">ABC Company | 2024 - Present</p>
                                    <ul className="list-disc ml-5 mt-2 space-y-1 text-sm text-gray-700">
                                        <li>Led 8-person development team across multiple projects</li>
                                        <li>Architected scalable microservices infrastructure</li>
                                        <li>Improved application performance by 70%</li>
                                    </ul>
                                </div>
                                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border-l-4 border-purple-500">
                                    <h3 className="font-bold text-sm text-gray-900">Full Stack Developer</h3>
                                    <p className="text-xs font-semibold text-purple-600 mt-1">Startup Inc | 2022 - 2024</p>
                                    <p className="text-sm text-gray-700 mt-2">End-to-end application development with React and Node.js</p>
                                </div>
                            </div>
                        </section>

                        {/* Notable Projects */}
                        <section>
                            <div className="inline-block bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-xs font-bold mb-3">
                                KEY PROJECTS
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="bg-gray-50 p-3 rounded border-l-2 border-indigo-500">
                                    <h4 className="font-bold text-sm text-gray-900">AI Resume Builder</h4>
                                    <p className="text-xs text-gray-600 mt-1">MERN Stack with Template System</p>
                                </div>
                                <div className="bg-gray-50 p-3 rounded border-l-2 border-purple-500">
                                    <h4 className="font-bold text-sm text-gray-900">E-commerce Platform</h4>
                                    <p className="text-xs text-gray-600 mt-1">Full-stack with Payment Gateway</p>
                                </div>
                            </div>
                        </section>

                        {/* Education */}
                        <section>
                            <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold mb-3">
                                EDUCATION
                            </div>
                            <div className="bg-green-50 p-3 rounded border-l-4 border-green-500">
                                <h3 className="font-bold text-sm text-gray-900">BCA (Bachelor of Computer Applications)</h3>
                                <p className="text-xs text-gray-600 mt-1">XYZ University | 2021 - 2024</p>
                            </div>
                        </section>

                    </div>
                </div>
            </div>
        </div>
    );
}