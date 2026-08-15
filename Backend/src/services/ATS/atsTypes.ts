export interface ATSResult {
    score: number;

    breakdown: {
        keywords: number;
        skills: number;
        experience: number;
        structure: number;
        completeness: number;
        achievements: number;
        formatting: number;
    };

    keywords: {
        matched: string[];
        missing: string[];
    };

    checks: {
        contactInformation: boolean;
        summary: boolean;
        experience: boolean;
        education: boolean;
        skills: boolean;
        projects: boolean;
    };

    suggestions: string[];
}