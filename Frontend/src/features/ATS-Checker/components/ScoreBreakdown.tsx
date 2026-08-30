export default function ScoreBreakdown({ atsResult }: { atsResult: Record<string, any> }) {

    console.log(atsResult, "scorebdwm")
    return (
        <div className="">
            <h1>Score Breakdown</h1>
            {atsResult &&

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mt-4">
                    {Object.entries(atsResult?.breakdown).map(([key, value]: [string, number]) => (
                        <div key={key}>
                            <h1 className="font-semibold tracking-wide">{key.charAt(0).toUpperCase() + key.slice(1)}</h1>
                            <span>{value}</span>
                            <span>/100</span>
                            <progress className="progress progress-primary " value={value} max="100"></progress>
                        </div>
                    ))}

                </div>

            }
        </div>
    )
}