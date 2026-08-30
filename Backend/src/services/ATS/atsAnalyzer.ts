import type { ATSResult } from "./atsTypes";

export function atsAnalyze(resume: any): ATSResult {

    const checks = {
        contactInformation: false,
        summary: false,
        experience: false,
        education: false,
        skills: false,
        projects: false,
    };

    if (
        resume.personalInfo?.email &&
        resume.personalInfo?.phone
    ) {
        checks.contactInformation = true;
    }

    if (resume.summary?.trim()) {
        checks.summary = true;
    }

    if (resume.experience?.length > 0) {
        checks.experience = true;
    }

    if (resume.education?.length > 0) {
        checks.education = true;
    }

    if (resume.skills?.length > 0) {
        checks.skills = true;
    }

    if (resume.projects?.length > 0) {
        checks.projects = true;
    }

    return {
        score: 0,

        breakdown: {
            keywords: 0,
            skills: 0,
            experience: 0,
            structure: 0,
            completeness: 0,
            achievements: 0,
            formatting: 0,
        },

        keywords: {
            matched: [],
            missing: [],
        },

        checks,

        suggestions: [],
    };
}