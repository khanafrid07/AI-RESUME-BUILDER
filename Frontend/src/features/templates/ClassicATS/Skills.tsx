import SectionHeading from "./SectionHeading";
import type{Skill} from "../../EditorForms/types"
type Props = {
    skills: Skill[];
};

export default function Skills({ skills }: Props) {
    const groupedSkills = skills.reduce((acc, skill) => {
        const category = skill.category || "General";

        if (!acc[category]) {
            acc[category] = [];
        }

        acc[category].push(skill);

        return acc;
    }, {} as Record<string, Skill[]>);

    return (
        <section>
            <SectionHeading title="Skills" />

            <div className="space-y-5">

                {Object.entries(groupedSkills).map(([category, list]) => (

                    <div key={category}>

                        <h3 className="font-semibold text-slate-700 mb-2">
                            {category}
                        </h3>

                        <div className="flex flex-wrap gap-2">

                            {list.map((skill, idx) => (
                                <div className="space-x-2">
                                    {skill.skills.map((n, idx)=>(
                                    <span
                                        key={idx}
                                        className="px-3 py-1 rounded border border-slate-300 bg-slate-100 text-sm"
                                    >
                                        {n}
                                    </span>
    
                                    ))}
                                    </div>


                            ))}

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
}