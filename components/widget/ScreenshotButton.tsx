// import { Camera } from "phosphor-react";
// import html2canvas from "html2canvas";
import { useState } from "react";
import { Loading } from "./WidgetForm/Loading";
import { onScreenshotTookType, screenshotType } from "./WidgetForm";
// import { Trash } from "phosphor-react";

interface ScreenshotButtonProps {
    screenshot: screenshotType;
    onScreenshotTook: (type: onScreenshotTookType) => void;
}

export function ScreenshotButton({
    screenshot,
    onScreenshotTook,
}: ScreenshotButtonProps) {
    const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);
    const [screenshotTaken, setScreenshotTaken] = useState(false);

    async function handleTakeScreenshot() {
        setIsTakingScreenshot(true);
        // const canvas = await html2canvas(document.querySelector("html")!);
        // const base64Image = canvas.toDataURL("image/png");
        // onScreenshotTook(base64Image);
        setIsTakingScreenshot(false);
        setScreenshotTaken(true);
    }

    function deleteScreenshotRequest() {
        setScreenshotTaken(false);
    }
    return (
        <>
            {screenshotTaken ? (
                <button
                    type="button"
                    className="flex h-10 w-10 p-1 rounded bg-[#27272A] items-end justify-end"
                    style={{
                        backgroundImage: `url(${screenshot})`,
                        minWidth: "40px",
                    }}
                    onClick={deleteScreenshotRequest}
                >
                    {/* <Trash weight="fill" className="h-3 w-3" /> */}
                </button>
            ) : (
                <button
                    type="button"
                    className="flex h-10 w-10 p-2 rounded bg-[#27272A] items-center justify-center border border-transparent hover:border-violet-700"
                    onClick={handleTakeScreenshot}
                >
                    {isTakingScreenshot ? (
                        <Loading />
                    ) : (
                        ""
                        // <Camera size={24} weight="regular" />
                    )}
                </button>
            )}
        </>
    );
}
