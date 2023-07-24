import React from "react";

function NewTodo() {
  return (
    <div className="newtodo-section">
      <h1 className="p-2 m-4 font-semibold text-2xl text-center newtodo-title">Create new tasks here ↓</h1>
      <div className="flex flex-row input-section">
        <input
          type="text"
          className="border-2 rounded-md p-2 m-2 newtodo-input"
          placeholder="Create a new task"
        />
        <div className="border-2 rounded-md p-2 my-2 inline-block newtodo-button">
          +
        </div>
      </div>
    </div>
  );
}

export default NewTodo;
