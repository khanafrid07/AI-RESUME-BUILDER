
export default function AtsScore({ atsResult }: { atsResult: Record<string, any> }) {
    console.log(atsResult, "res")

    return (
        <div>
            <h1 className="font-bold text-center p-12">
                ATS SCORE OVERVIEW

            </h1>
            <div className="p-12  flex  flex-col md:flex-row justify-between items-center gap-8 tracking-wide shadow-lg rounded-lg">
                <div>
                    <h2 className="font-semibold ">ATS COMPATIBILTY SCORE</h2>
                    <div className=" flex items-center  gap-2">
                        <span className="font-bold text-4xl">{atsResult?.score || 0}</span>
                        <p className="font-bold text-xl">/100</p>
                    </div>
                    <p>Your resume has good ATS compatibility</p>
                </div>
                {/* For TSX uncomment the commented types below */}
                <div
                    className="radial-progress bg-primary text-primary-content border-primary border-4"
                    style={{ "--value": `${atsResult?.score || 0}`, "--size": "8rem" } as React.CSSProperties} aria-valuenow={70} role="progressbar">
                    {atsResult?.score || 0}
                </div>
            </div>
        </div>
    )
}