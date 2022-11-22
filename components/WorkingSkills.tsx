import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { NextPage } from "next";
import Head from "next/head";
import AboutMe from "./Sidebar";

import Header from "../components/Header";
import WhatIDo from "../components/WhatIDo";

function WorkingSkills() {
    return (
        <div className="grid grid-rows-4 px-4 gap-y-4">
            <div className="flex items-center space-x-2">
                <FontAwesomeIcon className="h-8 w-8" icon={faLaptopCode} />
                <h1 className="text-center text-3xl font-semibold">
                    Working Skills
                </h1>
            </div>
            <div className="flex flex-col">
                <div className="flex justify-between">
                    <h2 className="text-[#526377] font-medium">TypeScript</h2>
                    <p className="text-[#526377] font-medium">100%</p>
                </div>
                <div className="h-1 bg-[#edf2f2]">
                    <div className="h-1 bg-blue-500 w-[100%]"></div>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex justify-between">
                    <h2 className="text-[#526377] font-medium">React</h2>
                    <p className="text-[#526377] font-medium">100%</p>
                </div>
                <div className="h-1 bg-[#edf2f2]">
                    <div className="h-1 bg-blue-500 w-[100%]"></div>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex justify-between">
                    <h2 className="text-[#526377] font-medium">Next</h2>
                    <p className="text-[#526377] font-medium">100%</p>
                </div>
                <div className="h-1 bg-[#edf2f2]">
                    <div className="h-1 bg-blue-500 w-[100%]"></div>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex justify-between">
                    <h2 className="text-[#526377] font-medium">Python</h2>
                    <p className="text-[#526377] font-medium">75%</p>
                </div>
                <div className="h-1 bg-[#edf2f2]">
                    <div className="h-1 bg-blue-500 w-[75%]"></div>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex justify-between">
                    <h2 className="text-[#526377] font-medium">Node</h2>
                    <p className="text-[#526377] font-medium">40%</p>
                </div>
                <div className="h-1 bg-[#edf2f2]">
                    <div className="h-1 bg-blue-500 w-[40%]"></div>
                </div>
            </div>
        </div>
    );
}

export default WorkingSkills;
