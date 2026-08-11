import { useRef } from "react"
import Alltemp from "../../Alltemp"

interface SwitchTemplateModalProps {
    currentTemplate?: string;
    onSelectTemplate: (templateId: string) => void;
}

export default function SwitchTemplateModal({ currentTemplate, onSelectTemplate }: SwitchTemplateModalProps) {
    const modalRef = useRef<HTMLDialogElement>(null)

    const handleSelect = (templateId: string) => {
        onSelectTemplate(templateId);
        modalRef.current?.close();
    };

    return (
        <div>
            <button 
                type="button"
                className="btn btn-sm sm:btn-md btn-outline btn-primary gap-2 shadow-sm font-semibold hover:scale-105 transition-transform" 
                onClick={() => modalRef.current?.showModal()}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
                Switch Template
            </button>
            
            <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box w-11/12 max-w-5xl flex flex-col max-h-[85vh] p-4 sm:p-6 rounded-2xl shadow-2xl">
                    <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-2">
                        <div>
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Switch Resume Template</h2>
                            <p className="text-xs sm:text-sm text-gray-500 mt-0.5">Click any template to instantly preview it with your current information.</p>
                        </div>
                        <button 
                            onClick={() => modalRef.current?.close()} 
                            className="btn btn-sm btn-circle btn-ghost text-gray-400 hover:text-gray-700"
                        >
                            ✕
                        </button>
                    </div>

                    <div className="overflow-y-auto pr-1 flex-1 my-2">
                        <Alltemp 
                            isEdit={true} 
                            currentTemplate={currentTemplate} 
                            onSelectTemplate={handleSelect} 
                        />
                    </div>

                    <div className="modal-action border-t border-gray-100 pt-3 mt-2 flex justify-end">
                        <form method="dialog">
                            <button className="btn btn-sm sm:btn-md btn-ghost text-gray-600">Cancel</button>
                        </form>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    )
}