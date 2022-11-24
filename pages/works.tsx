import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
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

            <div className="flex flex-col gap-12 bg-[#F4F4F5] dark:bg-[#18181B] rounded-3xl px-6 py-12">
                <h1 className="text-center text-3xl font-semibold">Works</h1>
                <div className="grid  lg:grid-cols-5 gap-8">
                    <Link
                        href="https://degenlegends.io/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <a
                            className="col-span-6 row-span-1  h-[12rem] lg:h-[24rem] rounded-lg relative hover:ring-4 hover:ring-[#8257E5] ring-offset-8 ring-offset-[#F4F4F5] dark:ring-offset-[#18181B]"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Image
                                className="rounded-3xl "
                                src="/degen-hero.gif"
                                layout="fill"
                                alt=""
                            ></Image>
                        </a>
                    </Link>
                    <Link
                        href={"https://solvillage.vercel.app/"}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <a
                            className="col-span-6 lg:col-span-2 h-[24rem] relative rounded-lg bg-[#F4F4F5] dark:bg-[#18181B] hover:ring-4 hover:ring-[#8257E5] ring-offset-8 ring-offset-[#F4F4F5] dark:ring-offset-[#18181B]"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Image
                                className="rounded-3xl"
                                src="/neo2.png"
                                layout="fill"
                                alt=""
                            ></Image>
                        </a>
                    </Link>
                    <Link href={"https://www.fotumengenharia.com.br/"}>
                        <a
                            className="col-span-6 lg:col-span-3 h-[12rem] lg:h-[24rem] relative rounded-lg bg-[#F4F4F5] dark:bg-[#18181B] hover:ring-4 hover:ring-[#8257E5] ring-offset-8 ring-offset-[#F4F4F5] dark:ring-offset-[#18181B]"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Image
                                className=""
                                src="/fotum.png"
                                layout="fill"
                                alt=""
                            ></Image>
                        </a>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Resumee;
