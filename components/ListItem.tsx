import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface listItemProps {
    title: string;
    text: string;
    icon: IconDefinition;
}

function ListItem({ title, text, icon }: listItemProps) {
    return (
        <li className="grid grid-cols-[1fr,12fr]  bg-green-200 px-8 py-5 gap-x-4 gap-y-1 rounded-xl">
            <div className="flex itens-center justify-start">
                <FontAwesomeIcon icon={icon} className="lg:h-8 lg:w-8" />
            </div>

            <div className="flex itens-center h-full ">
                <h2 className="font-semibold text-xl ">{title}</h2>
            </div>
            <p className="col-start-2 text-justify text-[#44566C] font-medium">
                {text}
            </p>
        </li>
    );
}

export default ListItem;
