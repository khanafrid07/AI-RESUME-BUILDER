import { useGetCurrentUserQuery } from "../features/auth/authApi"
export default function Navbar() {
    const { data: user, isLoading } = useGetCurrentUserQuery()
    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <nav className="w-full">
            <div className="navbar bg-base-100 shadow-lg shadow-blue-500/20 rounded-3xl max-w-7xl rounded mx-auto">
                <div className="navbar-start px-4">

                    <a href="/" className=" text-xl font-bold bg-gradient-to-r from-blue-400 cursor-pointer to-gray-600 bg-clip-text text-transparent">Resume</a>
                </div>
                <div className="flex items-center gap-8">
                    <a className="hover:text-blue-500 transition-colors duration-200 font-semibold" href="/">Home</a>
                    <a className="hover:text-blue-500 transition-colors duration-200 font-semibold" href="/dashboard">Dashboard</a>
                    <a className="hover:text-blue-500 transition-colors duration-200 font-semibold" href="/resume/templates">Templates</a>



                </div>
                <div className="navbar-end">
                    {user ? (
                        <div className="flex items-center gap-4">
                            <div className="avatar">
                                <div className="w-15 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-500 p-1">
                                    <div className="w-full h-full bg-gray-100 rounded-full flex items-center justify-center">
                                        <p className="text-blue-600 text-xl font-bold">{user.user.username.charAt(0).toUpperCase()}</p>
                                    </div>
                                </div>
                            </div>


                        </div>
                    ) : (
                        <div className="flex gap-4">
                            <a href="/account/login" className="btn btn-ghost">Login</a>
                            <a href="/account/signup" className="btn btn-primary">Signup</a>
                        </div>
                    )}
                </div>


            </div>
        </nav>
    )
}