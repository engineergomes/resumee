import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedinIn,
    faTwitter,
    faWhatsapp,
    faTelegram,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";
import Logo from "../public/cold-brew-logo.svg";
import LogoDark from "../public/cold-brew-logo-dark.svg";
import List from "../public/list.svg";
import XIcon from "../public/x.svg";
import ListDark from "../public/list-dark.svg";
import XIconDark from "../public/x-dark.svg";

import { Fragment } from "react";
import { Popover, Switch, Transition } from "@headlessui/react";

interface headerProps {
    darkMode: boolean;
    setDarkMode: Dispatch<SetStateAction<boolean>>;
}

function Header({ darkMode, setDarkMode }: headerProps) {
    const [top, setTop] = useState(true);
    const router = useRouter();

    // detect whether user has scrolled the page down by 10px
    useEffect(() => {
        const scrollHandler = () => {
            window.pageYOffset > 10 ? setTop(false) : setTop(true);
        };
        window.addEventListener("scroll", scrollHandler);
        return () => window.removeEventListener("scroll", scrollHandler);
    }, [top]);

    const navigation = [
        { name: "About", href: "/" },
        { name: "Resumee", href: "/resumee" },
        { name: "Works", href: "/works" },
        { name: "Blog", href: "#", disabled: true },
        { name: "Contact", href: "#", disabled: true },
    ];

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
    return (
        <header className={`fixed top-4 w-full z-50 px-5 `}>
            <Popover>
                <div
                    className={` py-2 lg:py-0 lg:px-16 sm:pt-0 max-w-[1400px] mx-auto px-5 sm:px-6 md:bg-opacity-90 transition duration-300 ease-in-out border dark:border-[#F4F4F5] border-[#27272A] rounded-full ${
                        !top &&
                        "bg-white dark:bg-black backdrop-blur-sm shadow-lg"
                    }`}
                >
                    <nav className="relative flex items-center justify-between  lg:justify-start ">
                        <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                            <div className="flex items-center justify-between w-full md:w-auto">
                                <Link href="/" replace>
                                    <a className="flex items-center justify-center gap-3">
                                        <Image
                                            width={32}
                                            height={32}
                                            src={darkMode ? LogoDark : Logo}
                                            alt="Cold Brew Logo"
                                        />
                                        <p className="text-lg lg:text-2xl dark:text-white text-black">
                                            Rafael{" "}
                                        </p>
                                    </a>
                                </Link>
                                <div className=" flex items-center md:hidden">
                                    <Popover.Button className="text-white rounded-md p-2 inline-flex items-center justify-center  border border-transparent hover:border-[#8257E5]">
                                        <Image
                                            width={32}
                                            height={32}
                                            src={darkMode ? ListDark : List}
                                            alt="Menu"
                                        />
                                    </Popover.Button>
                                </div>
                            </div>
                        </div>

                        {/* desktop nav*/}
                        <div className="hidden md:flex md:ml-10 md:pr-0 md:space-x-8 md:items-center md:justify-end md:w-full">
                            {navigation.map((item) => (
                                <Link key={item.name} href={item.href}>
                                    <button
                                        className={`disabled:opacity-50 sm:h-20  border-spacing-40 hover:border-[#8257E6] border-b-[5px] ${
                                            router.pathname === item.href
                                                ? "border-[#8257E6] border-b-[3px]"
                                                : "border-transparent border-b-[3px]"
                                        }`}
                                        disabled={item.disabled}
                                    >
                                        {item.name}
                                    </button>
                                </Link>
                            ))}

                            <div className="flex flex-col gap-3">
                                <Switch
                                    checked={darkMode}
                                    onChange={() => {
                                        setDarkMode(!darkMode);
                                    }}
                                    className={` relative inline-flex h-6 w-11 items-center rounded-full border border-[#454545] disabled:opacity-30`}
                                >
                                    <span className="sr-only">
                                        Change theme
                                    </span>
                                    <span
                                        className={`${
                                            darkMode
                                                ? "translate-x-1 bg-[#8257E5] hover:bg-[#996DFF] active:bg-[#a88ee6]"
                                                : "translate-x-6 bg-[#8257E5] hover:bg-[#996DFF] active:bg-[#a88ee6]"
                                        } inline-block h-4 w-4 transform rounded-full  transition `}
                                    />
                                </Switch>
                                <p className="text-xs text-center">
                                    {darkMode ? "Dark" : "Light"}
                                </p>
                            </div>
                        </div>
                    </nav>
                </div>

                {/* Mobile dropdown*/}
                <Transition
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Popover.Panel className="absolute z-10 -top-4 inset-x-0 transition transform origin-top-right md:hidden">
                        {({ close }) => (
                            <div className="rounded-lg shadow-md bg-[#F4F4F5] dark:bg-[#18181B] overflow-hidden">
                                <div className="px-5 pt-4 flex items-center justify-between">
                                    <Link href="/" className=" w-8 h-8 ring-0">
                                        <a className="flex items-center gap-2 ">
                                            <Image
                                                className="self-start justify-self-start"
                                                width={32}
                                                height={32}
                                                src={darkMode ? LogoDark : Logo}
                                                alt="Cold Brew Logo"
                                            />

                                            <p>Rafael</p>
                                        </a>
                                    </Link>

                                    <div className="flex items-center">
                                        <div className="flex flex-col gap-3">
                                            <Switch
                                                checked={darkMode}
                                                onChange={() => {
                                                    setDarkMode(!darkMode);
                                                }}
                                                className={` relative inline-flex h-6 w-11 items-center rounded-full border border-[#454545] disabled:opacity-30`}
                                            >
                                                <span className="sr-only">
                                                    Change theme
                                                </span>
                                                <span
                                                    className={`${
                                                        darkMode
                                                            ? "translate-x-1 bg-[#8257E5] hover:bg-[#996DFF] active:bg-[#a88ee6]"
                                                            : "translate-x-6 bg-[#8257E5] hover:bg-[#996DFF] active:bg-[#a88ee6]"
                                                    } inline-block h-4 w-4 transform rounded-full  transition `}
                                                />
                                            </Switch>
                                        </div>

                                        <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center border border-transparent hover:border-[#8257E5]  ring-black">
                                            <Image
                                                width={32}
                                                height={32}
                                                src={
                                                    darkMode ? XIconDark : XIcon
                                                }
                                                alt="Exit button"
                                            />
                                        </Popover.Button>
                                    </div>
                                </div>
                                <div className="flex flex-col px-8 pt-4 pb-2 space-y-4 items-center gap-2">
                                    {navigation.map((item) => (
                                        <Link key={item.name} href={item.href}>
                                            <button
                                                className=" text-center py-2 text-base font-bold border-b border-transparent hover:border-[#8257E5] disabled:border-transparent w-full disabled:opacity-50"
                                                onClick={() => close()}
                                                disabled={item.disabled}
                                            >
                                                {item.name}
                                            </button>
                                        </Link>
                                    ))}
                                </div>

                                <div className="flex gap-4 items-center justify-center py-6">
                                    {socialLinks.map((item, index) => (
                                        <a
                                            key={index}
                                            className="bg-[#E4E4E7] hover:bg-[#D4D4D8] dark:bg-[#27272A]  dark:hover:bg-[#3F3F46] h-12 w-12 rounded-lg p-3 text-[#8257E5] hover:text-[#996DFF] hover:ring-2 hover:ring-[#8257E5] ring-offset-4 ring-offset-[#F4F4F5] dark:ring-offset-[#18181B]"
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
                            </div>
                        )}
                    </Popover.Panel>
                </Transition>
            </Popover>
        </header>
    );
}

export default Header;

//aa
