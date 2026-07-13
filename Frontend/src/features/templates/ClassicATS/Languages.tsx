import { Languages as LanguagesIcon } from "lucide-react";
import SectionHeading from "./SectionHeading";

export type Language = {
    id: string;
    language: string;
    proficiency: string;
};

type Props = {
    languages: Language[];
};

export default function Languages({
    languages,
}: Props) {
    return (
        <section>

            <SectionHeading title="Languages" />

            <div className="grid grid-cols-2 gap-4">

                {languages.map((lang) => (

                    <div
                        key={lang.id}
                        className="flex items-center justify-between border border-slate-200 rounded px-4 py-2"
                    >

                        <div className="flex items-center gap-2">

                            <LanguagesIcon
                                size={16}
                                className="text-blue-700"
                            />

                            <span className="font-medium">
                                {lang.language}
                            </span>

                        </div>

                        <span className="text-sm text-slate-500">
                            {lang.proficiency}
                        </span>

                    </div>

                ))}

            </div>

        </section>
    );
}