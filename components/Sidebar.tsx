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
            href: "tel:+5571997001211",
        },
        {
            title: "Email",
            text: "eng.rsgomes@gmail.com",
            icon: faEnvelopeOpenText,
            style: "text-[#6AB5B9]",
            href: "mailto:eng.rsgomes@gmail.com",
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
            <div className="min-h-screen col-span-12 mt-24 lg:mt-0  lg:h-screen  lg:fixed  lg:top-[7.5rem] lg:left-[8.33vw]  lg:w-[16.66vw]">
                <main className="relative col-start-2 col-end-4 ">
                    <div className="">
                        <div className=" justify-center z-30 grid gap-y-6 min-w-[312px] 2xl:min-w-[416px]">
                            <div className="hidden lg:flex bg-[#F4F4F5] dark:bg-[#18181B] z-[-1] rounded-3xl p-5  absolute lg:mt-24 lg:w-full lg:h-[95%] min-w-[312px] 2xl:min-w-[416px]"></div>

                            <div className="flex flex-col w-60 h-60 items-center mx-auto drop-shadow-xl">
                                <Image
                                    className="rounded-3xl "
                                    src={engGomes}
                                    alt="Rafael Gomes"
                                />
                            </div>
                            <div className="flex flex-col gap-2 text-center">
                                <h1 className="text-2xl font-semibold dark:text-[#F4F4F5]">
                                    Rafael Gomes
                                </h1>
                                <h2 className="text-[#71717A] dark:text-[#A1A1AA]">
                                    Front End Engineer
                                </h2>
                            </div>
                            <div className="flex gap-4 items-center justify-center">
                                {socialLinks.map((item, index) => (
                                    <a
                                        key={index}
                                        className="bg-[#E4E4E7] hover:bg-[#D4D4D8] dark:bg-[#27272A]  dark:hover:bg-[#3F3F46] h-12 w-12 rounded-2xl p-3 text-[#8257E5] hover:text-[#996DFF]"
                                        href={item.href}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FontAwesomeIcon
                                            className={""}
                                            icon={item.icon}
                                        />
                                    </a>
                                ))}
                            </div>
                            <div className="flex flex-col items-center justify-center px-3 py-2 bg-[#E4E4E7] dark:bg-[#27272A] rounded-2xl w-min mx-auto 2xl:px-10">
                                {personalInfo.map((item, index) => (
                                    <a
                                        key={index}
                                        className="grid grid-cols-[1fr,5fr] grid-rows-2 py-3 gap-x-3 border-b border-gray-300 last:border-0"
                                        href={item.href}
                                    >
                                        <div className="w-10 rounded-lg p-2 row-span-2 h-full flex items-center justify-center">
                                            <FontAwesomeIcon
                                                className={`w-5 h-5 text-[#8257E5]`}
                                                icon={item.icon}
                                            />
                                        </div>
                                        <p className="dark:text-[#F4F4F5] text-sm self-end">
                                            {item.title}
                                        </p>
                                        <p className="self-start text-[#71717A] dark:text-[#A1A1AA]">
                                            {item.text}
                                        </p>
                                    </a>
                                ))}
                            </div>

                            <button className="flex items-center justify-center px-10 py-4 gap-3 font-semibold bg-[#8257E5] hover:bg-[#996DFF] text-white rounded-full mx-auto ">
                                <FontAwesomeIcon
                                    className="text-white w-5 h-5"
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
