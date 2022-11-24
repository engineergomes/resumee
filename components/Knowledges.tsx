import { faBrain } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
            <div className="flex flex-wrap gap-3">
                {knowloges.map((item, index) => (
                    <div
                        key={index}
                        className="bg-[#8257E5] hover:bg-[#996DFF] text-white px-4 py-2 rounded-lg"
                    >
                        <p className="text-center">{item}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Knowledges;
