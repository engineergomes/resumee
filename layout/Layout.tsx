import { ReactElement, useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

interface layoutProps {
    children: ReactElement;
}

function Layout({ children }: layoutProps) {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        const html = document.querySelector("html");
        if (darkMode) {
            html?.classList.add("dark");
        } else {
            html?.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <>
            <div className="grid grid-cols-12 lg:grid-cols-[repeat(24,minmax(0,1fr))] mx-auto relative pb-12">
                <Header darkMode={darkMode} setDarkMode={setDarkMode} />
                <Sidebar />
                <div className="min-h-screen col-span-12 mt-12 overflow-y-scroll lg:col-start-11  col-start-5 px-5 lg:px-0 lg:mt-36 scrollbar-hide">
                    {children}
                </div>
            </div>
        </>
    );
}

export default Layout;
