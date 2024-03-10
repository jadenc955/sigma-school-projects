import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTodos } from "../userSlice";

export default function DeleteModal({ todo }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const deleteTodo = () => {
    handleClose();
    dispatch(deleteTodos(todo.id));
  };

  return (
    <>
      <Button variant="danger" onClick={handleShow} className="ms-2 my-2">
        <i className="bi bi-trash3"></i>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this todo?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={deleteTodo}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
