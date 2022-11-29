import { Popover } from "@headlessui/react";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function CloseButton() {
    return (
        <Popover.Button className="absolute right-5 top-5 hover:text-[#8257E5]">
            <FontAwesomeIcon icon={faX} className="h-4 w-4 " />
        </Popover.Button>
    );
}
