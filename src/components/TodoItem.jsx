import React from "react";

function TodoItem({ text, completed }) {
  return <li className="todoitem">
    <div className={``}>V</div>
    {text}
    <div className="close">X</div>
    </li>;
}

export default TodoItem;
