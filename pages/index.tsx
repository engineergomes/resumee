import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import AboutMe from "../components/AboutMe";
import Header from "../components/Header";
import WhatIDo from "../components/WhatIDo";

const Home: NextPage = () => {
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
                    <WhatIDo />
                </div>
            </div>
        </div>
    );
};

export default Home;
