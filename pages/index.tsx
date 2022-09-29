import type { NextPage } from "next";
import Head from "next/head";
import AboutMe from "../components/AboutMe";

import Header from "../components/Header";
import WhatIDo from "../components/WhatIDo";

const Home: NextPage = () => {
    return (
        <div className="grid grid-cols-12 bg-blue-200 ">
            <Head>
                <title>Rafael Gomes - Resumee</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <div className="min-h-screen mt-24 md:h-screen  md:fixed col-span-12 sm:col-span-5 ">
                <AboutMe />
            </div>
            <div className=" min-h-screen col-span-12 sm:col-span-7 sm:mt-24 overflow-y-scroll md:col-start-5 scrollbar-hide">
                <div className=" bg-white rounded-3xl px-6 py-12 ">
                    <WhatIDo />
                </div>
            </div>
        </div>
    );
};

export default Home;
