import { useState } from "react";
import Todolist from "../components/Todolist";
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
    <div>
      <Todolist todos={todos} setTodos={setTodos} />
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1, textAlign: "center" }}>
          <h1>In Progress</h1>
          <input
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Type a task"
          />
          <button className="add-button" onClick={addTodo}>
            + / Add
          </button>
          <ul>
            {todos
              .filter((t) => !t.completed)
              .map((t, idx) => (
                <li className="in-progress-todo" key={idx}>
                  <input
                    type="checkbox"
                    checked={t.completed}
                    onChange={() => toggleTodo(idx)}
                  />
                  {t.text}
                  <button
                    onClick={() => removeTodo(idx)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      color: "red",
                      fontSize: "16px",
                    }}
                  >
                    🗑️
                  </button>
                </li>
              ))}
          </ul>
        </div>
        <div
          style={{
            width: "5px",
            height: "calc(91vh)",
            background: "black",
          }}
        ></div>
        <div style={{ flex: 1, textAlign: "center" }}>
          <h1>Completed</h1>
          <ul>
            {todos
              .filter((t) => t.completed)
              .map((t, idx) => (
                <li key={idx}>
                  <input
                    type="checkbox"
                    checked={t.completed}
                    onChange={() => toggleTodo(idx)}
                  />
                  <s>{t.text}</s>
                  <button
                    onClick={() => removeTodo(idx)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      color: "red",
                      fontSize: "16px",
                    }}
                  >
                    🗑️
                  </button>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
