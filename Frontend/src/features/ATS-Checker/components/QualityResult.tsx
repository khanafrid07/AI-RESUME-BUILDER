type QualityResult = {
    score: number;
    breakdown: {
        completeness: number;
        experience: number;
        structure: number;
        skills: number;
        atsReadiness: number;
    };
};

export default function QualityScore({
    result,
}: {
    result: QualityResult;
}) {
    const items = [
        ["Completeness", result.breakdown.completeness],
        ["Experience", result.breakdown.experience],
        ["Structure", result.breakdown.structure],
        ["Skills", result.breakdown.skills],
        ["ATS Readiness", result.breakdown.atsReadiness],
    ];

    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md">

            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-xl font-bold text-slate-800">
                        Resume Quality Score
                    </h2>

                    <p className="text-sm text-slate-500">
                        Here's how your resume performs.
                    </p>
                </div>

                <div className="flex h-20 w-20 flex-col items-center justify-center rounded-full bg-blue-50">
                    <span className="text-2xl font-bold text-blue-600">
                        {result.score}
                    </span>

                    <span className="text-[10px] text-slate-500">
                        / 100
                    </span>
                </div>
            </div>

            <div className="mt-6 space-y-4">
                {items.map(([name, score]) => (
                    <div key={name}>
                        <div className="mb-1 flex justify-between text-sm">
                            <span className="font-medium text-slate-700">
                                {name}
                            </span>

                            <span className="font-semibold text-slate-600">
                                {score}%
                            </span>
                        </div>

                        <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                            <div
                                className="h-full rounded-full bg-blue-500"
                                style={{ width: `${score}%` }}
                            />
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}