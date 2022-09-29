import Image from "next/image";
import Link from "next/link";
import engGomes from "../public/engGomes.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedinIn,
    faTwitter,
    faWhatsapp,
    faTelegram,
} from "@fortawesome/free-brands-svg-icons";

import {
    faMobileScreenButton,
    faLocationDot,
    faCalendarDays,
    faEnvelopeOpenText,
    faCloudArrowDown,
} from "@fortawesome/free-solid-svg-icons";

function AboutMe() {
    return (
        <>
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
                            <a className="bg-[#F3F6F6] h-10 w-10 rounded-2xl p-2">
                                <FontAwesomeIcon
                                    className="text-[#0072b1]"
                                    icon={faLinkedinIn}
                                />
                            </a>
                            <a className="bg-[#F3F6F6] h-10 w-10 rounded-2xl p-2">
                                <FontAwesomeIcon
                                    className="text-[#1C9CEA]"
                                    icon={faTwitter}
                                />
                            </a>
                            <a className="bg-[#F3F6F6] h-10 w-10 rounded-2xl p-2">
                                <FontAwesomeIcon
                                    className="text-[#4CCA5A]"
                                    icon={faWhatsapp}
                                />
                            </a>
                            <a className="bg-[#F3F6F6] h-10 w-10 rounded-2xl p-2">
                                <FontAwesomeIcon
                                    className="text-[#2496D1]"
                                    icon={faTelegram}
                                />
                            </a>
                        </div>
                        <div className="flex flex-col items-center justify-center px-3 py-2 bg-[#F3F6F6] rounded-2xl">
                            <div className="grid grid-cols-[1fr,5fr] grid-rows-2 py-3 gap-x-3 border-b border-gray-300">
                                <a className="bg-white w-10 rounded-lg p-2 row-span-2 h-full flex items-center justify-center">
                                    <FontAwesomeIcon
                                        className="text-[#E93B81] w-5 h-5 "
                                        icon={faMobileScreenButton}
                                    />
                                </a>

                                <p className="text-gray-600 text-sm self-end">
                                    Phone
                                </p>
                                <p className="self-start">+55 71 99700 1211</p>
                            </div>

                            <div className="grid grid-cols-[1fr,5fr] grid-rows-2 py-3 gap-x-3 border-b border-gray-300">
                                <a className="bg-white w-10 h-10 rounded-lg p-2 row-span-2 flex items-center justify-center">
                                    <FontAwesomeIcon
                                        className="text-[#6AB5B9] w-5 h-5"
                                        icon={faEnvelopeOpenText}
                                    />
                                </a>

                                <p className="text-gray-600 text-sm self-end">
                                    Email
                                </p>
                                <p className="self-start">
                                    eng.rsgomes@gmail.com
                                </p>
                            </div>
                            <div className="grid grid-cols-[1fr,5fr] grid-rows-2 py-3 gap-x-3 border-b border-gray-300">
                                <a className="bg-white w-10 rounded-lg p-2 row-span-2 h-full flex items-center justify-center">
                                    <FontAwesomeIcon
                                        className="text-[#FD7590] w-5 h-5 "
                                        icon={faLocationDot}
                                    />
                                </a>

                                <p className="text-gray-600 text-sm self-end">
                                    Location
                                </p>
                                <p className="self-start">Brazil</p>
                            </div>
                            <div className="grid grid-cols-[1fr,5fr] grid-rows-2 py-3 gap-x-3">
                                <a className="bg-white w-10 rounded-lg p-2 row-span-2 h-full flex items-center justify-center">
                                    <FontAwesomeIcon
                                        className="text-[#C17CEB] w-5 h-5 "
                                        icon={faCalendarDays}
                                    />
                                </a>

                                <p className="text-gray-600 text-sm self-end">
                                    Birthday
                                </p>
                                <p className="self-start">Aug 13, 1994</p>
                            </div>
                        </div>

                        <button className="flex items-center justify-center px-10 py-4 gap-3 font-semibold text-white bg-gradient-to-r from-blue-500 to-teal-400 rounded-full mx-auto">
                            <FontAwesomeIcon
                                className="text-white w-5 h-5 "
                                icon={faCloudArrowDown}
                            />
                            <p>Download CV</p>
                        </button>
                    </div>
                </div>
            </main>
        </>
    );
}

export default AboutMe;
