import { v4 as uuidv4 } from "uuid";
import { isSameDay, isSameWeek, parse, parseISO } from "date-fns";

const Data = (function () {
  let todos = [];
  let projects = [];
  let darkMode = false;

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
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }

  function restoreFromLocalStorage() {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    const storedProjects = JSON.parse(localStorage.getItem("projects"));
    const storedDarkModeSetting = JSON.parse(localStorage.getItem("darkMode"));

    if (storedTodos) todos = storedTodos;
    if (storedProjects) projects = storedProjects;
    if (storedDarkModeSetting) darkMode = storedDarkModeSetting;
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

  function deleteProject(projectName) {
    todos.forEach((todo) => {
      if (todo.project === projectName) todo.project = "";
    });
    projects.forEach((project, i) => {
      if (project === projectName) projects.splice(i, 1);
    });
    saveToLocalStorage();
  }

  function getProjectOccurrencesAmount(projectName) {
    let count = 0;
    todos.forEach((todo) => {
      if (todo.project === projectName) count++;
    });
    return count;
  }

  function getTodayCount() {
    let count = 0;
    const currentDate = new Date();

    todos.forEach((todo) => {
      const todoDate = parseISO(todo.dueDate);
      if (isSameDay(currentDate, todoDate)) count++;
    });

    return count;
  }

  function getWeekCount() {
    let count = 0;
    const currentDate = new Date();

    todos.forEach((todo) => {
      const todoDate = parseISO(todo.dueDate);
      if (isSameWeek(currentDate, todoDate)) count++;
    });

    return count;
  }

  function getTodaysTodos() {
    const currentDate = new Date();

    const todaysTasks = todos.filter((todo) => {
      const todoDate = parseISO(todo.dueDate);
      if (isSameDay(currentDate, todoDate)) return true;
    });

    return todaysTasks;
  }

  function getWeeksTodos() {
    const currentDate = new Date();

    const thisWeeksTasks = todos.filter((todo) => {
      const todoDate = parseISO(todo.dueDate);
      if (isSameWeek(currentDate, todoDate)) return true;
    });

    return thisWeeksTasks;
  }

  function getProjectsTodos(projectName) {
    return todos.filter((todo) => todo.project === projectName);
  }

  function capitalizeString(string) {
    let capitalizedString = string
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
      .join(" ");
    if (capitalizedString.includes("-"))
      capitalizedString = capitalizedString
        .toLowerCase()
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
        .join("-");

    return capitalizedString;
  }

  function projectNameExists(projectName) {
    return projects.includes(projectName);
  }

  function setDarkMode(bool) {
    darkMode = bool;
    saveToLocalStorage();
  }

  function getDarkMode() {
    return darkMode;
  }

  function setProjects(projectsArray) {
    projects = projectsArray;
    saveToLocalStorage();
  }

  return { addTodo, restoreFromLocalStorage, getTodos, changeTodoStatus, deleteTodo, getTodoItem, updateTodo, addProject, getProjects, changeProjectName, deleteProject, getProjectOccurrencesAmount, getTodayCount, getWeekCount, getTodaysTodos, getWeeksTodos, getProjectsTodos, capitalizeString, projectNameExists, setDarkMode, getDarkMode, setProjects };
})();

export default Data;
