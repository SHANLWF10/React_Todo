import { useState, useEffect } from "react";
import "./App.css";
import New from "./components/New";

function App() {
  const [todos, setTodos] = useState(() => {
    // Retrieve todos from local storage if available
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    // Save todos to local storage whenever the todos state changes
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function show() {
    document.getElementById("form").classList.toggle("hidden");
  }

  function addTodo(newTodo) {
    setTodos([...todos, newTodo]);
  }

  function deleteTodo(index) {
    setTodos(todos.filter((_, i) => i !== index));
  }

  function markAsDone(index) {
    const newTodos = todos.slice();
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  }

  function changeBg(){
      document.getElementById("main").classList.toggle("bg-zinc-700")
  }

  return (
    <div className="min-w-full min-h-full overflow-hidden">
      <nav
        className="w-full h-14 border-2
      border-b-red-300 bg-slate-200 flex items-center justify-between pl-6 pr-6 absolute"
      >
        <h2 className="font-sans font-lg text-xl">To-Do</h2>
        <div>
          <button
            onClick={show}
            className="w-14 border border-black rounded-sm text-black hover:bg-blue-400 hover:text-white
              hover:border-blue-400"
          >
            Add
          </button>
          <button
            className="w-16 border border-black rounded-sm text-black ml-6 hover:bg-red-400 hover:text-white
              hover:border-red-400"
              onClick={changeBg}
          >
            Theme
          </button>
        </div>
      </nav>
      <New addTodo={addTodo} />
      <main className="min-w-full min-h-dvh bg-slate-300 pt-14" id="main">
        {todos.map((todo, index) => (
          <div key={index} className="p-2 m-2 border rounded bg-white">
            <h3 style={{ textDecoration: todo.done ? "line-through" : "none" }}>
              {todo.title}
            </h3>
            <p style={{ textDecoration: todo.done ? "line-through" : "none" }}>
              {todo.text}
            </p>
            <button
              onClick={() => deleteTodo(index)}
              className="w-20 h-10 border rounded bg-red-400 text-white"
            >
              Delete
            </button>
            <button
              onClick={() => markAsDone(index)}
              className="w-20 h-10 border rounded bg-green-400 text-white ml-2"
            >
              Done
            </button>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
