import React from "react";
import { useState } from "react";
import Todolist from "../components/Todolist";

export default function TodoPage() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: "Completed" },
    { id: 2, text: "Build a Todo App", completed: "Completed" },
    { id: 3, text: "Submit Assignment", completed: "Completed" },
  ]);
  return <Todolist todos={todos} setTodos={setTodos} />;
}
