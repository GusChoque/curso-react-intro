import React from "react";

function TodoCounter({ completed, total }) {
  return (
    <div className="m-2 w-full todocounter-section">
      <h1 className="p-2 text-7xl font-bold text-center todotitle">Hello There!</h1>
      <h2 className="font-semibold text-3xl text-center todocounter">
        {total === 0 ?
        `No tasks yet`
        : completed === total ?
        `You are free to go now... See you tomorow`
        :
        `You have ${completed} of ${total} task completed!`
        }
      </h2>
    </div>
  );
}

export default TodoCounter;
