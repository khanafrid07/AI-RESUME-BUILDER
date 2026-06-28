import {
    Mail,
    Phone,
    MapPin,
    Briefcase,
    GraduationCap,
    Code2,
    Award,
} from "lucide-react";

export default function Minimalist() {
    return (
        <div className=" min-h-screen py-10">
            <div className="w-[794px] min-h-[1123px] mx-auto bg-gray-950 text-white shadow-2xl">

                {/* Header */}
                <div className="px-12 py-14 border-b-2 border-emerald-500">
                    <h1 className="text-6xl font-black text-white">Afrid Khan</h1>
                    <p className="text-emerald-400 mt-3 text-xl font-semibold">FULL STACK DEVELOPER</p>
                    <div className="w-20 h-1 bg-emerald-500 mt-4"></div>
                </div>

                {/* Contact */}
                <div className="px-12 py-6 bg-gray-900 border-b border-emerald-900 space-y-2 text-sm">
                    <p className="flex items-center gap-3"><Phone size={16} className="text-emerald-400" /> +91 9814790265</p>
                    <p className="flex items-center gap-3"><Mail size={16} className="text-emerald-400" /> example@gmail.com</p>
                    <p className="flex items-center gap-3"><MapPin size={16} className="text-emerald-400" /> New York, USA</p>
                </div>

                <div className="px-12 py-10 space-y-10">

                    {/* About */}
                    <section>
                        <h2 className="text-sm font-black uppercase tracking-widest text-emerald-400 mb-4">About</h2>
                        <p className="text-gray-300 leading-7 text-sm">
                            Passionate full-stack developer specializing in React and Node.js. 
                            5+ years of experience building high-performance web applications. 
                            Problem solver with a keen eye for clean, maintainable code.
                        </p>
                    </section>

                    {/* Experience */}
                    <section>
                        <h2 className="text-sm font-black uppercase tracking-widest text-emerald-400 mb-4">Experience</h2>
                        <div className="space-y-5">
                            <div>
                                <h3 className="font-bold text-sm text-white">Lead Frontend Developer</h3>
                                <p className="text-emerald-400 text-xs font-semibold mt-1">ABC Company | 2024 - Present</p>
                                <ul className="list-disc ml-5 mt-3 space-y-1 text-gray-300 text-sm">
                                    <li>Architected new frontend infrastructure</li>
                                    <li>Led team of 5 developers</li>
                                    <li>Reduced bundle size by 60%</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold text-sm text-white">Full Stack Developer</h3>
                                <p className="text-emerald-400 text-xs font-semibold mt-1">Startup Co | 2022 - 2024</p>
                                <p className="text-gray-300 text-sm mt-2">Full-stack development and API design</p>
                            </div>
                        </div>
                    </section>

                    {/* Skills */}
                    <section>
                        <h2 className="text-sm font-black uppercase tracking-widest text-emerald-400 mb-4">Skills</h2>
                        <div className="grid grid-cols-2 gap-3">
                            {["React", "TypeScript", "Node.js", "Express", "MongoDB", "Tailwind", "Docker", "AWS"].map((skill) => (
                                <div key={skill} className="bg-gray-900 border border-emerald-500 rounded px-3 py-2">
                                    <span className="text-sm font-semibold text-emerald-400">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Education & Awards */}
                    <div className="grid grid-cols-2 gap-6">
                        <section>
                            <h2 className="text-sm font-black uppercase tracking-widest text-emerald-400 mb-3">Education</h2>
                            <h3 className="font-bold text-sm text-white">BCA</h3>
                            <p className="text-xs text-gray-400 mt-1">XYZ University | 2021 - 2024</p>
                        </section>
                        <section>
                            <h2 className="text-sm font-black uppercase tracking-widest text-emerald-400 mb-3">Awards</h2>
                            <p className="flex gap-2 text-sm text-gray-300"><Award size={16} className="text-emerald-400" /> Best Developer 2024</p>
                        </section>
                    </div>

                </div>
            </div>
        </div>
    );
}