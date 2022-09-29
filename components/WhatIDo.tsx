import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

function WhatIDo() {
    return (
        <section className="px-4 mt-12 ">
            <div className="hidden sm:flex sm:flex-col col-span-7">
                <h1 className="text-3xl font-bold">About me</h1>
                <p>
                    Im Creative Director and UI/UX Designer from Sydney,
                    Australia, working in web development and print media. I
                    enjoy turning complex problems into simple, beautiful and
                    intuitive designs. My aim is to bring across your message
                    and identity in the most creative way. I created web design
                    for many famous brand companies.
                </p>
            </div>

            <h1 className="text-center text-3xl font-semibold">What I do</h1>
            <div className="grid grid-cols-1 gap-3 grid-rows-4">
                <div className="grid grid-cols-[1fr,7fr] bg-green-200 px-4 py-5 gap-x-4 gap-y-3 rounded-xl">
                    <FontAwesomeIcon icon={faCode} />
                    <h2 className="font-semibold text-xl">Frontend</h2>
                    <p className="col-span-2 text-justify text-[#44566C] font-medium">
                        I can build your next web app using React or Next.js.
                        These are javascript-based tools used by large tech
                        companies like Meta and Netflix.
                    </p>
                </div>
                <div className="grid grid-cols-[1fr,7fr] bg-green-200 px-4 py-5 gap-4 rounded-xl">
                    <FontAwesomeIcon icon={faCode} />
                    <h2 className="font-semibold text-xl">Blockchain</h2>
                    <p className="col-span-2 text-justify text-[#44566C] font-medium">
                        With Solana experience, I've already helped +10 NFTs
                        projects to be launched and built a system to verify
                        holders on Discord.
                    </p>
                </div>

                <div className="grid grid-cols-[1fr,7fr] bg-green-200 px-4 py-5 gap-4 rounded-xl">
                    <FontAwesomeIcon icon={faCode} />
                    <h2 className="font-semibold text-xl">Automation</h2>
                    <p className="col-span-2 text-justify text-[#44566C] font-medium">
                        Looking for an automation to fill your CRM or
                        spreadsheet with accurate data? I have already built
                        automations to capture leads for web3.0 and marketing
                        companies.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default WhatIDo;
