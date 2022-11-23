import { ReactElement, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

interface layoutProps {
    children: ReactElement;
}

function Layout({ children }: layoutProps) {
    const [darkMode, setDarkMode] = useState(true);
    const html = document.querySelector("html");

    if (darkMode) {
        html?.classList.add("dark");
    } else {
        html?.classList.remove("dark");
    }

    return (
        <>
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            <Sidebar />
            <div className="min-h-screen col-span-12 mt-12 overflow-y-scroll lg:col-start-11  col-start-5 px-5 lg:px-0 lg:mt-24 scrollbar-hide">
                {children}
            </div>
        </>
    );
}

export default Layout;
