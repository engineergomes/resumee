import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Logo from "../public/cold-brew-logo.svg";
import LogoDark from "../public/cold-brew-logo-dark.svg";
import List from "../public/list.svg";
import XIcon from "../public/x.svg";

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
        { name: "Blog", href: "#" },
        { name: "Contact", href: "#" },
    ];
    return (
        <header
            className={`fixed top-0 w-full z-50 md:bg-opacity-90 transition duration-300 ease-in-out ${
                !top && "bg-white backdrop-blur-sm shadow-lg"
            }`}
        >
            <Popover>
                <div className="relative pt-6  lg:px-16 sm:pt-0 max-w-[1400px] mx-auto px-5 sm:px-6">
                    <nav className="relative flex items-center justify-between sm:h-14 lg:justify-start ">
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
                                        <p>Rafael </p>
                                    </a>
                                </Link>
                                <div className="-mr-2 flex items-center md:hidden">
                                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center  hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset ">
                                        <Image
                                            width={32}
                                            height={32}
                                            src={List}
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
                                    <a
                                        className={`border-b-2 border-transparent ${
                                            router.pathname === item.href
                                                ? "border-[#8257E6]"
                                                : ""
                                        }`}
                                    >
                                        {item.name}
                                    </a>
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
                                                : "translate-x-6 bg-[#8B8B8B] active:bg-[#9B9B9B] hover:bg-[#7B7B7B]"
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
                    <Popover.Panel
                        focus
                        className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                    >
                        <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="px-5 pt-4 flex items-center justify-between">
                                <Link href="/" className=" w-8 h-8">
                                    <a className=" grid grid-cols-2 items-center gap-2 ">
                                        <Image
                                            width={32}
                                            height={32}
                                            src={Logo}
                                            alt="Cold Brew Logo"
                                        />

                                        <p>Rafael Gomes</p>
                                    </a>
                                </Link>
                                <div className="-mr-2">
                                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center  hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset ring-black">
                                        <Image
                                            width={32}
                                            height={32}
                                            src={XIcon}
                                            alt="Exit button"
                                        />
                                    </Popover.Button>
                                </div>
                            </div>
                            <div className="flex flex-col px-8 pt-2 pb-2 space-y-1 items-center gap-2 ">
                                {navigation.map((item) => (
                                    <Popover.Button
                                        key={item.name}
                                        className=" text-center py-4 rounded-md text-base font-bold  hover:text-gray-900 hover:bg-gray-500 w-full"
                                    >
                                        <Link href={item.href}>
                                            <a>{item.name}</a>
                                        </Link>
                                    </Popover.Button>
                                ))}
                            </div>
                        </div>
                    </Popover.Panel>
                </Transition>
            </Popover>
        </header>
    );
}

export default Header;

//aa
