import { Popover } from "@headlessui/react";
import { WidgetForm } from ".";
import Logo from "public/cold-brew-logo-dark.svg";
import Image from "next/image";

export function Widget() {
    return (
        <div className="fixed bottom-10 right-10 ">
            <Popover>
                <Popover.Panel>
                    <WidgetForm />
                </Popover.Panel>

                <Popover.Button className="bg-[#8257E5] rounded-full p-5 text-white items-center flex group fixed bottom-10 right-10 drop-shadow-xl">
                    <Image src={Logo} alt="logo" height={36} width={36} />
                    <span className="max-w-0 overflow-hidden group-hover:max-w-xs duration-700 whitespace-nowrap">
                        &nbsp;Hey there!
                    </span>
                </Popover.Button>
            </Popover>
        </div>
    );
}
