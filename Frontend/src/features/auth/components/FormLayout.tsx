export default function FormLayout({ children }: { children: React.ReactNode }) {

    return (
        <div className="flex justify-center ite">
            <div className="w-full p-6 rounded-xl shadow-lg max-w-md border border-gray-200 ">
                {children}
            </div>
        </div>
    )
}