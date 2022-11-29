import { useState } from "react";
import { CloseButton } from "../CloseButton";
import { Problem } from "./Steps/Problem";
import { FormStart } from "./Steps/FormStart";
import { Idea } from "./Steps/Idea";
import { Thought } from "./Steps/Thought";
import { FormEnd } from "./Steps/FormEnd";

export type onProblemChangedType = boolean;
export type onIdeaChangedType = boolean;
export type onThoughtChangedType = boolean;
export type onFormEndRequestedType = boolean;
export type onScreenshotTookType = string;
export type screenshotType = string | null;
// export type onFormSendRequest = string

export function WidgetForm() {
  const [isProblem, setIsProblem] = useState(false);
  const [isIdea, setIsIdea] = useState(false);
  const [isThought, setIsThought] = useState(false);
  const [isFormEnd, setIsFormEnd] = useState(false);
  const [screenshot, setScreenshot] = useState<string | null>(null);

  function handleRestartForm() {
    setIsIdea(false);
    setIsProblem(false);
    setIsThought(false);
    setIsFormEnd(false);
  }

  return (
    <>
      <div className="bg-zinc-900 p-4 rounded-2xl mb-20 flex flex-col items-center gap-y-1 relative min-w-[336px] min-h-[264px]">
        {(isProblem || isIdea || isThought) && isFormEnd ? (
          <FormEnd onFormRestartRequested={handleRestartForm} />
        ) : isProblem ? (
          <Problem
            onFormRestartRequested={handleRestartForm}
            onFormEndRequested={setIsFormEnd}
            onScreenshotTook={setScreenshot}
            screenshot={screenshot}
            // onFormSendRequest={setComment}
          />
        ) : isIdea ? (
          <Idea
            onFormRestartRequested={handleRestartForm}
            onFormEndRequested={setIsFormEnd}
            onScreenshotTook={setScreenshot}
            screenshot={screenshot}
          />
        ) : isThought ? (
          <Thought
            onFormRestartRequested={handleRestartForm}
            onFormEndRequested={setIsFormEnd}
            onScreenshotTook={setScreenshot}
            screenshot={screenshot}
          />
        ) : (
          <FormStart
            onProblemChanged={setIsProblem}
            onIdeaChanged={setIsIdea}
            onThoughtChanged={setIsThought}
          />
        )}
        <footer className="text-xs">Made by @engineergomes </footer>
      </div>
    </>
  );
}
