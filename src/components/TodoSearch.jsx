
function TodoSearch({ searchValue, setSearchValue }) {

  return (
    <input
      type="text"
      className="todosearch"
      placeholder="Task search"
      value={searchValue}
      onChange={(event) => setSearchValue(event.target.value)}
    />
  );
}

export default TodoSearch;
