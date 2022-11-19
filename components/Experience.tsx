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
                <ListItem title={"ColdBrew"} text={"Frontend"} icon={faCode} />
                <ListItem title={"Backend"} text={"Node"} icon={faCode} />
                <ListItem title={"Blockchain"} text={"Solana"} icon={faCode} />
                <ListItem title={"Automation"} text={"Python"} icon={faCode} />
            </ul>
        </section>
    );
}

export default Experience;
