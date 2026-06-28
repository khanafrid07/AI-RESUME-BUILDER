import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import { Outlet } from "react-router-dom";

export default function UserLayout() {

    return (
        <div>
            <Navbar />
            <main className="min-h-screen sm:px-8 py-4">

                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>

        </div>
    )
}