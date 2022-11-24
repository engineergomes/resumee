import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { NextPage } from "next";
import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Education from "../components/Education";
import Experience from "../components/Experience";

import Header from "../components/Header";
import Knowledges from "../components/Knowledges";
import WhatIDo from "../components/WhatIDo";
import WorkingSkills from "../components/WorkingSkills";
import Layout from "../layout/Layout";

const Resumee: NextPage = () => {
    return (
        <div className="grid grid-cols-12 lg:grid-cols-[repeat(24,minmax(0,1fr))] mx-auto relative pb-12">
            <Head>
                <title>Rafael Gomes - Resumee</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout>
                <div className="flex flex-col gap-12 bg-[#F4F4F5] dark:bg-[#18181B] rounded-3xl px-6 py-12 ">
                    <h1 className="text-center text-3xl font-semibold">
                        Resumee
                    </h1>
                    <Experience />
                    <Education />

                    <WorkingSkills />
                    <Knowledges />
                </div>
            </Layout>
        </div>
    );
};

export default Resumee;
