import SidebarStyle from "./Sidebar.css";
import iconToday from "./assets/icon-today.svg";
import TodoList from "../TodoListContainer/TodoList/TodoList.js";
import Data from "../../../Data/Data.js";

const Sidebar = (function () {
  let Sidebar;
  let todayBtn;

  function TodayBtn() {
    todayBtn = document.createElement("div");
    todayBtn.classList.add("sidebar-button");

    const leftContainer = document.createElement("div");
    leftContainer.classList.add("sidebar-button-left");
    const icon = document.createElement("img");
    icon.src = iconToday;
    icon.classList.add("sidebar-icon");
    const name = document.createElement("div");
    name.textContent = "Today";
    leftContainer.appendChild(icon);
    leftContainer.appendChild(name);

    const counter = document.createElement("div");
    counter.classList.add("today-count");
    counter.textContent = Data.getAmountOfTasksToday();

    todayBtn.appendChild(leftContainer);
    todayBtn.appendChild(counter);

    todayBtn.addEventListener("click", handleTodayClicks);

    return todayBtn;
  }

  function handleTodayClicks() {
    TodoList.showToday();
    console.log(Data.getAmountOfTasksToday());
  }

  function updateTaskAmounts() {
    const todayCount = document.querySelector(".today-count");
    todayCount.textContent = Data.getAmountOfTasksToday();
  }

  function create() {
    Sidebar = document.createElement("div");
    Sidebar.classList.add("sidebar");
  }

  function addComponents() {
    Sidebar.appendChild(TodayBtn());
  }

  function get() {
    return Sidebar;
  }

  function toggle() {
    Sidebar.classList.toggle("hidden");
  }

  function init() {
    create();
    addComponents();
  }

  return { init, get, toggle, updateTaskAmounts };
})();

Sidebar.init();

export default Sidebar;
