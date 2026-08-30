import { Plus, Upload } from "lucide-react";

export default function UploadCard() {


    return (
        <div className="bg-white rounded-lg shadow-md p-10 space-y-5">
            <div className="flex items-center gap-4">
                <Upload color="blue" size={32} />
                <div>
                    <h1 className="font-bold text-xl tracking-wide">Upload Resumes</h1>
                    <p>Check and existing PDF or DOCX resume</p>
                </div>
            </div>
            <div className="border-4 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-24 flex flex-col items-center justify-center">
                <Plus className="bg-blue-500 text-white p-1 rounded-full" size={48} />
                <h2 className="mt-4 text-lg font-bold text-gray-900">Drop your Resume here </h2>
                <p className="mt-1 text-gray-600 ">PDF or DOCX</p>
                <input accept=".pdf,.docx" type="file" className="hidden" />
            </div>
        </div>
    )
}