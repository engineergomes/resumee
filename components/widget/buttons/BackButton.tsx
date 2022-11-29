// import { ArrowLeft } from "phosphor-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

interface BackButtonProps {
    onFormRestartRequested: () => void;
}

export function BackButton({ onFormRestartRequested }: BackButtonProps) {
    return (
        <>
            <button
                type="button"
                className="absolute left-5 top-5 hover:text-[#8257E5]"
                onClick={onFormRestartRequested}
            >
                <FontAwesomeIcon icon={faArrowLeftLong} className="h-4 w-4" />
            </button>
        </>
    );
}
