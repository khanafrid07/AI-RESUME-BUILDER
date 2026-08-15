export default function BackgroundLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-300 via-blue-100 rounded-lg to-white p-4 sm:p-6 lg:p-10 font-sans">
            {children}
        </div>
    );
}