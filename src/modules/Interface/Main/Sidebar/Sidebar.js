import sidebarStyle from "./Sidebar.css";
import iconToday from "../../../assets/icon-today.svg";
import iconWeek from "../../../assets/icon-week.svg";
import iconPlus from "../../../assets/icon-plus.svg";
// import TodoList from "../TodoListContainer/TodoList/TodoList.js";
// import Data from "../../../Data/Data.js";
import { ModalWindow } from "../Content/TodoModal/TodoModal";

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
const ProjectsHeader = (function () {
  let ProjectsHeader;

  function Header() {
    const Header = document.createElement("h2");
    Header.classList.add("projects-header");
    Header.textContent = "Projects";

    return Header;
  }

  function EditButton() {
    const EditButton = document.createElement("button");
    EditButton.classList.add("projects-edit");
    EditButton.textContent = "Edit";

    return EditButton;
  }

  function init() {
    ProjectsHeader = document.createElement("div");
    ProjectsHeader.classList.add("projects-header");
    ProjectsHeader.appendChild(Header());
    ProjectsHeader.appendChild(EditButton());
  }

  function get() {
    return ProjectsHeader;
  }

  init();

  return { get };
})();

const ProjectsList = (function () {
  let ProjectsList;

  function init() {
    ProjectsList = document.createElement("div");
    ProjectsList.classList.add("projects-list");
  }

  function get() {
    return ProjectsList;
  }

  function addProject(name) {
    ProjectsList.appendChild(ProjectButton(name));
  }

  init();

  return { get, addProject };
})();

const ProjectButton = function (name) {
  let ProjectButton;

  function init() {
    ProjectButton = document.createElement("div");
    ProjectButton.classList.add("project-button");
    ProjectButton.textContent = name;
  }

  init();

  return ProjectButton;
};

const ProjectsAdd = (function () {
  let ProjectsAdd;

  function Icon() {
    const plusIcon = document.createElement("img");
    plusIcon.classList.add("sidebar-icon");
    plusIcon.src = iconPlus;

    return plusIcon;
  }

  function TextLabel() {
    const textLabel = document.createElement("div");
    textLabel.textContent = "Add New Project";

    return textLabel;
  }

  function init() {
    ProjectsAdd = document.createElement("div");
    ProjectsAdd.classList.add("projects-add");
    ProjectsAdd.appendChild(Icon());
    ProjectsAdd.appendChild(TextLabel());
  }

  function get() {
    return ProjectsAdd;
  }

  init();

  return { get };
})();

const Projects = (function () {
  let Projects;

  function init() {
    Projects = document.createElement("div");
    Projects.classList.add("projects");
    Projects.appendChild(ProjectsHeader.get());
    Projects.appendChild(ProjectsList.get());
    ProjectsList.addProject("Programming");
    Projects.appendChild(ProjectsAdd.get());
  }

  function get() {
    return Projects;
  }

  init();

  return { get };
})();

// -------------------- SIDEBAR --------------------
const Sidebar = (function () {
  let Sidebar;

  function init() {
    Sidebar = document.createElement("div");
    Sidebar.classList.add("sidebar");
    Sidebar.appendChild(TodayButton.get());
    Sidebar.appendChild(WeekButton.get());
    Sidebar.appendChild(Projects.get());
  }

  function get() {
    return Sidebar;
  }

  init();

  return { get };
})();

export default Sidebar;
export { ProjectsList };
