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
                <title>Rafael Gomes - Works</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="flex flex-col gap-12 bg-[#F4F4F5] dark:bg-[#18181B] rounded-3xl px-6 py-12 ">
                <h1 className="text-center text-3xl font-semibold">Works</h1>
                https://degenlegends.io/ <br /> https://treeshake.xyz <br />{" "}
                https://www.fotumengenharia.com.br/ <br />{" "}
                https://solvillage.vercel.app/ (this candy machine and RPC node
                is deactivated. youre able to connect your wallet, but you cant
                mint)
            </div>
        </>
    );
};

export default Resumee;
