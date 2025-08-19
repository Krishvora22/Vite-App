import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const addTodo = () => {
    if (task.trim() === "") return;
    setTodos([...todos, { text: task, completed: false }]);
    setTask("");
  };

  const toggleTodo = (index) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="app">
      <h1>Todo List</h1>

      <div className="todo-input">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task..."
        />
        <button onClick={addTodo}>Add</button>
      </div>

      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className={todo.completed ? "completed" : ""}>
            <span onClick={() => toggleTodo(index)}>{todo.text}</span>
            <button className="delete-btn" onClick={() => deleteTodo(index)}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
