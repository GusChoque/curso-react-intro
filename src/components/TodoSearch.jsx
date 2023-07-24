
function TodoSearch({ searchValue, setSearchValue }) {

  return (
    <input
      type="text"
      className="border-2 rounded-md p-2 m-4 w-2/3 todosearch"
      placeholder="Task search"
      value={searchValue}
      onChange={(event) => setSearchValue(event.target.value)}
    />
  );
}

export default TodoSearch;
