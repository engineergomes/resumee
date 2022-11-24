import { faBrain } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Skill from "./Skill";

function Knowledges() {
    const knowloges = [
        "React",
        "Next",
        "TypeScript",
        "JavaScript",
        "Tailwind",
        "Node",
        "MongoDB",
        "Prisma",
        "Python",
        "C",
        "C++",
    ];
    return (
        <section className="flex flex-col px-4 gap-y-4">
            <div className="flex items-center space-x-2">
                <FontAwesomeIcon
                    className="h-8 w-8 text-[#8257E5]"
                    icon={faBrain}
                />
                <h1 className="text-center text-3xl font-semibold">
                    Knowloges
                </h1>
            </div>
            <div className="flex flex-wrap px-8 py-5  gap-3 rounded-xl sm:w-[calc(100%-4rem)] justify-self-center">
                {knowloges.map((item, index) => (
                    <Skill key={index}>{item}</Skill>
                ))}
            </div>
        </section>
    );
}

export default Knowledges;
