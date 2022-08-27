import todoListStyle from "./TodoList.css";
import TodoItem from "./TodoItem/TodoItem.js";
import Data from "../../../../Data/Data.js";
import ModalBackground from "../TodoModal/TodoModal.js";

const TodoListHeader = (function () {
  let TodoListHeader;

  function init() {
    TodoListHeader = document.createElement("h2");
    TodoListHeader.classList.add("todo-list-header");
    TodoListHeader.textContent = "All Todos";
  }

  function update(name) {
    TodoListHeader.textContent = Data.capitalizeString(name);
  }

  function get() {
    return TodoListHeader;
  }

  init();

  return { get, update };
})();

const TodoList = (function () {
  let TodoList;

  function init() {
    TodoList = document.createElement("div");
    TodoList.classList.add("todo-list");
  }

  function get() {
    return TodoList;
  }

  function addTodo(todoData) {
    const todoItem = TodoItem(todoData);
    TodoList.appendChild(todoItem);
  }

  function deleteTodo(id) {
    TodoList.querySelectorAll(".todo-item").forEach((todo) => {
      if (todo.dataset.id === id) todo.remove();
    });
  }

  function restore() {
    const todos = Data.getTodos();
    todos.forEach((todo) => addTodo(todo));
  }

  function updateTodo(id) {
    TodoList.querySelectorAll(".todo-item").forEach((todo) => {
      if (todo.dataset.id === id) {
        const updatedData = Data.getTodoItem(id);
        todo.replaceWith(TodoItem(updatedData));
      }
    });
  }

  function updateProjectNames(oldName, newName) {
    TodoList.querySelectorAll(".todo-item-project").forEach((project) => {
      if (project.textContent === oldName) project.textContent = newName;
    });
  }

  function clear() {
    TodoList.innerHTML = "";
  }

  function showToday() {
    clear();
    const todaysTodos = Data.getTodaysTodos();
    todaysTodos.forEach((todo) => {
      addTodo(todo);
    });
  }

  function showWeek() {
    clear();
    const thisWeeksTodos = Data.getWeeksTodos();
    thisWeeksTodos.forEach((todo) => {
      addTodo(todo);
    });
  }

  function showAll() {
    clear();
    const todos = Data.getTodos();
    todos.forEach((todo) => {
      addTodo(todo);
    });
  }

  function showProject(projectName) {
    clear();
    const projectTodos = Data.getProjectsTodos(projectName);
    projectTodos.forEach((todo) => {
      addTodo(todo);
    });
  }

  init();

  return { get, addTodo, deleteTodo, restore, updateTodo, updateProjectNames, showToday, showWeek, showAll, showProject };
})();

const AddTodoButton = (function () {
  let AddTodoButton;

  function init() {
    AddTodoButton = document.createElement("button");
    AddTodoButton.classList.add("add-todo-btn");
    AddTodoButton.textContent = "+";
    AddTodoButton.addEventListener("click", handleAddTodoButton);
  }

  function handleAddTodoButton() {
    ModalBackground.showNewTodoWindow();
  }

  function get() {
    return AddTodoButton;
  }

  init();

  return { get };
})();

const TodoListContainer = (function () {
  let TodoListContainer;

  function init() {
    TodoListContainer = document.createElement("div");
    TodoListContainer.classList.add("todo-list-container");
    TodoListContainer.appendChild(TodoListHeader.get());
    TodoListContainer.appendChild(TodoList.get());
    TodoListContainer.appendChild(AddTodoButton.get());
  }

  function get() {
    return TodoListContainer;
  }

  init();

  return { get };
})();

export default TodoListContainer;
export { TodoList, TodoListHeader };
