import React, { useState } from "react";

function New({ addTodo }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  function cancel() {
    setTitle("");
    setText("");
    document.getElementById("form").classList.add("hidden");
  }

  function done() {
    if (title && text) {
      addTodo({
        title,
        text,
        done: false,
      });
      cancel();
    }
  }

  return (
    <>
      <div
        className="max-w-96 h-96 rounded-lg bg-slate-200 p-3 z-10 pt-10 absolute top-24 left-14 hidden"
        id="form"
      >
        <label htmlFor="title"></label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Title"
          className="w-80 h-8 border border-black rounded ml-2 p-1"
          maxLength={25}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="textArea"></label>
        <textarea
          name="text"
          placeholder="Text here..."
          id="textArea"
          className="w-80 h-40 border border-black rounded ml-2 mt-8 p-1"
          maxLength={150}
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <div className="w-full h-20 flex items-center justify-center">
          <button
            onClick={cancel}
            className="w-20 h-10 border rounded bg-red-400 text-white"
          >
            Cancel
          </button>
          <button
            className="w-20 h-10 border rounded ml-10 bg-blue-400 text-white"
            id="done"
            onClick={done}
          >
            Done
          </button>
        </div>
      </div>
    </>
  );
}

export default New;
