import Alltemp from "../features/Alltemp";
import ModernProffessional from "../features/templates/ModernProffessional";

export default function TemplatePage() {

    return (
        <div className="space-y-6">
            <h1 className="text-center text-4xl font-bold">Please Choose a template</h1>
            <Alltemp/>
        </div>
    )
}