import type { NextPage } from "next";
import Head from "next/head";
import AboutMe from "../components/AboutMe";

import Header from "../components/Header";
import WhatIDo from "../components/WhatIDo";

const Home: NextPage = () => {
    return (
        <div className="flex flex-col gap-8">
            <Head>
                <title>Rafael Gomes - Resumee</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <AboutMe />
            <WhatIDo />
        </div>
    );
};

export default Home;
