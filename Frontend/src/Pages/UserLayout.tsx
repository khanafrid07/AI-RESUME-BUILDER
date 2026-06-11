import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import { Outlet } from "react-router-dom";

export default function UserLayout() {

    return (
        <div>
            <Navbar />
            <main className="min-h-screen px-24 py-12">

                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>

        </div>
    )
}