import { faBrain } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { NextPage } from "next";
import Head from "next/head";
import AboutMe from "./Sidebar";

import Header from "../components/Header";
import WhatIDo from "../components/WhatIDo";

function Knowledges() {
    return (
        <section className="flex flex-col px-4 gap-y-4">
            <div className="flex items-center space-x-2">
                <FontAwesomeIcon className="h-8 w-8" icon={faBrain} />
                <h1 className="text-center text-3xl font-semibold">
                    Knowloges
                </h1>
            </div>
            <div className="flex flex-wrap gap-3">
                <div className="bg-yellow-200 px-4 py-2 rounded-lg">
                    <p className="text-center">React</p>
                </div>
                <div className="bg-yellow-200 px-4 py-2 rounded-lg">
                    <p className="text-center">Next</p>
                </div>
                <div className="bg-yellow-200 px-4 py-2 rounded-lg">
                    <p className="text-center">TypeScript</p>
                </div>
                <div className="bg-yellow-200 px-4 py-2 rounded-lg">
                    <p className="text-center">JavaScript</p>
                </div>
                <div className="bg-yellow-200 px-4 py-2 rounded-lg">
                    <p className="text-center">Tailwind</p>
                </div>
                <div className="bg-yellow-200 px-4 py-2 rounded-lg">
                    <p className="text-center">Node</p>
                </div>
                <div className="bg-yellow-200 px-4 py-2 rounded-lg">
                    <p className="text-center">MongoDB</p>
                </div>
                <div className="bg-yellow-200 px-4 py-2 rounded-lg">
                    <p className="text-center">Prisma</p>
                </div>
                <div className="bg-yellow-200 px-4 py-2 rounded-lg">
                    <p className="text-center">Python</p>
                </div>
                <div className="bg-yellow-200 px-4 py-2 rounded-lg">
                    <p className="text-center">C</p>
                </div>
                <div className="bg-yellow-200 px-4 py-2 rounded-lg">
                    <p className="text-center">C++</p>
                </div>
            </div>
        </section>
    );
}

export default Knowledges;
