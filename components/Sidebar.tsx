import Image from "next/image";
import Link from "next/link";
import engGomes from "../public/engGomes.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedinIn,
    faTwitter,
    faWhatsapp,
    faTelegram,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";

import {
    faMobileScreenButton,
    faLocationDot,
    faCalendarDays,
    faEnvelopeOpenText,
    faCloudArrowDown,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
    const socialLinks = [
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/engineergomes/",
            icon: faLinkedinIn,
            style: "text-[#0072b1]",
        },
        {
            name: "Github",
            href: "https://github.com/engineergomes",
            icon: faGithub,
            style: "text-[#161B22]",
        },
        {
            name: "Twitter",
            href: "https://twitter.com/engineergomes",
            icon: faTwitter,
            style: "text-[#1C9CEA]",
        },
        {
            name: "WhatsApp",
            href: "https://wa.me/+557197001211",
            icon: faWhatsapp,
            style: "text-[#4CCA5A]",
        },
        {
            name: "Telegram",
            href: "https://t.me/engineergomes",
            icon: faTelegram,
            style: "text-[#2496D1]",
        },
    ];

    const personalInfo = [
        {
            title: "Phone",
            text: "+55 71 99700 1211",
            icon: faMobileScreenButton,
            style: "text-[#E93B81]",
        },
        {
            title: "Email",
            text: "eng.rsgomes@gmail.com",
            icon: faEnvelopeOpenText,
            style: "text-[#6AB5B9]",
        },
        {
            title: "Location",
            text: "Brazil",
            icon: faLocationDot,
            style: "text-[#FD7590]",
        },
        {
            title: "Birthday",
            text: "Aug 13, 1994",
            icon: faCalendarDays,
            style: "text-[#C17CEB]",
        },
    ];
    return (
        <>
            <div className="min-h-screen col-span-12  md:h-screen  md:fixed  md:top-24 md:left-[8.33vw] md:w-[16.66vw]">
                <main className="relative col-start-2 col-end-4">
                    <div className="">
                        <div className=" justify-center z-30 grid gap-y-6">
                            <div className=" bg-white z-[-1] rounded-3xl p-5 row-start-1 row-end-3 absolute md:mt-24 md:w-full md:h-[95%]"></div>

                            <div className="flex flex-col w-60 h-60 items-center mx-auto drop-shadow-xl">
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
                                {socialLinks.map((item, index) => (
                                    <a
                                        key={index}
                                        className="bg-[#F3F6F6] h-10 w-10 rounded-2xl p-2"
                                    >
                                        <FontAwesomeIcon
                                            className={item.style}
                                            icon={item.icon}
                                        />
                                    </a>
                                ))}
                            </div>
                            <div className="flex flex-col items-center justify-center px-3 py-2 bg-[#F3F6F6] rounded-2xl w-min mx-auto">
                                {personalInfo.map((item, index) => (
                                    <div
                                        key={index}
                                        className="grid grid-cols-[1fr,5fr] grid-rows-2 py-3 gap-x-3 border-b border-gray-300"
                                    >
                                        <a className="bg-white w-10 rounded-lg p-2 row-span-2 h-full flex items-center justify-center">
                                            <FontAwesomeIcon
                                                className={`w-5 h-5 ${item.style}`}
                                                icon={item.icon}
                                            />
                                        </a>
                                        <p className="text-gray-600 text-sm self-end">
                                            {item.title}
                                        </p>
                                        <p className="self-start">
                                            {item.text}
                                        </p>
                                    </div>
                                ))}
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
            </div>
        </>
    );
}

export default Sidebar;
