import { faCode, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Disclosure, Transition } from "@headlessui/react";
import ListItem from "./ListItem";

function Experience() {
    return (
        <section className="flex flex-col px-4 gap-4">
            <div className="flex items-center space-x-2">
                <FontAwesomeIcon
                    className="h-8 w-8 text-[#8257E5]"
                    icon={faBriefcase}
                />
                <h1 className="text-center text-3xl font-semibold">
                    Experience
                </h1>
            </div>

            <ul className="grid grid-cols-1 gap-3 ">
                <ListItem
                    title={"Coldbrew - Fullstack Engineer - TreeShake"}
                    when="Apr 2022 - Present · 8 mos"
                    text={
                        <p>
                            TreeShake is a platform for managing NFT DAOs at
                            Solana.
                        </p>
                    }
                    performedActivitiesa={[
                        "API built using Node.js",
                        "Prisma + MongoDB for the database",
                        "Developed social login for Solana Wallet Adapter",
                        "Built a bot for discord using Discord.js",
                        "Integration of TreeShake APIs with Discord",
                    ]}
                    usedSkills={[
                        "Next.js",
                        " MongoDB",
                        "Node.js",
                        "solana/web3.js",
                        "Prisma",
                        "Redux.js",
                    ]}
                    icon={faCode}
                />
                <ListItem
                    title={"Coldbrew - Frontend Developer - Degen Legends"}
                    when="Oct 2022 - Nov 2022 · 2 mos"
                    text={
                        <p>
                            Degen Legends, known formerly as 3D Gamers Guild,
                            was formed by a collective of pro gamers & content
                            creators, Web 3 crypto natives, and NFT degens here
                            to build a new era of Web 3 gaming culture on the
                            Solana blockchain.
                        </p>
                    }
                    performedActivitiesa={[
                        "Developed the entire front of their homepage using React and Tailwind",
                    ]}
                    usedSkills={["React.js"]}
                    icon={faCode}
                />
                <ListItem
                    title={"Freelancer - Blockchain Engineer - Solana"}
                    when="Dec 2021 - Present · 1 yr"
                    text={
                        <p>
                            Solana is a decentralized blockchain built to enable
                            scalable, user-friendly apps for the world.
                        </p>
                    }
                    performedActivitiesa={[
                        "Helped more than 14 entrepreneurs/artists to launch NFT collections",
                        "Uploud of art to the blockchain",
                        "Developed mint platforms with smart contract and whitelisting systems",
                    ]}
                    usedSkills={["React.js", "Next.js", "Metaplex Protocol"]}
                    icon={faCode}
                />
                <ListItem
                    title={
                        "Software Engineer | Community Outreach - Foton Tech"
                    }
                    when="Jan 2021 - Dec 2021 · 1 yr"
                    text={
                        <p>
                            Foton is a community for Brazilian Software
                            Engineers. We connect our members to Silicon Valley
                            startups.
                        </p>
                    }
                    performedActivitiesa={[
                        "Actively prospecting new partnerships for web/mobile development endeavors within our community (web scraping with python)",
                        "built an automation (Python and Selenium) to approach potential partners on twitter with a response rate of approximately 20%",
                        "Frontend developer",
                    ]}
                    usedSkills={["React.js", "Next.js", "Python"]}
                    icon={faCode}
                />

                {/* Initial hidden exp start */}
                <Disclosure>
                    {({ open }) => (
                        <div className="grid grid-cols-1">
                            <Disclosure.Button
                                className={`py-5 ${
                                    open ? "row-start-2" : "row-start-1"
                                }`}
                            >
                                {open ? "Hide" : "View all "}
                            </Disclosure.Button>
                            <Transition
                                enter="transition duration-100 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                <Disclosure.Panel className="grid grid-cols-1 gap-3">
                                    <ListItem
                                        title={
                                            "ISR Engenharia  - Engineering Manager"
                                        }
                                        when="Mar 2020 - Sep 2020 · 7 mos"
                                        text={
                                            <p>
                                                ISR is an electrical engineering
                                                consulting firm whose main
                                                activities are electrical
                                                installations and energy
                                                efficiency studies.
                                            </p>
                                        }
                                        performedActivitiesa={[
                                            "Construction of an application to study energy efficiency using Google Apps Script and google sheets",
                                            "Energy efficiency studies using Python",
                                            "Photovoltaic projects with AutoCAD",
                                        ]}
                                        usedSkills={[
                                            "Python",
                                            " MongoDB",
                                            "Google Apps Script",
                                            "VBA",
                                        ]}
                                        icon={faCode}
                                    />
                                    <ListItem
                                        title={
                                            "CELESC Distribuição - Engineering Intern"
                                        }
                                        when="Mar 2018 - Mar 2019 · 1 yr 1 mo"
                                        text={
                                            <p>
                                                Centrais Elétricas de Santa
                                                Catarina S.A. - Celesc, is a
                                                mixed-capital company that has
                                                been operating since 1955 in the
                                                areas of energy generation,
                                                transmission and distribution.
                                                During this period, it
                                                consolidated itself as one of
                                                the largest companies in the
                                                Brazilian electric sector, with
                                                national and international
                                                recognition for the quality of
                                                its services and for its actions
                                                in the technical, economic,
                                                environmental and social fields.
                                            </p>
                                        }
                                        performedActivitiesa={[
                                            "Developed the entire front of their homepage using React and Tailwind",
                                        ]}
                                        usedSkills={["React.js"]}
                                        icon={faCode}
                                    />

                                    <ListItem
                                        title={
                                            "Electrical Engineer - Vento Sul | UFSC Solar Boat Team"
                                        }
                                        when="Jan 2021 - Dec 2021 · 11 mos"
                                        text={
                                            <p>
                                                UFSC Vento Sul Team is a
                                                Volunteer project for solar
                                                powered boat competitions. Team
                                                5x champion of Desafio Solar
                                                Brasil and 7th place in Dong
                                                Solar 2012 (worldwide).
                                            </p>
                                        }
                                        performedActivitiesa={[
                                            "Worked on a telemetry system, using arduino programmed in C and radio waves to carry out communication between the devices on the boat on the high seas and the team on land in real time, making decision making faster",
                                            "Worked on the development of the Battery Management System (BMS), using 2 arduinos nano programmed in C and communicating with each other, for the load management and security system of a battery bank composed of 6 LiFePO4 cells",
                                        ]}
                                        usedSkills={["C", "C++", "Arduino"]}
                                        icon={faCode}
                                    />
                                </Disclosure.Panel>
                            </Transition>
                        </div>
                    )}
                </Disclosure>
            </ul>
        </section>
    );
}

export default Experience;
