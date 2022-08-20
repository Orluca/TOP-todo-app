import SidebarStyle from "./Sidebar.css";
import iconToday from "./assets/icon-today.svg";
import iconWeek from "./assets/icon-week.svg";
import TodoList from "../TodoListContainer/TodoList/TodoList.js";
import Data from "../../../Data/Data.js";

const Sidebar = (function () {
  let Sidebar;
  let todayBtn;
  let weekBtn;

  function TodayBtn() {
    todayBtn = document.createElement("div");
    todayBtn.classList.add("sidebar-button");
    todayBtn.classList.add("today-btn");

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

  function WeekBtn() {
    weekBtn = document.createElement("div");
    weekBtn.classList.add("sidebar-button");
    weekBtn.classList.add("week-btn");

    const leftContainer = document.createElement("div");
    leftContainer.classList.add("sidebar-button-left");
    const icon = document.createElement("img");
    icon.src = iconWeek;
    icon.classList.add("sidebar-icon");
    const name = document.createElement("div");
    name.textContent = "This Week";
    leftContainer.appendChild(icon);
    leftContainer.appendChild(name);

    const counter = document.createElement("div");
    counter.classList.add("week-count");
    counter.textContent = Data.getAmountOfTasksThisWeek();

    weekBtn.appendChild(leftContainer);
    weekBtn.appendChild(counter);

    weekBtn.addEventListener("click", handleWeekClicks);

    return weekBtn;
  }

  function handleTodayClicks(e) {
    const todayBtn = e.target.closest(".today-btn");
    const weekBtn = document.querySelector(".week-btn");
    todayBtn.classList.toggle("clicked");
    todayBtn.classList.contains("clicked") ? TodoList.showToday() : TodoList.showAll();
    weekBtn.classList.remove("clicked");
  }

  function handleWeekClicks(e) {
    const weekBtn = e.target.closest(".week-btn");
    const todayBtn = document.querySelector(".today-btn");
    weekBtn.classList.toggle("clicked");
    weekBtn.classList.contains("clicked") ? TodoList.showThisWeek() : TodoList.showAll();
    todayBtn.classList.remove("clicked");
  }

  function updateTaskAmounts() {
    const todayCount = document.querySelector(".today-count");
    todayCount.textContent = Data.getAmountOfTasksToday();
    const weekCount = document.querySelector(".week-count");
    weekCount.textContent = Data.getAmountOfTasksThisWeek();
  }

  function create() {
    Sidebar = document.createElement("div");
    Sidebar.classList.add("sidebar");
  }

  function addComponents() {
    Sidebar.appendChild(TodayBtn());
    Sidebar.appendChild(WeekBtn());
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
