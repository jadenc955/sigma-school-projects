import { useState, useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import { TodoContext } from "../contexts/TodoContext";

export default function DeleteModal({todo}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const setTodos = useContext(TodoContext).setTodos;

  const deleteTodo = () => {
    handleClose();
    setTodos((prevTodos) =>
      prevTodos.filter((prevTodo) => prevTodo.id !== todo.id)
    );
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
