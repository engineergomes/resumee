import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import WhatIDo from "../components/WhatIDo";
import Layout from "../layout/Layout";

const Home: NextPage = () => {
    return (
        <div className="grid grid-cols-12 lg:grid-cols-[repeat(24,minmax(0,1fr))]  mx-auto relative">
            <Head>
                <title>Rafael Gomes - Resumee</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout>
                <div className="lg:bg-[#F4F4F5] dark:lg:bg-[#18181B] rounded-3xl px-6 py-12 ">
                    <WhatIDo />
                </div>
            </Layout>
        </div>
    );
};

export default Home;
