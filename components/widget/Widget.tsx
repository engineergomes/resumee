// import { ChatTeardropDots } from "phosphor-react";
// import { useState } from "react";
import { Popover } from "@headlessui/react";
import { WidgetForm } from "./WidgetForm";
import Logo from "public/cold-brew-logo-dark.svg";
import Image from "next/image";

export function Widget() {
    // const [isWidgetOpen, setIsWidgetOpen] = useState(false);

    // function toggleWidgetVisibility() {
    //   setIsWidgetOpen(!isWidgetOpen);
    // }

    return (
        <div className="fixed bottom-10 right-10 ">
            <Popover>
                <Popover.Panel>
                    {" "}
                    <WidgetForm />{" "}
                </Popover.Panel>

                <Popover.Button className="bg-violet-700 rounded-full p-5 text-white items-center flex group fixed bottom-10 right-10">
                    <Image src={Logo} alt="logo" height={36} width={36} />
                    <span className="max-w-0 overflow-hidden group-hover:max-w-xs duration-700">
                        &nbsp;Feedback
                    </span>
                </Popover.Button>
            </Popover>
            {/* {isWidgetOpen ? "TA ABERTO" : ""}
      <button
        onClick={toggleWidgetVisibility}
        className="bg-green-400 rounded-full p-3 text-white flex items-center group"
      >
        <ChatTeardropDots className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs duration-700">
          &nbsp;Feedback
        </span>
      </button> */}
        </div>
    );
}
