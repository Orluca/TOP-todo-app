import { format, parseISO, isSameWeek } from "date-fns";
import { v4 as uuidv4 } from "uuid";

const Data = (function () {
  let todos = [];
  let projects = [];

  function setTodos(data) {
    todos = data;
  }

  function getTodos() {
    return todos;
  }

  function addTodo(data) {
    data.id = uuidv4();
    todos.push(data);
    saveToLocalStorage(); // Automatic save after a new todo is added, good idea?!
  }

  function saveToLocalStorage() {
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("projects", JSON.stringify(projects));
  }

  function getStoredTodos() {
    return JSON.parse(localStorage.getItem("todos"));
  }

  function getStoredProjects() {
    return JSON.parse(localStorage.getItem("projects"));
  }

  function clearLocalStorage() {
    localStorage.removeItem("todos");
  }

  function getAmountOfTasksToday() {
    let amount = 0;
    todos.forEach((todoData) => {
      if (!todoData.dueDate) return;
      const todoDate = format(parseISO(todoData.dueDate), "MM/dd/yyyy");
      const todaysDate = format(new Date(), "MM/dd/yyyy");
      if (todoDate !== todaysDate) return;

      amount++;
    });
    return amount;
  }

  function getAmountOfTasksThisWeek() {
    let amount = 0;
    todos.forEach((todoData) => {
      if (!todoData.dueDate) return;
      if (!isSameWeek(new Date(), parseISO(todoData.dueDate), { weekStartsOn: 1 })) return;

      amount++;
    });
    return amount;
  }

  function getProjectCount(projectName) {
    let amount = 0;
    todos.forEach((todoData) => {
      if (todoData.project !== projectName.toLowerCase()) return;

      amount++;
    });
    return amount;
  }

  function addProject(project) {
    projects.push(project);
  }

  function getProjects() {
    return projects;
  }

  function setProjects(projectsArr) {
    projects = projectsArr;
  }

  function deleteTodo(id) {
    todos = todos.filter((todo) => todo.id !== id);
    saveToLocalStorage();
  }

  function getTodoItem(id) {
    return todos.find((todo) => todo.id === id);
  }

  function editTodo(data) {
    todos.forEach((todo, i) => {
      if (todo.id === data.id) todos[i] = data;
    });
    saveToLocalStorage();
  }

  function changeStatus(id, status) {
    todos.forEach((todo, i) => {
      if (todo.id === id) todos[i].isFinished = status;
    });
    saveToLocalStorage();
  }

  function init() {
    const storedTodos = getStoredTodos();
    if (storedTodos) setTodos(storedTodos);

    const storedProjects = getStoredProjects();
    if (storedProjects) setProjects(storedProjects);
  }

  return { init, setTodos, getTodos, addTodo, saveToLocalStorage, clearLocalStorage, getAmountOfTasksToday, getAmountOfTasksThisWeek, addProject, getProjects, getProjectCount, deleteTodo, getTodoItem, editTodo, changeStatus };
})();

export default Data;
