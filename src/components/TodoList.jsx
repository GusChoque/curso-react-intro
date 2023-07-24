import React from "react";

function TodoList({ children }) {
  return <ul className="w-1/2 todo-list">{children}</ul>;
}

export default TodoList;
