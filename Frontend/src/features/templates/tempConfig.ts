import BoldModern from "./BoldModern"
import ClassicFormatted from "./ClassicFormatted"
import MinimalClean from "./MinimalClean"
import Minimalist from "./Minimalist"

import ModernProfessional from "./ModernProffessional"
import SimpleElegant from "./SimpleElegant"
//imgs//

import BoldModernImg from "./thumbnailImg/BoldModern.png"
import ClassicFormattedImg from "./thumbnailImg/ClassicFormatted.png"
import MinimalCleanImg from "./thumbnailImg/MinimalClean.png"
import MinimalistImg from "./thumbnailImg/Minimalist.png"
import ModernProfessionalImg from "./thumbnailImg/ModerProffessional.png"
import SimpleElegantImg from "./thumbnailImg/simpleElegent.png"

type tempConfig = {
    id:string;
    name:string;
    thumbnail:string;
    component:any
}

export const templates:tempConfig[] = [
    {
        name:"Bold Modern",
        id: "bold-modern",
        thumbnail: BoldModernImg,
        component : BoldModern
    },
    {
        name:"Classic Formatted",
        id: "classic-formatted",
        thumbnail: ClassicFormattedImg,
        component : ClassicFormatted
    },
 
    {
        name:"Minimal Clean",
        id: "minimal-clean",
        thumbnail: MinimalCleanImg,
        component : MinimalClean
    },
    {
        name:"Minimalist",
        id: "minimalist",
        thumbnail: MinimalistImg,
        component : Minimalist
    },

    {
        name:"Modern Professional",
        id: "modern-professional",
        thumbnail: ModernProfessionalImg,
        component : ModernProfessional
    },
    {
        name:"Simple Elegant",
        id: "simple-elegant",
        thumbnail: SimpleElegantImg,
        component : SimpleElegant
    }
]