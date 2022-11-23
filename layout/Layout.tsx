import { ReactElement } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

interface layoutProps {
    children: ReactElement;
}

function Layout({ children }: layoutProps) {
    return (
        <>
            <Header />
            <Sidebar />
            <div className="min-h-screen col-span-12  mt-12 lg:mt-24 overflow-y-scroll lg:col-start-11 2xl:col-start-10 scrollbar-hide px-5 lg:px-0">
                {children}
            </div>
        </>
    );
}

export default Layout;
