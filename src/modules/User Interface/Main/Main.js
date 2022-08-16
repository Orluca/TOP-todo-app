import MainStyle from "./Main.css";
import Sidebar from "./Sidebar/Sidebar.js";
import TodoList from "./TodoList/TodoListContainer.js";

const Main = (function () {
  let Main;

  function create() {
    Main = document.createElement("div");
    Main.classList.add("main");
  }

  function addComponents() {
    Main.appendChild(Sidebar.get());
    Main.appendChild(TodoList.get());
  }

  function get() {
    return Main;
  }

  function init() {
    create();
    addComponents();
  }

  return { init, get };
})();

Main.init();

export default Main;
