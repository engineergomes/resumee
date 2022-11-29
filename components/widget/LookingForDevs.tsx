import { CloseButton } from "./buttons/CloseButton";
import { BackButton } from "./buttons/BackButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";

interface ProblemProps {
    onFormRestartRequested: () => void;
}

export default function LookingForDevs({
    onFormRestartRequested,
}: ProblemProps) {
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
                <div className="flex flex-col items-center justify-center">
                    <p>I can help you!</p>
                    <p>Choose how to get in touch:</p>
                </div>

                <CloseButton />
            </header>
            <main className="w-full h-full ">
                <div className="flex flex-col my-4 w-full items-center gap-2">
                    <ul className="grid grid-cols-3 gap-4 items-center justify-center">
                        {socialLinks.map((item, index) => (
                            <a
                                key={index}
                                className="flex flex-col gap-3 items-center justify-center bg-[#E4E4E7] hover:bg-[#D4D4D8] dark:bg-[#27272A]  dark:hover:bg-[#3F3F46] h-36 w-36 rounded-lg p-5  text-[#8257E5] hover:ring-2 hover:ring-[#8257E5] ring-offset-4 ring-offset-[#F4F4F5] dark:ring-offset-[#18181B]"
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
                </div>
            </main>
        </>
    );
}
