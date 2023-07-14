import { useState } from "react";
import NewTodo from "./NewTodo";
import TodoCounter from "./TodoCounter";
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";
import TodoSearch from "./TodoSearch";

const defaultTodos = [
  {
    text: "cortar cebolla",
    completed: true,
  },
  {
    text: "hola",
    completed: false,
  },
  {
    text: "adios",
    completed: false,
  },
  {
    text: "rotoso",
    completed: false,
  },
  {
    text: "cocinaaaa",
    completed: true,
  },
  {
    text: "marihuena",
    completed: false,
  },
];
function Main() {
  const [searchValue, setSearchValue] = useState("");
  const [todos, setTodos] = useState(defaultTodos);

  const completedTodos = todos.filter(
    // El doble !! convierte el resultado a booleano
    (todo) => !!todo.completed
  ).length;
  const totalTodos = todos.length;

  const searchedTodo = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLocaleLowerCase();

    return todoText.includes(searchText);
  });

  return (
    <div className="main-container">
      <div className="newtask-section">
        <NewTodo />
      </div>
      <div className="todo-section">
        <TodoCounter completed={completedTodos} total={totalTodos} />

        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

        <TodoList>
          {searchedTodo.map((todo) => {
            return (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
              />
            );
          })}
        </TodoList>
      </div>
    </div>
  );
}

export default Main;
