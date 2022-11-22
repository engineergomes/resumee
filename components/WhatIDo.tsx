import { faCode } from "@fortawesome/free-solid-svg-icons";
import ListItem from "./ListItem";

function WhatIDo() {
    return (
        <section className="flex flex-col gap-10 px-4 mt-12 ">
            <div className="hidden sm:flex sm:flex-col col-span-7 ">
                <h1 className="text-center text-3xl font-bold mb-6 ">
                    About me
                </h1>
                <div className="flex flex-col  gap-3  self-center">
                    <p>
                        Master student in electrical engineering, working as a
                        Software Engineer!
                    </p>
                    <p>
                        I started to develop at the age of 14, when I learned
                        the basics of Perl to be able to use bots in Ragnarok
                        Online 😂. During graduation I went through several
                        languages ​​and frameworks (Assembly, C, C ++, Ruby,
                        Ruby on Rails). Today I dedicate myself to projects
                        aimed to web3.0, working with JavaScript/TypeScript,
                        React, Next and Node.{" "}
                    </p>

                    <p>
                        I'm always open to conversations and opportunities, feel
                        free to get in touch!
                    </p>
                </div>
            </div>
            <div>
                <h1 className="text-center text-3xl font-semibold mb-6">
                    What I do
                </h1>
                <ul className="grid grid-cols-1 gap-3 grid-rows-4">
                    <ListItem
                        title="Frontend"
                        text="I can build your next web app using React or Next.js.
                        These are javascript-based tools used by large tech
                        companies like Meta and Netflix."
                        icon={faCode}
                    />
                    <ListItem
                        title="Blockchain"
                        text=" With Solana experience, I've already helped +10 NFTs
                    projects to be launched and built a system to verify
                    holders on Discord."
                        icon={faCode}
                    />
                    <ListItem
                        title="Automation"
                        text="   Looking for an automation to fill your CRM or
                    spreadsheet with accurate data? I have already built
                    automations to capture leads for web3.0 and marketing
                    companies."
                        icon={faCode}
                    />
                </ul>
            </div>
        </section>
    );
}

export default WhatIDo;
