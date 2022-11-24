import type { NextPage } from "next";
import Head from "next/head";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Knowledges from "../components/Knowledges";
import WorkingSkills from "../components/WorkingSkills";

const Resumee: NextPage = () => {
    return (
        <>
            <Head>
                <title>Rafael Gomes - Resumee</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="flex flex-col gap-12 lg:bg-[#F4F4F5] lg:dark:bg-[#18181B] rounded-3xl lg:px-6 lg:py-12 ">
                <h1 className="text-center text-3xl font-semibold">Resumee</h1>
                <Experience />
                <Education />

                <WorkingSkills />
                <Knowledges />
            </div>
        </>
    );
};

export default Resumee;
