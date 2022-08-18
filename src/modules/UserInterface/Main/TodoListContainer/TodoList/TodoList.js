import TodoListStyle from "./TodoList.css";

const TodoList = (function () {
  let TodoList;

  function create() {
    TodoList = document.createElement("div");
    TodoList.classList.add("todo-list");
  }

  function addComponents() {
    TodoList.appendChild(TodoListComponents.Header());
    TodoList.appendChild(TodoListComponents.Todos());
    TodoList.appendChild(TodoListComponents.ButtonAddTodo());
  }

  function get() {
    return TodoList;
  }

  function init() {
    create();
    addComponents();
  }

  return { init, get };
})();

const TodoListComponents = (function () {
  function Header() {
    const Header = document.createElement("h2");
    Header.textContent = "Header Placeholder";

    return Header;
  }

  function Todos() {
    const Todos = document.createElement("div");
    Todos.classList.add("todos");

    return Todos;
  }

  function ButtonAddTodo() {
    const ButtonAddTodo = document.createElement("button");
    ButtonAddTodo.textContent = "Add Todo";

    return ButtonAddTodo;
  }

  return { Header, Todos, ButtonAddTodo };
})();

TodoList.init();

export default TodoList;
