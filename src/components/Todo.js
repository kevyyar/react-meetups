import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo() {
    const [showModal, setShowModal] = useState(false);

    const deleteHandler = () => {
        setShowModal(true);
    }

    const closeModalHandler = () => {
        setShowModal(false);
    }

    const confirmModalHandler = () => {
        setShowModal(false);
    }

    return (
        <div className="card">
            <h2>TITLE</h2>
            <div className="actions">
                <button className="btn" onClick={deleteHandler}>Delete</button>
            </div>
            {showModal && <Backdrop onCloseModal={closeModalHandler} />}
            {showModal && <Modal onConfirmModal={confirmModalHandler} onCloseModal={closeModalHandler} />}
        </div>
    )
}

export default Todo;