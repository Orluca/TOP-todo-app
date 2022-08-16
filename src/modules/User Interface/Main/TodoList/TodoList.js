import TodoListStyle from "./TodoList.css";

const TodoList = (function () {
  let TodoList;

  function create() {
    TodoList = document.createElement("div");
    TodoList.classList.add("todo-list");
  }

  function addComponents() {}

  function get() {
    return TodoList;
  }

  function init() {
    create();
    // addComponents();
  }

  return { init, get };
})();

TodoList.init();

export default TodoList;
