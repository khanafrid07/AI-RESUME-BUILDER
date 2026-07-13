type SectionHeadingProps = {
    title: string;
};

export default function SectionHeading({
    title,
}: SectionHeadingProps) {
    return (
        <div className="mb-4 mt-7 border-b-[2px] border-slate-800 pb-1">
            <h2 className="text-[15px] font-bold uppercase tracking-[2px] text-slate-800">
                {title}
            </h2>
        </div>
    );
}