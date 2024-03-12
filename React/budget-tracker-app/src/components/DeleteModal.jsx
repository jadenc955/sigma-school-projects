import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTransactions } from "../userSlice";

export default function DeleteModal({ transaction }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const deleteTransaction = () => {
    handleClose();
    dispatch(deleteTransactions(transaction.id));
  };

  return (
    <>
      <Button
        variant="danger"
        onClick={handleShow}
        className="ps-2 my-2"
        style={{
          position: "absolute",
          top: "-4px",
          right: "50px",
          fontSize: "12px",
        }}
      >
        <i className="bi bi-trash3 ps-1"></i>
      </Button>

      <Modal show={show} onHide={handleClose} style={{ color: "black" }}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this transaction?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={deleteTransaction}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
