import { CloseButton } from "./buttons/CloseButton";
import { onLookingForDevsChangedType } from ".";
import { faCode, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface FormStartProps {
    onLookingForDevsChanged: (type: onLookingForDevsChangedType) => void;
}

export function FormStart({ onLookingForDevsChanged }: FormStartProps) {
    return (
        <>
            <header className="flex text-xl leading-6 items-center dark:text-[#E1E1E6]  text-[#27272A]">
                <p>How can we help?</p>
                <CloseButton />
            </header>

            <main className="grid  gap-x-2 items-center mt-10 mb-10">
                <button
                    className="flex flex-col gap-3 items-center justify-center bg-[#E4E4E7] hover:bg-[#D4D4D8] dark:bg-[#27272A]  dark:hover:bg-[#3F3F46] h-36 w-36 rounded-lg p-5 text-[#8257E5] hover:ring-2 hover:ring-[#8257E5] ring-offset-4 ring-offset-[#F4F4F5] dark:ring-offset-[#18181B]"
                    onClick={() => onLookingForDevsChanged(true)}
                >
                    <FontAwesomeIcon
                        icon={faCode}
                        className="h-6 w-6 lg:h-16 lg:w-16"
                    />
                    <p className="text-md font-bold ">Looking for devs?</p>
                </button>
            </main>
        </>
    );
}
