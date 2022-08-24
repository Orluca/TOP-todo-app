import { v4 as uuidv4 } from "uuid";

const Data = (function () {
  let todos = [];
  let projects = [];

  function addTodo(todo) {
    todo.isFinished = false;
    todo.id = uuidv4();
    todos.push(todo);
    saveToLocalStorage();
    console.log(todos);
  }

  function saveToLocalStorage() {
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("projects", JSON.stringify(projects));
  }

  function restoreFromLocalStorage() {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    const storedProjects = JSON.parse(localStorage.getItem("projects"));

    if (storedTodos) todos = storedTodos;
    if (storedProjects) projects = storedProjects;
  }

  return { addTodo, restoreFromLocalStorage };
})();

export default Data;
