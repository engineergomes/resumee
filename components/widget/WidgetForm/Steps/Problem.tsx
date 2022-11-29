import { CloseButton } from "../../CloseButton";
import { BackButton } from "../BackButton";
// import { Camera } from "phosphor-react";
import { ScreenshotButton } from "../../ScreenshotButton";
import { SendFormButton } from "../SendFormButton";
import {
    onFormEndRequestedType,
    onScreenshotTookType,
    screenshotType,
    // onFormSendRequest
} from "..";
import { FormEvent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedinIn,
    faGithub,
    faTwitter,
    faWhatsapp,
    faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";

interface ProblemProps {
    onFormRestartRequested: () => void;
    onFormEndRequested: (type: onFormEndRequestedType) => void;
    onScreenshotTook: (type: onScreenshotTookType) => void;
    // onFormSendRequest: onFormSendRequest
    screenshot: screenshotType;
}

export function Problem({
    onFormRestartRequested,
    onFormEndRequested,
    onScreenshotTook,
    // onFormSendRequest,
    screenshot,
}: ProblemProps) {
    const [comment, setComment] = useState("");

    function handleSubmitForm(event: FormEvent) {
        event.preventDefault();
        onFormEndRequested(true);
        console.log({ screenshot, comment });
    }

    const socialLinks = [
        // {
        //     name: "LinkedIn",
        //     href: "https://www.linkedin.com/in/engineergomes/",
        //     icon: faLinkedinIn,
        //     style: "text-[#0072b1]",
        // },
        // {
        //     name: "Twitter",
        //     href: "https://twitter.com/engineergomes",
        //     icon: faTwitter,
        //     style: "text-[#1C9CEA]",
        // },
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
        {
            name: "Email",

            icon: faEnvelopeOpenText,
            style: "text-[#6AB5B9]",
            href: "mailto:eng.rsgomes@gmail.com",
        },
    ];

    return (
        <>
            <header className="flex text-xl leading-6 items-center gap-2">
                <BackButton onFormRestartRequested={onFormRestartRequested} />
                {/* <img src="/bug.svg" alt="Insect" className=" h-4 w-4" /> */}
                <div className="flex flex-col items-center justify-center">
                    <p>I can help you!</p>
                    <p>Choose how to get in touch:</p>
                </div>

                <CloseButton />
            </header>
            <main className="w-full h-full ">
                <form
                    onSubmit={handleSubmitForm}
                    className="flex flex-col my-4 w-full items-center gap-2"
                >
                    <ul className="grid grid-cols-3 gap-4 items-center justify-center">
                        {socialLinks.map((item, index) => (
                            <a
                                key={index}
                                className="flex flex-col gap-3 items-center justify-center bg-[#E4E4E7] hover:bg-[#D4D4D8] dark:bg-[#27272A]  dark:hover:bg-[#3F3F46] h-36 w-36 rounded-lg p-5 text-[#8257E5] hover:text-[#996DFF] hover:ring-2 hover:ring-[#8257E5] ring-offset-4 ring-offset-[#F4F4F5] dark:ring-offset-[#18181B]"
                                href={item.href}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon
                                    className={""}
                                    icon={item.icon}
                                />
                                <p className="text-bold text-md">{item.name}</p>
                            </a>
                        ))}
                    </ul>
                    {/* <textarea
                        className="min-w-[304px] w-full min-h-[112px] h-full rounded border border-solid border-[#52525B] bg-inherit resize-none text-[#A1A1AA] overflow-auto focus:border-violet-700 focus:ring-violet-700 focus:outline-none scrollbar-thumb-zinc-700 scrollbar-thin scrollbar-track-transparent"
                        placeholder="Tell us more!"
                        onChange={(event) => setComment(event.target.value)}
                    ></textarea> */}
                    {/* <div className="flex gap-2 w-full">
                        <ScreenshotButton
                            onScreenshotTook={onScreenshotTook}
                            screenshot={screenshot}
                        />
                        <SendFormButton
                            comment={comment}
                            onFormEndRequested={onFormEndRequested}
                        />
                    </div> */}
                </form>
            </main>
        </>
    );
}
