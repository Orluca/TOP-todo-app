import todoListStyle from "./TodoList.css";
import TodoItem from "./TodoItem/TodoItem.js";
import Data from "../../../../Data/Data.js";

const TodoListHeader = (function () {
  let TodoListHeader;

  function init() {
    TodoListHeader = document.createElement("h2");
    TodoListHeader.classList.add("todo-list-header");
    TodoListHeader.textContent = "Programming";
  }

  function get() {
    return TodoListHeader;
  }

  init();

  return { get };
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

  function restore() {
    const todos = Data.getTodos();
    todos.forEach((todo) => addTodo(todo));
  }

  init();

  return { get, addTodo, restore };
})();

const AddTodoButton = (function () {
  let AddTodoButton;

  function init() {
    AddTodoButton = document.createElement("button");
    AddTodoButton.classList.add("add-todo-btn");
    AddTodoButton.textContent = "+";
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
export { TodoList };
