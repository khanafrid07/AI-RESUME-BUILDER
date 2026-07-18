export default function Navbar() {

    return (
        <nav className="w-full">
            <div className="navbar bg-base-100 shadow-md rounded-3xl max-w-6xl rounded mx-auto">
                <div className="navbar-start px-4">

                    <a className=" text-xl font-bold bg-gradient-to-r from-blue-400 to-gray-600 bg-clip-text text-transparent">Resume</a>
                </div>
                <div className="flex items-center gap-8">
                    <a href="#">Home</a>
                    <div className="dropdown dropdown-hover">
                        <div tabIndex={0} role="button" className="btn m-1">Template</div>
                        <ul className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div>


                </div>
                <div className="navbar-end">
                    <a className="btn">Toggler</a>
                </div>
                <div className="flex gap-4"><a href="/auth/login">Login</a>
                    <a href="/auth/signup">Signup</a>
                </div>
            </div>
        </nav>
    )
}