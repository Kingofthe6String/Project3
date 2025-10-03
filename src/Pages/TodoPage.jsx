import { useState } from "react";
import "./../styles.css";

export default function TodoPage() {
  const [userInput, setUserInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (userInput.trim() === "") return;
    setTodos([...todos, { text: userInput, completed: false }]);
    setUserInput("");
  };

  const toggleTodo = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const removeTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-page-container">
      <div className="todo-column">
        <h2>In Progress</h2>
        <div className="todo-input-container">
          <input
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Type a task"
            className="todo-input"
          />
          <button className="add-button" onClick={addTodo}>
            + Add
          </button>
        </div>
        <ul className="todo-list">
          {todos
            .filter((t) => !t.completed)
            .map((t, idx) => (
              <li key={idx} className="todo-item">
                <input
                  type="checkbox"
                  checked={t.completed}
                  onChange={() => toggleTodo(idx)}
                />
                <span className="todo-text">{t.text}</span>
                <button
                  onClick={() => removeTodo(idx)}
                  className="delete-button"
                >
                  🗑️
                </button>
              </li>
            ))}
        </ul>
      </div>

      <div className="divider"></div>

      <div className="todo-column">
        <h2>Completed</h2>
        <ul className="todo-list">
          {todos
            .filter((t) => t.completed)
            .map((t, idx) => (
              <li key={idx} className="todo-item completed">
                <input
                  type="checkbox"
                  checked={t.completed}
                  onChange={() => toggleTodo(idx)}
                />
                <span className="todo-text">{t.text}</span>
                <button
                  onClick={() => removeTodo(idx)}
                  className="delete-button"
                >
                  🗑️
                </button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
