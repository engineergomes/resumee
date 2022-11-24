import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { NextPage } from "next";
import Head from "next/head";
import AboutMe from "./Sidebar";

import Header from "../components/Header";
import WhatIDo from "../components/WhatIDo";

function WorkingSkills() {
    return (
        <div className="flex flex-col px-4 gap-y-4">
            <div className="flex items-center space-x-2">
                <FontAwesomeIcon
                    className="h-8 w-8 text-[#8257E5]"
                    icon={faLaptopCode}
                />
                <h1 className="text-center text-3xl font-semibold">
                    Working Skills
                </h1>
            </div>
            <div className="flex flex-col px-8 py-5  gap-y-4 rounded-xl sm:w-[calc(100%-4rem)] justify-self-center">
                <div className="flex flex-col">
                    <div className="flex justify-between">
                        <h2 className="font-medium">TypeScript</h2>
                        <p className="font-medium">100%</p>
                    </div>
                    <div className="h-1 bg-[#E4E4E7]">
                        <div className="h-1 bg-[#8257E5] w-[100%]"></div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex justify-between">
                        <h2 className="font-medium">React</h2>
                        <p className="font-medium">100%</p>
                    </div>
                    <div className="h-1 bg-[#E4E4E7]">
                        <div className="h-1 bg-[#8257E5] w-[100%]"></div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex justify-between">
                        <h2 className="font-medium">Next</h2>
                        <p className="font-medium">100%</p>
                    </div>
                    <div className="h-1 bg-[#E4E4E7]">
                        <div className="h-1 bg-[#8257E5] w-[100%]"></div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex justify-between">
                        <h2 className="font-medium">Python</h2>
                        <p className="font-medium">75%</p>
                    </div>
                    <div className="h-1 bg-[#E4E4E7]">
                        <div className="h-1 bg-[#8257E5] w-[75%]"></div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex justify-between">
                        <h2 className="font-medium">Node</h2>
                        <p className="font-medium">40%</p>
                    </div>
                    <div className="h-1 bg-[#E4E4E7]">
                        <div className="h-1 bg-[#8257E5] w-[40%]"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorkingSkills;
