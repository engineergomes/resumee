import { faCode, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ListItem from "./ListItem";

function Experience() {
    return (
        <section className="flex flex-col px-4 gap-4">
            <div className="flex items-center space-x-2">
                <FontAwesomeIcon className="h-8 w-8" icon={faBriefcase} />
                <h1 className="text-center text-3xl font-semibold">
                    Experience
                </h1>
            </div>

            <ul className="grid grid-cols-1 gap-3 grid-rows-4">
                <ListItem
                    title={"Coldbrew - Fullstack Engineer - TreeShake"}
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
                <ListItem title={"Automation"} text={"Python"} icon={faCode} />
            </ul>
        </section>
    );
}

export default Experience;
