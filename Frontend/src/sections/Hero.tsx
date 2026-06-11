import resume from "../assets/cover.png"
export default function Hero() {

    return (
        <div className="grid grid-cols-[2fr_3fr]  gap-6 pt-12">
            <div className="space-y-4 flex flex-col ">
                <h1 className="font-bold text-4xl ">Craft the perfect <h1 className="text-green-500">Resume in seconds with <span className="bg-gradient-to-r from-blue-400 to-gray-600 bg-clip-text text-transparent">AI</span></h1></h1>
                <p className="font-semibold">You can pick one of our handcrafted resume templates above. You can start building your resume</p>
                <button className="font-bold mt-16 py-10 rounded-xl w-1/2  text-2xl btn bg-gradient-to-r from-blue-400 to-gray-600 text-white">Get Started For Free</button>
            </div>
            <div className="shadow-xl">
                <img src={resume} alt="resume" />
            </div>
        </div>
    )
}