import type{ReactNode} from "react";
import {
    Mail,
    Phone,
    MapPin,
    Globe,
    Briefcase,
    GraduationCap,
    Languages,
    User,
    FolderKanban,
    Award,
    Code2,
} from "lucide-react";

export default function ModernProfessional() {
    return (
        <div className=" min-h-screen py-10">
            <div className="w-[794px] min-h-[1123px] mx-auto bg-white shadow-xl">

                {/* Header */}
                <div className="bg-slate-900 text-white px-10 py-8">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-4xl font-bold">Afrid Khan</h1>
                            <p className="uppercase tracking-[5px] text-sm mt-2 text-gray-300">
                                Software Developer
                            </p>
                        </div>

                        <div className="w-24 h-24 rounded-full bg-gray-300" />
                    </div>
                </div>

                {/* Contact */}
                <div className="px-10 py-4 border-b text-sm">
                    <div className="grid grid-cols-2 gap-y-2">
                        <p className="flex items-center gap-2"><Phone size={14} /> +91 9814790265</p>
                        <p className="flex items-center gap-2"><Mail size={14} /> example@gmail.com</p>
                        <p className="flex items-center gap-2"><MapPin size={14} /> New York, USA</p>
                        <p className="flex items-center gap-2"><Globe size={14} /> portfolio.com</p>
                    </div>
                </div>

                <div className="grid grid-cols-3">

                    {/* Sidebar */}
                    <aside className="col-span-1 bg-slate-50 px-8 py-8 space-y-8">

                        <SectionTitle icon={<User size={16} />} title="Profile" />
                        <p className="text-sm text-gray-700 leading-6">
                            Full-stack developer focused on building scalable
                            applications with modern web technologies and AI integrations.
                        </p>

                        <SectionTitle icon={<Code2 size={16} />} title="Skills" />
                        <ul className="text-sm space-y-2">
                            <li>React.js</li>
                            <li>TypeScript</li>
                            <li>Node.js</li>
                            <li>MongoDB</li>
                            <li>Tailwind CSS</li>
                            <li>Express.js</li>
                        </ul>

                        <SectionTitle
                            icon={<GraduationCap size={16} />}
                            title="Education"
                        />
                        <div className="text-sm">
                            <p className="font-semibold">BCA</p>
                            <p>XYZ University</p>
                            <p>2021 - 2024</p>
                        </div>

                        <SectionTitle
                            icon={<Languages size={16} />}
                            title="Languages"
                        />
                        <ul className="text-sm space-y-1">
                            <li>English</li>
                            <li>Hindi</li>
                            <li>Urdu</li>
                        </ul>
                    </aside>

                    {/* Main */}
                    <main className="col-span-2 px-8 py-8 space-y-8">

                        <section>
                            <SectionTitle
                                icon={<Briefcase size={16} />}
                                title="Experience"
                            />

                            <div className="mt-4">
                                <h3 className="font-semibold">Frontend Developer</h3>
                                <p className="text-sm text-gray-500">
                                    ABC Company | 2024 - Present
                                </p>

                                <ul className="list-disc ml-5 mt-3 text-sm space-y-2">
                                    <li>Built responsive React applications.</li>
                                    <li>Integrated APIs and authentication.</li>
                                    <li>Improved application performance.</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <SectionTitle
                                icon={<FolderKanban size={16} />}
                                title="Projects"
                            />

                            <div className="mt-4 space-y-4">
                                <div>
                                    <h3 className="font-semibold">AI Resume Builder</h3>
                                    <p className="text-sm text-gray-700">
                                        AI-powered resume builder with template selection,
                                        authentication, and PDF export.
                                        AI-powered resume builder with template selection,
                                        authentication, and PDF export.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-semibold">E-commerce Platform</h3>
                                    <p className="text-sm text-gray-700">
                                        Full-stack e-commerce web app with payments and admin dashboard.
                                        AI-powered resume builder with template selection,
                                        authentication, and PDF export.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <SectionTitle
                                icon={<Award size={16} />}
                                title="Certifications"
                            />

                            <ul className="mt-4 text-sm space-y-2">
                                <li>Meta Frontend Development Certificate</li>
                                <li>JavaScript Algorithms Certification</li>
                            </ul>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    );
}
type SectionTitleProps = { icon: ReactNode; title: string };

function SectionTitle({ icon, title }: SectionTitleProps) {
    return (
        <div className="flex items-center gap-2 border-b pb-2">
            {icon}
            <h2 className="font-bold uppercase tracking-wide text-sm">
                {title}
            </h2>
        </div>
    );
}