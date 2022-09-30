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
        <div className="grid grid-cols-12 bg-blue-200 mx-auto relative">
            <Head>
                <title>Rafael Gomes - Resumee</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <div className="min-h-screen col-span-12  md:h-screen  md:fixed  md:top-24 md:left-[8.33vw] md:w-[16.66vw]">
                <AboutMe />
            </div>
            <div className=" min-h-screen col-span-12 sm:col-span-7 sm:mt-24 overflow-y-scroll md:col-start-5 md:col-end-12 scrollbar-hide">
                <div className=" bg-white rounded-3xl px-6 py-12 ">
                    <h1 className="text-center text-3xl font-semibold">
                        Resumee
                    </h1>
                    <Education />
                    <Experience />
                    <WorkingSkills />
                    <Knowledges />
                </div>
            </div>
        </div>
    );
};

export default Resumee;
