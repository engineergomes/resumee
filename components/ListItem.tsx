import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";

interface listItemProps {
    title: string;
    text: ReactNode;
    icon: IconDefinition;
    performedActivitiesa?: string[];
    usedSkills?: string[];
    when?: string;
}

function ListItem({
    title,
    text,
    icon,
    performedActivitiesa,
    usedSkills,
    when,
}: listItemProps) {
    return (
        <li className="grid grid-cols-[1fr,12fr]  bg-green-200 px-8 py-5 gap-x-4 gap-y-1 rounded-xl">
            <div className="flex itens-center justify-start">
                <FontAwesomeIcon icon={icon} className="lg:h-8 lg:w-8" />
            </div>

            <div className="flex itens-center h-full ">
                <h2 className="font-semibold text-xl ">{title}</h2>
            </div>
            <div className="flex flex-col gap-4 col-start-2 text-justify text-[#44566C] font-medium">
                <div>{when}</div>
                <div>{text}</div>

                {/* Performed Activities */}
                {performedActivitiesa ? (
                    <div className="flex flex-col gap-4">
                        <p>Performed activities:</p>

                        <ul className="list-disc ml-10">
                            {performedActivitiesa?.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <></>
                )}
                {/* Used Skills */}
                {usedSkills ? (
                    <div className="flex flex-col gap-4">
                        <p>Skills:</p>

                        <ul className="flex gap-3">
                            {usedSkills?.map((item, index) => (
                                <li
                                    key={index}
                                    className="bg-yellow-200 px-4 py-2 rounded-lg"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </li>
    );
}

export default ListItem;
