import { Briefcase } from "lucide-react";
import SectionHeading from "./SectionHeading";
import type { Experience } from "../../EditorForms/types";
type Props = {
    experience: Experience[];
};

export default function Experience({ experience }: Props) {
    return (
        <section>
            <SectionHeading title="Professional Experience" />

            <div className="space-y-7">

                {experience.map((exp, id:number) => (
                    <div key={id}>

                        <div className="flex justify-between items-start">

                            <div>

                                <h3 className="font-bold text-[16px] text-slate-900">
                                    {exp.jobRole}
                                </h3>

                                <div className="flex items-center gap-2 mt-1 text-blue-800 font-semibold">

                                    <Briefcase size={15} />

                                    <span>
                                        {exp.companyName}
                                    </span>

                                   {exp.location}
                                </div>

                            </div>

                            <div className="text-sm text-slate-500 font-medium">

                                {exp.startDate}
                                {" - "}
                                {exp.currentlyWorking
                                    ? "Present"
                                    : exp.endDate}

                            </div>

                        </div>

                        <ul className="mt-4 list-disc pl-6 space-y-2">

                            {exp.description.map((item, index) => (
                                <li
                                    key={index}
                                    className="text-[14px] leading-6 text-slate-700"
                                >
                                    {item}
                                </li>
                            ))}

                        </ul>

                    </div>
                ))}

            </div>
        </section>
    );
}