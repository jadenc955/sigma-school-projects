import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import './App.css'

// Component that adds & deletes items in the todo list
function TodoList({ todos, deleteTodo }) {
  return (
    <ul className="ps-0 mt-3">
      {todos.map((todo, index) => {
        return (
          <li key={index} className=" mb-3">
            <Button
              variant="danger"
              className="me-3 px-2 py-0"
              onClick={() => deleteTodo(index)}
            >
              X
            </Button>
            {todo}
          </li>
        );
      })}
    </ul>
  );
}

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  function addTodo() {
    setTodos([...todos, newTodo]);
    setNewTodo("");
  }

  function deleteTodo(index) {
    const arrayAfterDeletion = todos.filter((el, i) => i !== index);
    setTodos(arrayAfterDeletion);
  }

  return (
    <div className="m-3 parentContainer">
      <h1 className="mb-5 text-center">To Do List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(event) => setNewTodo(event.target.value)}
      />
      <Button variant="primary" className="ms-3" onClick={addTodo}>
        Add
      </Button>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
