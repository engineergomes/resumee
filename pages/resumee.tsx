import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { NextPage } from "next";
import Head from "next/head";
import AboutMe from "../components/AboutMe";
import Education from "../components/Education";
import Experience from "../components/Experience";

import Header from "../components/Header";
import Knowledges from "../components/Knowledges";
import WhatIDo from "../components/WhatIDo";
import WorkingSkills from "../components/WorkingSkills";

const Resumee: NextPage = () => {
    return (
        <div className="flex flex-col gap-8">
            <Head>
                <title>Rafael Gomes - Resumee</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1 className="text-center text-3xl font-semibold mt-20">
                Resumee
            </h1>
            <Header />
            <Education />
            <Experience />
            <WorkingSkills />
            <Knowledges />
        </div>
    );
};

export default Resumee;
