import TodoListStyle from "./TodoList.css";
import Data from "../../../../Data/Data.js";
import TodoItem from "./TodoItem/TodoItem.js";

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
    const data = Data.getTodos();
    data.forEach((todoData) => {
      const todoItem = TodoItem(todoData);
      TodosContainer.appendChild(todoItem);
    });
  }

  function init() {
    create();
    addComponents();
  }

  return { init, get, update };
})();

// const TodoListComponents = (function () {
//   function Header() {
//     const Header = document.createElement("h2");
//     Header.textContent = "Header Placeholder";

//     return Header;
//   }

//   function Todos() {
//     const Todos = document.createElement("div");
//     Todos.classList.add("todos");

//     return Todos;
//   }

//   function ButtonAddTodo() {
//     const ButtonAddTodo = document.createElement("button");
//     ButtonAddTodo.textContent = "Add Todo";

//     return ButtonAddTodo;
//   }

//   return { Header, Todos, ButtonAddTodo };
// })();

TodoList.init();

export default TodoList;
