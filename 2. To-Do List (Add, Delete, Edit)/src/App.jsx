import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  });

  const [editing, setEditing] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    if (!task.trim()) {
      return;
    }

    if (editing) {
      setTodos(todos.map((t) => (t.id === editing ? { ...t, text: task } : t)));
      setEditing(null);
    } else {
      setTodos([...todos, { id: Date.now(), text: task, done: false }]);
    }
    setTask("");
  };

  const handleDone = (id) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
    if (editing === id) {
      setEditing(null);
      setTask("");
    }
  };

  const handleEditTask = (id) => {
    const todo = todos.find((t) => t.id === id);
    setTask(todo.text);
    setEditing(id);
  };
  return (
    <div>
      <h1>Todo App</h1>
      <input
        value={task}
        type="text"
        placeholder="Enter Task..."
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAddTodo}>{editing ? "Update" : "Add Task"}</button>

      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            <span
              style={{ textDecoration: t.done ? "line-through" : "none" }}
              onClick={() => handleDone(t.id)}
            >
              {t.text}
            </span>
            <div>
              <button onClick={() => handleEditTask(t.id)}>Edit</button>
              <button onClick={() => deleteTodo(t.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
