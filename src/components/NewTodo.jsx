import React from "react";

function NewTodo() {
  return (
    <div>
      <input type="text" className="newtodo" placeholder="Create a new task" />
      <button className="newtodo-button">+</button>
    </div>
  );
}

export default NewTodo;
