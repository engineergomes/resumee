// import { X } from "phosphor-react";
import { Popover } from "@headlessui/react";

export function CloseButton() {
    return (
        <Popover.Button className="absolute right-4 top-5">
            {/* <X className="w-4 h-4" weight="bold" /> */}
        </Popover.Button>
    );
}
