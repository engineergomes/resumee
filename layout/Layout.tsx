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
            {children}
        </>
    );
}

export default Layout;
