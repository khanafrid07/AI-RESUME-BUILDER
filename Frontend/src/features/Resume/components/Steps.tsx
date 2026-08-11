export default function Steps({ steps }: { steps: number }) {
    console.log(steps)

    return (
        <ul className="steps w-full font-semibold text-[0.6rem] sm:text-sm md:text-sm lg:text-base tracking-widest">
            <li className={`step ${steps >= 0 ? "[--step-bg:#6666ff]" : ""} `}>Contacts</li>
            <li className={`step ${steps >= 1 ? "[--step-bg:#6666ff]" : ""} `}>Education</li>
            <li className={`step ${steps >= 2 ? "[--step-bg:#6666ff]" : ""} `}>Skills </li>
            <li className={`step ${steps >= 3 ? "[--step-bg:#6666ff]" : ""} `}>Experience</li>
            <li className={`step ${steps >= 4 ? "[--step-bg:#6666ff]" : ""} `}>Summary </li>
            <li className={`step ${steps >= 5 ? "[--step-bg:#6666ff]" : ""} `}>Projects </li>
            <li className={`step ${steps === 6 ? "[--step-bg:#6666ff]" : ""} `}>Finalize</li>
        </ul>
    )
}