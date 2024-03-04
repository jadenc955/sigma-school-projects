import { Button, Container, Form } from "react-bootstrap";
import { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { useNavigate, useLocation } from "react-router-dom";

export default function EditTodo() {
  // Destructures the todo object that was passed from Home component
  const { state } = useLocation();
  const { todo } = state;

  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
  const [completed, setCompleted] = useState(todo.completed);
  const setTodos = useContext(TodoContext).setTodos;
  const todos = useContext(TodoContext).todos;
  const navigate = useNavigate();

  function updateTodo() {
    let editedTodo = todos.find((el) => el.id === todo.id);
    editedTodo = {
      id: todo.id,
      title: title,
      description: description,
      completed: completed,
    };

    let indexToDelete = todos.findIndex((el) => el.id === todo.id);
    todos.splice(indexToDelete, 1, editedTodo);
    setTodos(todos);
    navigate("/");
  }

  return (
    <Container>
      <h1 className="my-3">Edit Todo</h1>
      <Form
        onSubmit={(evt) => {
          evt.preventDefault();
          updateTodo();
        }}
      >
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Get software developer job"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            as="textarea"
            rows={3}
            placeholder={`1. Create amazing projects\n2. Apply to companies\n3. Ace interviews`}
            required
          />
        </Form.Group>
        <Form.Check
          type="checkbox"
          id="completed"
          label="Mark as completed"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
          className="mb-3"
        />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
