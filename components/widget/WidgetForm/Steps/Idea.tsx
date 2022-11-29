import { CloseButton } from "../../CloseButton";
import { BackButton } from "../BackButton";
// import { Camera } from "phosphor-react";
import { ScreenshotButton } from "../../ScreenshotButton";
import { SendFormButton } from "../SendFormButton";
import {
    onFormEndRequestedType,
    onScreenshotTookType,
    screenshotType,
    // onFormSendRequest
} from "..";
import { FormEvent, useState } from "react";

interface IdeaProps {
    onFormRestartRequested: () => void;
    onFormEndRequested: (type: onFormEndRequestedType) => void;
    onScreenshotTook: (type: onScreenshotTookType) => void;
    // onFormSendRequest: onFormSendRequest
    screenshot: screenshotType;
}

export function Idea({
    onFormRestartRequested,
    onFormEndRequested,
    onScreenshotTook,
    // onFormSendRequest,
    screenshot,
}: IdeaProps) {
    const [comment, setComment] = useState("");

    function handleSubmitForm(event: FormEvent) {
        event.preventDefault();
        onFormEndRequested(true);
        console.log({ screenshot, comment });
    }
    return (
        <>
            <header className="flex text-xl leading-6 items-center gap-2">
                <BackButton onFormRestartRequested={onFormRestartRequested} />
                <img src="/bug.svg" alt="Insect" className=" h-4 w-4" />
                <p>Idea</p>
                <CloseButton />
            </header>
            <main className="w-full h-full ">
                <form
                    onSubmit={handleSubmitForm}
                    className="flex flex-col my-4 w-full items-center gap-2"
                >
                    <textarea
                        className="min-w-[304px] w-full min-h-[112px] h-full rounded border border-solid border-[#52525B] bg-inherit resize-none text-[#A1A1AA] overflow-auto focus:border-violet-700 focus:ring-violet-700 focus:outline-none scrollbar-thumb-zinc-700 scrollbar-thin scrollbar-track-transparent"
                        placeholder="Tell us more!"
                        onChange={(event) => setComment(event.target.value)}
                    ></textarea>
                    <div className="flex gap-2 w-full">
                        <ScreenshotButton
                            onScreenshotTook={onScreenshotTook}
                            screenshot={screenshot}
                        />
                        <SendFormButton
                            comment={comment}
                            onFormEndRequested={onFormEndRequested}
                        />
                    </div>
                </form>
            </main>
        </>
    );
}
