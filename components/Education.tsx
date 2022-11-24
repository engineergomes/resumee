import { faCode, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ListItem from "./ListItem";

function Education() {
    return (
        <section className="flex flex-col px-4 gap-4">
            <div className="flex items-center space-x-2">
                <FontAwesomeIcon
                    className="h-8 w-8 text-[#8257E5]"
                    icon={faGraduationCap}
                />
                <h1 className="text-center text-3xl font-semibold">
                    Education
                </h1>
            </div>

            <ul className="grid grid-cols-1 gap-3 ">
                <ListItem
                    title={"Electrical and Electronics Engineering"}
                    when="Mar 2014 - Mar 2020"
                    text={"Universidade Federal de Santa Catarina"}
                    icon={faCode}
                />
            </ul>
        </section>
    );
}

export default Education;
