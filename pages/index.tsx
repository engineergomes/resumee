import type { NextPage } from "next";
import Head from "next/head";
import WhatIDo from "../components/WhatIDo";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Rafael Gomes - About</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="lg:bg-[#F4F4F5] dark:lg:bg-[#18181B] rounded-3xl px-6 py-12 ">
                <WhatIDo />
            </div>
        </>
    );
};

export default Home;
