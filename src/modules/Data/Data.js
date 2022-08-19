import { format, parseISO } from "date-fns";

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

  function init() {
    const localStorage = getFromLocalStorage();
    if (localStorage) setTodos(localStorage);
  }

  return { init, setTodos, getTodos, addTodo, saveToLocalStorage, getFromLocalStorage, clearLocalStorage, getAmountOfTasksToday };
})();

export default Data;
