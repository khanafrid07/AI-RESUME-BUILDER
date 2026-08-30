import {
    calculateCompleteness,
    calculateExperienceScore,
    calculateStructureScore,
    calculateATSReadinessScore,
    calculateSkillsScore,
} from "./atsScores";

export function calculateResumeQualityScore(resume: any) {
    const completeness = calculateCompleteness(resume);

    const experience = calculateExperienceScore(resume);

    const structure = calculateStructureScore(resume);

    const skills = calculateSkillsScore(resume);

    const atsReadiness = calculateATSReadinessScore(resume);

    const score = Math.round(
        completeness * 0.25 +
        experience * 0.25 +
        structure * 0.20 +
        skills * 0.15 +
        atsReadiness * 0.15
    );

    return {
        score,

        breakdown: {
            completeness,
            experience,
            structure,
            skills,
            atsReadiness,
        },
    };
}