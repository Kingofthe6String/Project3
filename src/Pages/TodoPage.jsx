import React from "react";
import { useState } from "react";
import Todolist from "../components/Todolist";
import { FaTrash } from "react-icons/fa";

export default function TodoPage() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const addTodo = () => {
    if (input.trim() == "") {
      return;
    }
    setTodos([...todos, { text: input, completed: false }]);
    setInput("");
  };
  const toggleTodo = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };
  return (
    <>
      <Todolist todos={todos} setTodos={setTodos} />
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1, textAlign: "center" }}>
          <h1>In Progress</h1>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a task"
          />
          <button onClick={addTodo}>+ / Add</button>
          <ul>
            {todos
              .filter((t) => !t.completed)
              .map((t, idx) => (
                <li key={idx}>
                  <input
                    type="checkbox"
                    checked={t.completed}
                    onChange={() => toggleTodo(idx)}
                  />
                  {t.text}
                </li>
              ))}
          </ul>
        </div>
        <div
          style={{
            width: "5px",
            height: "calc(100vh - 57px)",
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
                    onClick={() => deleteTodo(idx)}
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
    </>
  );
}
