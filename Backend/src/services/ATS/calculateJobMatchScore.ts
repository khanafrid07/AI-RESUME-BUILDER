type RequirementMatch = {
    requirement: string;
    category: string;
    importance: "critical" | "high" | "medium" | "low";
    status: "matched" | "partial" | "missing";
    evidence: string | null;
};

export function calculateJobMatchScore(
    matches: RequirementMatch[]
) {
    const weights = {
        critical: 4,
        high: 3,
        medium: 2,
        low: 1,
    };

    let totalPoints = 0;
    let earnedPoints = 0;

    for (const match of matches) {
        const weight = weights[match.importance];

        totalPoints += weight;

        if (match.status === "matched") {
            earnedPoints += weight;
        }

        if (match.status === "partial") {
            earnedPoints += weight * 0.5;
        }
    }

    if (totalPoints === 0) {
        return 0;
    }

    return Math.round(
        (earnedPoints / totalPoints) * 100
    );
}