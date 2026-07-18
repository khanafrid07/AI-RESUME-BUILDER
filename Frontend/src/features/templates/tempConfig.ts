import ClassicATS from "./ClassicATS/ClassicATS"
import ProfessionalClean from "./ProfessionalClean/ProfessionalClean"
import ExecutiveTimeline from "./ExecutiveTimeline/ExecutiveTimeline"
import FederalATS from "./FederalATS/FederalATS"
import ChronologicalPro from "./ChronologicalPro/ChronologicalPro"
import HarvardStyle from "./HarvardStyle/HarvardStyle"

import type { ComponentType } from "react"

type tempConfig = {
    id: string;
    name: string;
    component: ComponentType<any>;
    description?: string;
    thumbnail?: string;
    tag?: string;
}

export const templates: tempConfig[] = [
    {
        name: "Classic ATS",
        id: "classic-ats",
        component: ClassicATS,
        description: "Traditional ATS layout with blue accents and clear section headings",
        tag: "ATS Friendly",
    },
    {
        name: "Professional Clean",
        id: "professional-clean",
        component: ProfessionalClean,
        description: "Centered serif header, thin rule separators, inline skill categories",
        tag: "ATS Friendly",
    },
    {
        name: "Executive Timeline",
        id: "executive-timeline",
        component: ExecutiveTimeline,
        description: "Two-column layout with left-border timeline and sidebar for edu/skills",
        tag: "ATS Friendly",
    },
    {
        name: "Federal ATS",
        id: "federal-ats",
        component: FederalATS,
        description: "Government-style monospace font, LASTNAME FIRSTNAME, grid contact row",
        tag: "ATS Friendly",
    },
    {
        name: "Chronological Pro",
        id: "chronological-pro",
        component: ChronologicalPro,
        description: "Calibri-inspired, vertical bar section accents, clean and compact",
        tag: "ATS Friendly",
    },
    {
        name: "Harvard Style",
        id: "harvard-style",
        component: HarvardStyle,
        description: "Academic serif, centered dual-rule headings, education-first ordering",
        tag: "ATS Friendly",
    },
]