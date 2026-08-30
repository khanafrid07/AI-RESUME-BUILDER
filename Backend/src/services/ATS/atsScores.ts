export function calculateCompleteness(resume: any): number {
    let score = 0;

    const checks = [
        Boolean(resume.personalInfo?.email?.trim()),
        Boolean(resume.personalInfo?.phone?.trim()),
        Boolean(resume.summary?.trim()),
        Boolean(resume.experience?.length),
        Boolean(resume.education?.length),
        Boolean(resume.skills?.length),
        Boolean(resume.projects?.length),
        Boolean(resume.certifications?.length),
    ];

    score = checks.filter(Boolean).length;

    return Math.round((score / checks.length) * 100);
}


export function calculateExperienceScore(resume: any): number {
    const experiences = resume.experience;

    if (!experiences?.length) {
        return 0;
    }

    const scores = experiences.map((experience: any) => {
        let score = 0;

        // Job/company information
        if (experience.companyName?.trim()) {
            score += 20;
        }

        if (experience.jobRole?.trim()) {
            score += 20;
        }

        // Dates
        if (experience.startDate) {
            score += 10;
        }

        if (experience.endDate || experience.currentlyWorking) {
            score += 10;
        }

        // Location
        if (experience.location?.trim()) {
            score += 10;
        }

        // Description quality
        const descriptionLength =
            experience.description?.length || 0;

        if (descriptionLength >= 50) {
            score += 30;
        } else if (descriptionLength >= 20) {
            score += 20;
        } else if (descriptionLength > 0) {
            score += 10;
        }

        return score;
    });

    const total = scores.reduce(
        (sum: number, score: number) => sum + score,
        0
    );

    return Math.round(total / scores.length);
}


export function calculateStructureScore(resume: any): number {
    const sections = [
        Boolean(resume.summary?.trim()),
        Boolean(resume.experience?.length),
        Boolean(resume.education?.length),
        Boolean(resume.skills?.length),
        Boolean(resume.projects?.length),
    ];

    const completed = sections.filter(Boolean).length;

    return Math.round((completed / sections.length) * 100);
}


export function calculateSkillsScore(resume: any): number {
    const skills = resume.skills;

    if (!skills?.length) {
        return 0;
    }

    const count = skills.length;

    if (count >= 8) return 100;
    if (count >= 6) return 90;
    if (count >= 4) return 80;
    if (count >= 2) return 65;

    return 40;
}


export function calculateATSReadinessScore(resume: any): number {
    let score = 100;

    if (!resume.personalInfo?.email?.trim()) {
        score -= 10;
    }

    if (!resume.personalInfo?.phone?.trim()) {
        score -= 10;
    }

    if (!resume.summary?.trim()) {
        score -= 10;
    }

    if (!resume.experience?.length) {
        score -= 15;
    }

    if (!resume.education?.length) {
        score -= 10;
    }

    if (!resume.skills?.length) {
        score -= 15;
    }

    return Math.max(score, 0);
}


/**
 * Overall Resume Quality Score
 */
export function calculateResumeQualityScore(resume: any) {
    const completeness = calculateCompleteness(resume);
    const experience = calculateExperienceScore(resume);
    const structure = calculateStructureScore(resume);
    const skills = calculateSkillsScore(resume);
    const atsReadiness = calculateATSReadinessScore(resume);

    const overall = Math.round(
        completeness * 0.25 +
        experience * 0.25 +
        structure * 0.20 +
        skills * 0.15 +
        atsReadiness * 0.15
    );

    return {
        overall,
        breakdown: {
            completeness,
            experience,
            structure,
            skills,
            atsReadiness,
        },
    };
}