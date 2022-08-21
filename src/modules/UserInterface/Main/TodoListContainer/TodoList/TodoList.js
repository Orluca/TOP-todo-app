import TodoListStyle from "./TodoList.css";
import Data from "../../../../Data/Data.js";
import TodoItem from "./TodoItem/TodoItem.js";
import { format, parseISO, isSameWeek } from "date-fns";
import AddTodoModal from "../AddTodoModal/AddTodoModal";

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
    ButtonAddTodo.addEventListener("click", handleAddTodoBtn);

    return ButtonAddTodo;
  }

  function handleAddTodoBtn() {
    AddTodoModal.show();
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

  function showAll() {
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

  function showThisWeek() {
    TodosContainer.innerHTML = "";
    const data = Data.getTodos();
    data.forEach((todoData) => {
      if (!todoData.dueDate) return;
      if (!isSameWeek(new Date(), parseISO(todoData.dueDate), { weekStartsOn: 1 })) return;
      const todoItem = TodoItem(todoData);
      TodosContainer.appendChild(todoItem);
    });
  }

  function showProject(projectName) {
    TodosContainer.innerHTML = "";
    const data = Data.getTodos();
    data.forEach((todoData) => {
      console.log(projectName);
      console.log(todoData.project);
      if (todoData.project !== projectName.toLowerCase()) return;
      const todoItem = TodoItem(todoData);
      TodosContainer.appendChild(todoItem);
    });
  }

  function init() {
    create();
    addComponents();
    Data.init();
    showAll();
  }

  return { init, get, showAll, showToday, showThisWeek, showProject };
})();

TodoList.init();

export default TodoList;
