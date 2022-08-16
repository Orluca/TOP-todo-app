import TodoListContainerStyle from "./TodoListContainer.css";
import AddTodoModal from "./AddTodoModal/AddTodoModal.js";

const TodoListContainer = (function () {
  let TodoListContainer;

  function create() {
    TodoListContainer = document.createElement("div");
    TodoListContainer.classList.add("todo-list-container");
  }

  function addComponents() {
    console.log(AddTodoModal.get());
    TodoListContainer.appendChild(AddTodoModal.get());
  }

  function get() {
    return TodoListContainer;
  }

  function init() {
    create();
    addComponents();
  }

  return { init, get };
})();

TodoListContainer.init();

export default TodoListContainer;
