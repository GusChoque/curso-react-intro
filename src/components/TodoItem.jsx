import React from "react";
import { TbCircleCheck, TbCircleX } from "react-icons/tb";

function TodoItem({ text, completed, onComplete, onDelete }) {
  return (
    <li
      className={`relative m-4 flex flex-row items-center justify-center border-2 rounded-lg todoitem ${
        completed && "bg-slate-400 border-slate-400"
      }`}
    >
      <div
        className={`absolute left-0 p-2 font-bold ${
          completed && "text-white fill-green-100"
        }`}
        onClick={onComplete}
      >
        <TbCircleCheck
          size={25}
          className={`hover:text-green-500 hover:scale-125 duration-300 ${
            completed && "fill-green-500 hover:text-white"
          }`}
        />
      </div>

      <p className={`p-2 ${completed && "line-through"}`}>{text}</p>

      <div
        className="absolute -right-6 -top-6 p-2 font-bold close"
        onClick={onDelete}
      >
        <TbCircleX
          size={30}
          className="fill-white hover:text-red-500 hover:scale-125 hover:rotate-180 hover:fill-red-100 duration-300"
        />
      </div>
    </li>
  );
}

export default TodoItem;
