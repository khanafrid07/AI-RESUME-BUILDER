import { GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import type { Education } from "../../EditorForms/types";
type Props = {
    education: Education[];
};

export default function Education({ education }: Props) {
    const filterEducation = education.filter((edu) => Object.values(edu).some((val) => String(val) !== ""))
    return (
        <section>
            {filterEducation.length > 0 &&

                <SectionHeading title="Education" />}

            <div className="space-y-5">

                {filterEducation.map((edu, id) => (

                    <div key={id}>

                        <div className="flex items-center gap-2">

                            <GraduationCap
                                size={17}
                                className="text-blue-700"
                            />

                            <h3 className="font-bold">
                                {edu.degree}
                            </h3>

                        </div>

                        <p className="text-slate-700 mt-1">
                            {edu.schoolName}
                        </p>

                        <p className="text-sm text-slate-500">
                            {edu.startDate} - {edu.endDate}
                        </p>

                    </div>

                ))}

            </div>

        </section>
    );
}