import { ReactElement, useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

interface layoutProps {
    children: ReactElement;
}

function Layout({ children }: layoutProps) {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        // setDarkMode(localStorage.mode);
        const html = document.querySelector("html");
        if (darkMode) {
            html?.classList.add("dark");
            console.log("BB");
        } else {
            html?.classList.remove("dark");
            console.log("AA");
        }
        console.log(darkMode);
        console.log("Local storage: ", localStorage.mode);
    }, [darkMode]);

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
