import React from "react";

function TodoCounter({ completed, total }) {
  return (
    <div>
      <h1 className="todotitle">Hello There!</h1>
      <h2 className="todocounter">
        {`${completed} of ${total} task completed!`}
      </h2>
    </div>
  );
}

export default TodoCounter;
