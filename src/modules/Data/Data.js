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

  function getTodoItem(id) {
    return todos.find((todo) => todo.id === id);
  }

  function updateTodo(updatedData, id) {
    todos.forEach((todo, i) => {
      if (todo.id === id) {
        todo.title = updatedData.title;
        todo.description = updatedData.description;
        todo.dueDate = updatedData.dueDate;
        todo.priority = updatedData.priority;
        todo.project = updatedData.project;
      }
    });
    saveToLocalStorage();
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
    todos.forEach((todo) => {
      if (todo.id === id) todo.isFinished = status;
    });
    saveToLocalStorage();
  }

  function deleteTodo(id) {
    todos = todos.filter((todo) => todo.id !== id);
    saveToLocalStorage();
  }

  function addProject(projectName) {
    projects.push(projectName);
    saveToLocalStorage();
  }

  function getProjects() {
    return projects;
  }

  function changeProjectName(oldName, newName) {
    todos.forEach((todo) => {
      if (todo.project === oldName) todo.project = newName;
    });
    projects.forEach((project, i) => {
      if (project === oldName) projects[i] = newName;
    });
    saveToLocalStorage();
  }

  return { addTodo, restoreFromLocalStorage, getTodos, changeTodoStatus, deleteTodo, getTodoItem, updateTodo, addProject, getProjects, changeProjectName };
})();

export default Data;
