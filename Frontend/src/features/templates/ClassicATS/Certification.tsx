import { Award } from "lucide-react";
import SectionHeading from "./SectionHeading";

export type Certification = {
    id: string;
    title: string;
    issuer: string;
    issueDate?: string;
};

type Props = {
    certifications: Certification[];
};

export default function Certifications({
    certifications,
}: Props) {
    return (
        <section>

            <SectionHeading title="Certifications" />

            <div className="space-y-4">

                {certifications.map((cert) => (

                    <div
                        key={cert.id}
                        className="flex items-start gap-3"
                    >

                        <Award
                            size={18}
                            className="text-blue-700 mt-1"
                        />

                        <div>

                            <h3 className="font-semibold">
                                {cert.title}
                            </h3>

                            <p className="text-slate-600 text-sm">
                                {cert.issuer}
                            </p>

                            {cert.issueDate && (
                                <p className="text-xs text-slate-500">
                                    {cert.issueDate}
                                </p>
                            )}

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
}