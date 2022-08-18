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
    console.log(todos);
    saveToLocalStorage(); // Automatic save after a new todo is added, good idea?!
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
  }

  return { init, setTodos, getTodos, addTodo, saveToLocalStorage, getFromLocalStorage, clearLocalStorage };
})();

export default Data;
