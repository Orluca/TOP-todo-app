import { v4 as uuidv4 } from "uuid";

const Data = (function () {
  let todos = [];
  let projects = [];

  function addTodo(todo) {
    todo.isFinished = false;
    todo.id = uuidv4();
    todos.push(todo);
    saveToLocalStorage();
  }

  function getTodos() {
    return todos;
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

  function changeTodoStatus(id, status) {
    todos.forEach((todo, i) => {
      if (todo.id === id) todos[i].isFinished = status;
    });
    saveToLocalStorage();
  }

  function deleteTodo(id) {
    todos = todos.filter((todo) => todo.id !== id);
    saveToLocalStorage();
  }

  return { addTodo, restoreFromLocalStorage, getTodos, changeTodoStatus, deleteTodo };
})();

export default Data;
