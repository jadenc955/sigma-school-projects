import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addTransactions } from "../userSlice";

export default function AddTransaction() {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [isExpense, setIsExpense] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function addTransaction(event) {
    event.preventDefault();
    dispatch(
      addTransactions({
        id: Date.now(),
        description,
        amount: isExpense ? -parseInt(amount) : parseInt(amount),
        isExpense,
      })
    );
    navigate("/home");
  }

  return (
    <Container>
      <h1 className="my-3">Add Todo</h1>
      <Form onSubmit={addTransaction}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Description</Form.Label>
          <Form.Control
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            placeholder="Enter transaction description"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Amount</Form.Label>
          <Form.Control
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            min={0}
            required
          />
        </Form.Group>
        <Form.Check
          type="checkbox"
          id="isExpense"
          label="Is it an expense?"
          checked={isExpense}
          onChange={(e) => setIsExpense(e.target.checked)}
          className="mb-3"
        />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
