import { faCode, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { NextPage } from "next";
import Head from "next/head";
import AboutMe from "../components/AboutMe";

import Header from "../components/Header";
import WhatIDo from "../components/WhatIDo";

function Education() {
    return (
        <section className="flex flex-col px-4 gap-4">
            <div className="flex items-center space-x-2">
                <FontAwesomeIcon className="h-8 w-8" icon={faGraduationCap} />
                <h1 className="text-center text-3xl font-semibold">
                    Education
                </h1>
            </div>

            <div className="grid grid-cols-1 gap-3 grid-rows-4">
                <div className="grid grid-cols-[1fr,7fr] bg-green-200 px-4 py-5 gap-x-4 rounded-xl">
                    <FontAwesomeIcon icon={faCode} />
                    <h2>Frontend</h2>
                    <p className="col-start-2">React</p>
                    <p className="col-start-2">Next.js</p>
                    <p className="col-start-2">React</p>
                </div>
                <div className="grid grid-cols-[1fr,7fr] bg-green-200 px-4 py-5 gap-4 rounded-xl">
                    <FontAwesomeIcon icon={faCode} />
                    <h2>Blockchain</h2>
                    <p className="col-start-2">Solana</p>
                </div>
                <div className="grid grid-cols-[1fr,7fr] bg-green-200 px-4 py-5 gap-4 rounded-xl">
                    <FontAwesomeIcon icon={faCode} />
                    <h2>Backend</h2>
                    <p className="col-start-2">Node.js</p>
                </div>
                <div className="grid grid-cols-[1fr,7fr] bg-green-200 px-4 py-5 gap-4 rounded-xl">
                    <FontAwesomeIcon icon={faCode} />
                    <h2>Automation</h2>
                    <p className="col-start-2">Python</p>
                </div>
            </div>
        </section>
    );
}

export default Education;
