import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import engGomes from "../public/engGomes.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedinIn,
    faTwitter,
    faWhatsapp,
    faTelegram,
} from "@fortawesome/free-brands-svg-icons";

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Rafael Gomes - Resumee</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <main className=" min-h-screen mt-24">
                <div className="grid grid-cols-12 container mx-auto px-4 sm:px-6 ">
                    <div className="flex flex-col col-span-12 sm:col-span-4 gap-6">
                        <div className="flex flex-col w-60 h-60 items-center mx-auto ">
                            <Image
                                className="rounded-3xl "
                                src={engGomes}
                                alt="Rafael Gomes"
                            />
                        </div>
                        <div className="flex flex-col gap-2 text-center">
                            <h1 className="text-2xl font-semibold">
                                Rafael Gomes
                            </h1>
                            <h2 className="text-[#7b7b7b]">
                                Front End Engineer
                            </h2>
                        </div>
                        <div className="flex gap-4 items-center justify-center">
                            <a className="bg-[#F3F6F6] h-10 w-10 rounded-lg p-2">
                                <FontAwesomeIcon
                                    className="text-[#0072b1]"
                                    icon={faLinkedinIn}
                                />
                            </a>
                            <a className="bg-[#F3F6F6] h-10 w-10 rounded-lg p-2">
                                <FontAwesomeIcon
                                    className="text-[#1C9CEA]"
                                    icon={faTwitter}
                                />
                            </a>
                            <a className="bg-[#F3F6F6] h-10 w-10 rounded-lg p-2">
                                <FontAwesomeIcon
                                    className="text-[#4CCA5A]"
                                    icon={faWhatsapp}
                                />
                            </a>
                            <a className="bg-[#F3F6F6] h-10 w-10 rounded-lg p-2">
                                <FontAwesomeIcon
                                    className="text-[#2496D1]"
                                    icon={faTelegram}
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;
