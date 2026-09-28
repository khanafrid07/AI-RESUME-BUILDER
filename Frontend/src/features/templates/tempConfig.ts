import ClassicATS from "./ClassicATS/ClassicATS";
import ProfessionalClean from "./ProfessionalClean/ProfessionalClean";
import ExecutiveTimeline from "./ExecutiveTimeline/ExecutiveTimeline";
import FederalATS from "./FederalATS/FederalATS";
import ChronologicalPro from "./ChronologicalPro/ChronologicalPro";
import HarvardStyle from "./HarvardStyle/HarvardStyle";

import type { ComponentType } from "react";
import type { ResumeData } from "../EditorForms/types";

export interface TempConfig {
    id: string;
    name: string;
    component: ComponentType<any>;
    description?: string;
    thumbnail?: string;
    tag?: string;
}

export const dummyResumeData: ResumeData = {
    personalInfo: {
        firstName: "Alexander",
        lastName: "Wright",
        phone: "+1 (555) 234-5678",
        email: "alexander.wright@example.com",
        address: "742 Evergreen Terrace",
        city: "San Francisco",
        country: "CA, USA",
        portfolioWeb: "alexwright.dev"
    },
    targetRole: "Senior Full-Stack Engineer",
    summary: "Innovative Full-Stack Software Engineer with 6+ years of experience designing and scaling cloud-native web applications. Specialist in React, TypeScript, Node.js, and high-performance system architecture. Demonstrated history of boosting application response times by 40% and leading high-performing engineering teams.",
    experience: [
        {
            companyName: "Nexus Cloud Technologies",
            jobRole: "Senior Software Engineer",
            startDate: "Jan 2022",
            endDate: "Present",
            currentlyWorking: true,
            location: "San Francisco, CA",
            description: [
                "Led a cross-functional team of 6 engineers in rebuilding the core SaaS analytics platform using React, TypeScript, and Tailwind CSS.",
                "Architected serverless backend microservices using Node.js and AWS Lambda, serving 3M+ daily active requests with 99.99% uptime.",
                "Implemented automated CI/CD pipelines with GitHub Actions, reducing deployment cycle times from 45 minutes to 8 minutes."
            ]
        },
        {
            companyName: "Vanguard Digital Systems",
            jobRole: "Full Stack Engineer",
            startDate: "Mar 2019",
            endDate: "Dec 2021",
            currentlyWorking: false,
            location: "Austin, TX",
            description: [
                "Engineered responsive user interfaces for financial dashboards managing over $50M in daily portfolio transactions.",
                "Optimized PostgreSQL database queries and indexing strategies, decreasing average response latencies by 42%."
            ]
        }
    ],
    education: [
        {
            degree: "B.S. in Computer Science",
            schoolName: "Stanford University",
            startDate: "Sep 2015",
            endDate: "Jun 2019",
            location: "Stanford, CA",
            description: ["Graduated with Highest Honors (GPA: 3.9/4.0)", "President of Software Engineering Club"]
        }
    ],
    projects: [
        {
            projectName: "DevMetrics Cloud Dashboard",
            projectLink: "https://github.com/alexwright/devmetrics",
            githubLink: "https://github.com/alexwright/devmetrics",
            startDate: "2023",
            endDate: "2024",
            description: ["Built real-time telemetry and error tracking software for web applications using WebSockets, Node.js, and React."],
            technologies: ["React", "TypeScript", "Node.js", "Docker", "Redis"]
        },
        {
            projectName: "AI Resume & Portfolio Craftsman",
            projectLink: "https://github.com/alexwright/ai-resume-craft",
            githubLink: "https://github.com/alexwright/ai-resume-craft",
            startDate: "2023",
            endDate: "2023",
            description: ["Developed intelligent resume generation platform leveraging OpenAI API to suggest ATS-optimized bullet points."],
            technologies: ["Next.js", "Express.js", "PostgreSQL", "Tailwind CSS"]
        }
    ],
    skills: [
        {
            id: "sk-1",
            category: "Frontend",
            skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux Toolkit", "HTML5/CSS3"]
        },
        {
            id: "sk-2",
            category: "Backend & DevOps",
            skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "GraphQL", "Docker", "AWS", "CI/CD"]
        }
    ],
    certifications: [
        {
            id: "cert-1",
            title: "AWS Certified Solutions Architect – Associate",
            issuer: "Amazon Web Services",
            issueDate: "2023"
        }
    ],
    languages: [
        { id: "lang-1", language: "English", proficiency: "Native" },
        { id: "lang-2", language: "Spanish", proficiency: "Professional Working" }
    ],
    hobbies: ["Open Source Contributing", "Tech Writing", "UI/UX Prototyping", "Hiking"],
    customSections: [],
    template: "classic-ats"
};

export const templates: TempConfig[] = [
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
];