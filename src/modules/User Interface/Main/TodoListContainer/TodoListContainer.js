import TodoListContainerStyle from "./TodoListContainer.css";
import AddTodoModal from "./AddTodoModal/AddTodoModal.js";
import TodoList from "./TodoList/TodoList";

const TodoListContainer = (function () {
  let TodoListContainer;

  function create() {
    TodoListContainer = document.createElement("div");
    TodoListContainer.classList.add("todo-list-container");
  }

  function addComponents() {
    TodoListContainer.appendChild(AddTodoModal.get());
    TodoListContainer.appendChild(TodoList.get());
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
