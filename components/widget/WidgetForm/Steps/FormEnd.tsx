import { CloseButton } from "../../CloseButton";
import { BackButton } from "../BackButton";

interface FormEndProps {
  onFormRestartRequested: () => void;
}

export function FormEnd({ onFormRestartRequested }: FormEndProps) {
  return (
    <>
      <header className="flex text-xl leading-6 items-center gap-2">
        <CloseButton />
      </header>
      <main className="flex flex-col gap-y-6 items-center mt-6 mb-8">
        <div className="flex flex-col gap-y-2 items-center">
          <img
            src="/success.svg"
            alt="green check mark"
            className=" h-10 w-10"
          />
          <p>Thank you!</p>
        </div>
        <button
          className="flex px-6 py-2 rounded items-center bg-[#27272A] hover:bg-[#28282F]"
          onClick={onFormRestartRequested}
        >
          Send another
        </button>
      </main>
    </>
  );
}
