import { useState } from "react";

const EditStudent = ({ student }) => {
    const [name, setName] = useState(student.name);

    const updateName = async (e) => {
        e.preventDefault();
        try {
            const body = { name };
            await fetch(
                `http://localhost:8000/api/v1/students/${student.id}`,
                {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
                }
            );
            window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <>
        <button
            type="button"
            className="btn btn-warning"
            data-toggle="modal"
            data-target={`#id${student.id}`}
        >
            Edit
        </button>
        <div
            className="modal"
            id={`id${student.id}`}
            onClick={() => setName(student.name)}
        >
            <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                <h4 className="modal-title">Edit student name</h4>
                <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    onClick={() => setName(student.name)}
                >
                </button>
                </div>
                <div className="modal-body">
                <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                </div>
                <div className="modal-footer">
                <button
                    type="button"
                    className="btn btn-warning"
                    data-dismiss="modal"
                    onClick={e => updateName(e)}
                >
                    Edit
                </button>
                <button
                    type="button"
                    className="btn btn-danger"
                    data-dismiss="modal"
                    onClick={() => setName(student.name)}
                >
                    Close
                </button>
                </div>
            </div>
            </div>
        </div>
        </>
    );
};

export default EditStudent;