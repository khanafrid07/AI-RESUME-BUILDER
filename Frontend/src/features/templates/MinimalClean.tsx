import {
    Mail,
    Phone,
    MapPin,
    Globe,
    Briefcase,
    GraduationCap,
    Code2,
    Award,
    FolderKanban,
} from "lucide-react";

export default function MinimalClean() {
    return (
        <div className="bg-gray-300 min-h-screen py-10">
            <div className="w-[794px] min-h-[1123px] mx-auto bg-white shadow-xl">

                {/* Colorful Header */}
                <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-14">
                    <h1 className="text-6xl font-black tracking-tight">Afrid Khan</h1>
                    <p className="text-xl mt-2 font-light text-cyan-50">Software Developer & Full Stack Engineer</p>
                </div>

                {/* Contact Bar */}
                <div className="bg-cyan-50 px-10 py-4 flex gap-6 text-sm font-medium text-gray-700 border-b-4 border-cyan-500">
                    <span className="flex items-center gap-2"><Phone size={16} /> +91 9814790265</span>
                    <span className="flex items-center gap-2"><Mail size={16} /> example@gmail.com</span>
                    <span className="flex items-center gap-2"><MapPin size={16} /> New York, USA</span>
                </div>

                <div className="px-10 py-8 space-y-8">

                    {/* Profile */}
                    <section>
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-1 h-6 bg-cyan-500 rounded-full"></div>
                            <h2 className="text-sm font-black uppercase tracking-wider text-gray-900">Profile</h2>
                        </div>
                        <p className="text-sm text-gray-700 leading-7 ml-4">
                            Full-stack developer with 3+ years experience. Specialist in building scalable, high-performance applications using modern technologies. Passionate about clean code and user-centered design.
                        </p>
                    </section>

                    {/* Experience */}
                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <Briefcase size={18} className="text-cyan-600" />
                            <h2 className="text-sm font-black uppercase tracking-wider text-gray-900">Experience</h2>
                        </div>
                        <div className="space-y-4 ml-4">
                            <div className="border-l-4 border-cyan-300 pl-4">
                                <h3 className="font-bold text-sm text-gray-900">Frontend Developer</h3>
                                <p className="text-xs font-semibold text-cyan-600 mt-1">ABC Company | 2024 - Present</p>
                                <ul className="list-disc ml-5 mt-3 text-sm space-y-1 text-gray-700">
                                    <li>Built 20+ responsive React components</li>
                                    <li>Improved performance by 40%</li>
                                    <li>Led mentoring of junior developers</li>
                                </ul>
                            </div>
                            <div className="border-l-4 border-cyan-300 pl-4">
                                <h3 className="font-bold text-sm text-gray-900">Junior Developer</h3>
                                <p className="text-xs font-semibold text-cyan-600 mt-1">XYZ Startup | 2023 - 2024</p>
                                <p className="text-sm text-gray-700 mt-2">Full-stack development with React and Node.js</p>
                            </div>
                        </div>
                    </section>

                    {/* Skills */}
                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <Code2 size={18} className="text-cyan-600" />
                            <h2 className="text-sm font-black uppercase tracking-wider text-gray-900">Skills</h2>
                        </div>
                        <div className="grid grid-cols-3 gap-3 ml-4">
                            {["React.js", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS", "Express.js", "Git", "REST APIs", "AWS"].map((skill) => (
                                <div key={skill} className="bg-cyan-50 px-3 py-2 rounded-lg border border-cyan-200">
                                    <span className="text-sm font-medium text-gray-900">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Education */}
                    <section>
                        <div className="flex items-center gap-3 mb-3">
                            <GraduationCap size={18} className="text-cyan-600" />
                            <h2 className="text-sm font-black uppercase tracking-wider text-gray-900">Education</h2>
                        </div>
                        <div className="ml-4 bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-500">
                            <p className="font-bold text-sm text-gray-900">BCA (Bachelor of Computer Applications)</p>
                            <p className="text-xs text-cyan-600 font-semibold mt-1">XYZ University | 2021 - 2024</p>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
}