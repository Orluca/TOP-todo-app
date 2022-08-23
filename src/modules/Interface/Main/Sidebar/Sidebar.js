import sidebarStyle from "./Sidebar.css";
import iconToday from "../../../assets/icon-today.svg";
import iconWeek from "../../../assets/icon-week.svg";
import iconPlus from "../../../assets/icon-plus.svg";
// import TodoList from "../TodoListContainer/TodoList/TodoList.js";
// import Data from "../../../Data/Data.js";
// import { ModalWindow } from "../TodoListContainer/AddTodoModal/AddTodoModal";

// -------------------- DUE DATE FILTERS --------------------
const TodayButton = (function () {
  let TodayButton;

  function init() {
    TodayButton = document.createElement("div");
    TodayButton.classList.add("today-btn");
  }

  function get() {
    return TodayButton;
  }

  init();

  return { get };
})();

const WeekButton = (function () {
  let WeekButton;

  function init() {
    WeekButton = document.createElement("div");
    WeekButton.classList.add("week-btn");
  }

  function get() {
    return WeekButton;
  }

  init();

  return { get };
})();

// -------------------- PROJECTS SECTION --------------------
const Projects = (function () {})();

const ProjectsHeader = (function () {})();

const ProjectsList = (function () {})();

const ProjectsEdit = (function () {})();

const ProjectsAddButton = (function () {})();

const Sidebar = (function () {
  let Sidebar;

  function init() {
    Sidebar = document.createElement("div");
    Sidebar.classList.add("sidebar");

    Sidebar.appendChild(TodayButton.get());
    Sidebar.appendChild(WeekButton.get());
  }

  function get() {
    return Sidebar;
  }

  init();

  return { get };
})();

export default Sidebar;
