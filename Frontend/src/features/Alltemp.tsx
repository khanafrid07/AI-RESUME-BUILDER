import { templates } from "./templates/tempConfig"
import { Navigate, useNavigate } from "react-router-dom"
export default function Alltemp(){
    const navigate = useNavigate()

    return(
        <div className="grid grid-cols-4 gap-5">
            
            {templates.map((temp)=>(
                <div className="relative group hover:scale-105 transition transform duration-300">
                    <div className="absolute inset-0  group-hover:backdrop-blur-xs "/>
                    <img className="rounded-sm object-cover" src={temp.thumbnail}/>
                    <button onClick={()=>navigate("/create")} className="absolute transition transform duration-700 opacity-0 group-hover:opacity-700 btn bg-gradient-to-r from-blue-400 to-gray-700 rounded-xl border-none  top-60 left-30">Use Template</button>
                    </div>
            ))}
            
      
        </div>
    )
}