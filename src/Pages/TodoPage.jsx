import React from "react";
import { useState } from "react";
import Todolist from "../components/Todolist";

export default function TodoPage() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const addTodo = () => {
    if (input.trim() == "") {
      return;
    }
    setTodos([...todos, { text: input }]);
    setInput("");
    console.log(todos);
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
            {todos.map((t, idx) => (
              <li key={idx}>{t.text}</li>
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
        </div>
      </div>
    </>
  );
}
