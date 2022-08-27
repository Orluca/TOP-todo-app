import contentStyle from "./Content.css";
import TodoModal from "./TodoModal/TodoModal.js";
import TodoList from "./TodoList/TodoList.js";

const Content = (function () {
  let Content;

  function init() {
    Content = document.createElement("div");
    Content.classList.add("content");
    Content.appendChild(TodoModal.get());
    Content.appendChild(TodoList.get());
  }

  function get() {
    return Content;
  }

  function toggleGridSetting() {
    Content.classList.toggle("todo-list-container-grid"); // a patchwork solution for expanding to whole width when closing the sidebar
  }

  function disableGridSetting() {
    Content.classList.remove("todo-list-container-grid");
  }

  function enableGridSetting() {
    Content.classList.add("todo-list-container-grid");
  }

  init();

  return { get, toggleGridSetting, disableGridSetting, enableGridSetting };
})();

export default Content;
