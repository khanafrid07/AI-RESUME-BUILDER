import {
    Mail,
    Phone,
    MapPin,
    Globe,
    
} from "lucide-react";
import type{ PersonalInfo } from "../../EditorForms/types";

type HeaderProps = {
    personalInfo: PersonalInfo;
    targetRole?: string;
};

export default function Header({
    personalInfo,
    targetRole,
}: HeaderProps) {
    return (
        <header className="border-b-[4px] border-blue-900 px-10 py-8">

            <h1 className="text-4xl font-black uppercase tracking-wide text-slate-900">
                {personalInfo.firstName} {personalInfo.lastName}
            </h1>

            {targetRole && (
                <p className="mt-2 text-lg font-medium text-blue-800">
                    {targetRole}
                </p>
            )}

            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-700">

                {personalInfo.phone && (
                    <div className="flex items-center gap-2">
                        <Phone size={15} />
                        {personalInfo.phone}
                    </div>
                )}

                {personalInfo.email && (
                    <div className="flex items-center gap-2">
                        <Mail size={15} />
                        {personalInfo.email}
                    </div>
                )}

                {(personalInfo.city || personalInfo.country) && (
                    <div className="flex items-center gap-2">
                        <MapPin size={15} />
                        {personalInfo.city}
                        {personalInfo.city &&
                            personalInfo.country &&
                            ", "}
                        {personalInfo.country}
                    </div>
                )}

                {personalInfo.portfolioWeb && (
                    <div className="flex items-center gap-2">
                        <Globe size={15} />
                        {personalInfo.portfolioWeb}
                    </div>
                )}

                {/* {personalInfo.linkedin && (
                    <div className="flex items-center gap-2">
                        <Linkedin size={15} />
                        {personalInfo.linkedin}
                    </div>
                )} */}
            </div>
        </header>
    );
}