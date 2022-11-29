import { useState } from "react";
import LookingForDevs from "./LookingForDevs";
import { FormStart } from "./FormStart";

export type onLookingForDevsChangedType = boolean;
// export type onIdeaChangedType = boolean;
// export type onThoughtChangedType = boolean;
export type onFormEndRequestedType = boolean;
export type onScreenshotTookType = string;
export type screenshotType = string | null;
// export type onFormSendRequest = string

export function WidgetForm() {
    const [isLookingforDevs, setIsLookingforDevs] = useState(false);

    function handleRestartForm() {
        setIsLookingforDevs(false);
    }

    return (
        <>
            <div className="bg-[#F4F4F5] dark:bg-[#18181B] p-4 rounded-2xl bottom-24 flex flex-col items-center gap-y-1 relative min-w-[336px] min-h-[264px] drop-shadow-xl">
                {isLookingforDevs ? (
                    <LookingForDevs
                        onFormRestartRequested={handleRestartForm}
                    />
                ) : (
                    <FormStart onLookingForDevsChanged={setIsLookingforDevs} />
                )}
                <footer className="text-xs dark:text-[#E1E1E6]  text-[#27272A]">
                    Made by @engineergomes{" "}
                </footer>
            </div>
        </>
    );
}
