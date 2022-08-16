const Data = (function () {
  let todos = [];

  function setTodos(data) {
    todos = data;
  }

  function getTodos() {
    return todos;
  }

  function addTodo(data) {
    todos.push(data);
  }

  function saveToLocalStorage() {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function getFromLocalStorage() {
    return JSON.parse(localStorage.getItem("todos"));
  }

  function clearLocalStorage() {
    localStorage.removeItem("todos");
  }

  function init() {
    const localStorage = getFromLocalStorage();
    if (localStorage) setTodos(localStorage);
    console.log(todos);
  }

  return { init, setTodos, getTodos, addTodo, saveToLocalStorage, getFromLocalStorage, clearLocalStorage };
})();

export default Data;