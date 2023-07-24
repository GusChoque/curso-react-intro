import { fromJSON } from "postcss";
import { useState } from "react";
import NewTodo from "./NewTodo";
import TodoCounter from "./TodoCounter";
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";
import TodoSearch from "./TodoSearch";

// const defaultTodos = [
//   {
//     text: "cortar cebolla",
//     completed: true,
//   },
//   {
//     text: "hola",
//     completed: false,
//   },
//   {
//     text: "adios",
//     completed: false,
//   },
//   {
//     text: "rotoso",
//     completed: false,
//   },
//   {
//     text: "cocinaaaa",
//     completed: true,
//   },
//   {
//     text: "marihuena",
//     completed: false,
//   },
// ];


// localStorage.setItem('TODOS_V1', defaultTodos)
// localStorage.removeItem('TODOS_V1')
// localStorage.getItem('TODOS_V1')

function Main() {
  
  const [todos, setTodos] = useState(() => {
    const todosFromStorage = window.localStorage.getItem('TODOS_V1')
    if (todosFromStorage) return JSON.parse(todosFromStorage)
    return []
  });

  const [searchValue, setSearchValue] = useState("");

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

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
      );
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
      );
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  const styles =
    "m-4 p-6 border-2 rounded-lg shadow-2xl flex items-center flex-col";

  return (
    <div className="flex flex-auto h-full main-container">
      <div className={`${styles} newtask-section`}>
        <NewTodo />
      </div>
      <div className={`${styles} w-full todo-section`}>
        <TodoCounter completed={completedTodos} total={totalTodos} />

        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

        <TodoList>
          {searchedTodo.map((todo) => {
            return (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            );
          })}
        </TodoList>
      </div>
    </div>
  );
}

export default Main;
