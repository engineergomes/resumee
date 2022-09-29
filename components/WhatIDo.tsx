import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

function WhatIDo() {
    return (
        <section className="px-4">
            <h1 className="text-center text-3xl font-semibold">What I do</h1>
            <div className="grid grid-cols-1 gap-3 grid-rows-4">
                <div className="grid grid-cols-[1fr,7fr] bg-green-200 px-4 py-5 gap-x-4 rounded-xl">
                    <FontAwesomeIcon icon={faCode} />
                    <h2>Frontend</h2>
                    <p className="col-start-2">React</p>
                    <p className="col-start-2">Next.js</p>
                    <p className="col-start-2">React</p>
                </div>
                <div className="grid grid-cols-[1fr,7fr] bg-green-200 px-4 py-5 gap-4 rounded-xl">
                    <FontAwesomeIcon icon={faCode} />
                    <h2>Blockchain</h2>
                    <p className="col-start-2">Solana</p>
                </div>
                <div className="grid grid-cols-[1fr,7fr] bg-green-200 px-4 py-5 gap-4 rounded-xl">
                    <FontAwesomeIcon icon={faCode} />
                    <h2>Backend</h2>
                    <p className="col-start-2">Node.js</p>
                </div>
                <div className="grid grid-cols-[1fr,7fr] bg-green-200 px-4 py-5 gap-4 rounded-xl">
                    <FontAwesomeIcon icon={faCode} />
                    <h2>Automations</h2>
                    <p className="col-start-2">Python</p>
                </div>
            </div>
        </section>
    );
}

export default WhatIDo;
