import React, { ReactNode } from "react";

interface skillProps {
    children?: ReactNode;
    key?: React.Key;
}

function Skill({ children, key }: skillProps) {
    return (
        <div
            key={key}
            className="bg-[#8257E5] hover:bg-[#996DFF] text-white px-4 py-2 rounded-lg"
        >
            <p className="text-center">{children}</p>
        </div>
    );
}

export default Skill;
