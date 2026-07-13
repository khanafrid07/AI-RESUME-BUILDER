import SectionHeading from "./SectionHeading";

type SummaryProps = {
    summary: string;
};

export default function Summary({ summary }: SummaryProps) {
    return (
        <section>
            <SectionHeading title="Professional Summary" />

            <p className="text-[14px] leading-7 text-slate-700 text-justify">
                {summary}
            </p>
        </section>
    );
}