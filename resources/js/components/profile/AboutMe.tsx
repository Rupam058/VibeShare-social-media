import { faCheck, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function AboutMe({
    description,
    self,
    onChange,
}: {
    description: string | null;
    self: boolean;
    onChange: (v: string) => void;
}) {
    const [editing, setEditing] = useState(false);
    const [editDescription, setEditDescription] = useState("");

    function toggle() {
        if (editing) {
            onChange(editDescription);
        } else {
            setEditDescription(description!);
        }

        setEditing(!editing);
    }

    return (
        <div className="bg-white rounded-md p-6 border">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">About Me</h2>
                {self ? (
                    <button
                        onClick={toggle}
                        className="cursor-pointer flex gap-2 items-center"
                    >
                        <FontAwesomeIcon icon={editing ? faCheck : faPen} />
                        {editing ? "Save" : "Edit"}
                    </button>
                ) : null}
            </div>

            <div className="mt-2">
                {editing ? (
                    <textarea
                        value={editDescription}
                        onChange={(e) => setEditDescription(e.target.value)}
                        className="w-full border rounded-md p-2"
                    ></textarea>
                ) : (
                    <p>{description}</p>
                )}
            </div>
        </div>
    );
}

export default AboutMe;
