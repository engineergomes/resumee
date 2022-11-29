// import { ArrowLeft } from "phosphor-react";

interface BackButtonProps {
    onFormRestartRequested: () => void;
}

export function BackButton({ onFormRestartRequested }: BackButtonProps) {
    return (
        <>
            <button
                type="button"
                className="absolute left-4 top-5"
                onClick={onFormRestartRequested}
            >
                {/* <ArrowLeft className="w-4 h-4" weight="bold" /> */}
            </button>
        </>
    );
}
