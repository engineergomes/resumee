// import { WidgetForm } from "..";
// import { useState } from "react";
import { CloseButton } from "../../CloseButton";
import {
    onProblemChangedType,
    onIdeaChangedType,
    onThoughtChangedType,
} from "..";
import { faCode, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface FormStartProps {
    onProblemChanged: (type: onProblemChangedType) => void;
    onIdeaChanged: (type: onIdeaChangedType) => void;
    onThoughtChanged: (type: onThoughtChangedType) => void;
}

export function FormStart({
    onProblemChanged,
    onIdeaChanged,
    onThoughtChanged,
}: FormStartProps) {
    return (
        <>
            <header className="flex text-xl leading-6 items-center">
                <p>How can we help?</p>
                <CloseButton />
            </header>

            <main className="grid  gap-x-2 items-center mt-10 mb-10">
                {" "}
                <button
                    className="flex flex-col items-center bg-[#27272A] p-4 rounded-2xl gap-3 border-2 border-[#27272A] hover:border-violet-700 hover:text-violet-700"
                    onClick={() => onProblemChanged(true)}
                >
                    {" "}
                    <FontAwesomeIcon
                        icon={faCode}
                        className="h-6 w-6 lg:h-16 lg:w-16"
                    />{" "}
                    <p className="text-md font-bold ">Looking for devs?</p>
                </button>
            </main>
        </>
    );
}
