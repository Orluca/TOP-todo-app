import mainStyle from "./main.css";
import Sidebar from "./sidebar/sidebar.js";
import TodoList from "./todo-list/todo-list.js";

function main() {
  const main = document.createElement("div");
  main.classList.add("main");

  main.appendChild(Sidebar());
  main.appendChild(TodoList());

  return main;
}

export default main;
