import TodoListStyle from "./TodoList.css";
import Data from "../../../../Data/Data.js";
import TodoItem from "./TodoItem/TodoItem.js";
import { format, parseISO } from "date-fns";

const TodoList = (function () {
  let TodoList;
  let TodosContainer;

  function Header() {
    const Header = document.createElement("h2");
    Header.textContent = "Header Placeholder";

    return Header;
  }

  function Todos() {
    TodosContainer = document.createElement("div");
    TodosContainer.classList.add("todos");

    return TodosContainer;
  }

  function ButtonAddTodo() {
    const ButtonAddTodo = document.createElement("button");
    ButtonAddTodo.classList.add("add-todo-btn");
    ButtonAddTodo.textContent = "Add Todo";

    return ButtonAddTodo;
  }

  function create() {
    TodoList = document.createElement("div");
    TodoList.classList.add("todo-list");
  }

  function addComponents() {
    TodoList.appendChild(Header());
    TodoList.appendChild(Todos());
    TodoList.appendChild(ButtonAddTodo());
  }

  function get() {
    return TodoList;
  }

  function update() {
    TodosContainer.innerHTML = "";
    const data = Data.getTodos();
    data.forEach((todoData) => {
      const todoItem = TodoItem(todoData);
      TodosContainer.appendChild(todoItem);
    });
  }

  function showToday() {
    TodosContainer.innerHTML = "";
    const data = Data.getTodos();
    data.forEach((todoData) => {
      if (!todoData.dueDate) return;
      const todoDate = format(parseISO(todoData.dueDate), "MM/dd/yyyy");
      const todaysDate = format(new Date(), "MM/dd/yyyy");
      if (todoDate !== todaysDate) return;

      const todoItem = TodoItem(todoData);
      TodosContainer.appendChild(todoItem);
    });
  }

  function init() {
    create();
    addComponents();
    Data.init();
    update();
  }

  return { init, get, update, showToday };
})();

TodoList.init();

export default TodoList;
