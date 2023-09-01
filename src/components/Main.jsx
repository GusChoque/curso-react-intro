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

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))
// // convierte a string
// JSON.stringify(defaultTodos)
// // parsea el string
// JOSN.parse()

// localStorage.removeItem('TODOS_V1')
// localStorage.getItem('TODOS_V1')

function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);

  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = useState(parsedItem);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return [item, saveItem];
}

function Main() {
  const [todos, saveTodos] = useLocalStorage("TODOS_V1", []);
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
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
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
