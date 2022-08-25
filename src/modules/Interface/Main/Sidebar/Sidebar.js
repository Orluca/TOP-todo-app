import sidebarStyle from "./Sidebar.css";
import iconToday from "../../../assets/icon-today.svg";
import iconWeek from "../../../assets/icon-week.svg";
import iconPlus from "../../../assets/icon-plus.svg";
// import TodoList from "../TodoListContainer/TodoList/TodoList.js";
import Data from "../../../Data/Data.js";
import { ModalWindow } from "../Content/TodoModal/TodoModal.js";

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

  function restore() {
    const projects = Data.getProjects();
    projects.forEach((project) => addProject(project));
  }

  init();

  return { get, addProject, restore };
})();

const ProjectButton = function (name) {
  let ProjectButton;
  const projectName = name.slice(0, 1).toUpperCase() + name.slice(1);

  function init() {
    ProjectButton = document.createElement("div");
    ProjectButton.classList.add("project-button");
    ProjectButton.textContent = projectName;
  }

  init();

  return ProjectButton;
};

const ProjectsAdd = (function () {
  let addProjectContainer;
  let addProjectButton;
  let addProjectPopup;
  let projectNameInput;

  // FUNCTIONALITY
  function toggleVisibilities() {
    addProjectButton.classList.toggle("hidden");
    addProjectPopup.classList.toggle("hidden");
  }

  // ADD PROJECT BUTTON
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

  function handleAddProject() {
    toggleVisibilities();
  }

  function AddProjectButton() {
    addProjectButton = document.createElement("div");
    addProjectButton.classList.add("add-project-btn");
    addProjectButton.appendChild(Icon());
    addProjectButton.appendChild(TextLabel());
    addProjectButton.addEventListener("click", handleAddProject);

    return addProjectButton;
  }

  // ADD PROJECT POPUP
  function ProjectNameInput() {
    projectNameInput = document.createElement("input");
    projectNameInput.classList.add("project-name-input");
    projectNameInput.type = "text";

    return projectNameInput;
  }

  function CancelButton() {
    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";
    cancelButton.addEventListener("click", handleCancelButton);

    return cancelButton;
  }

  function handleCancelButton() {
    toggleVisibilities();
  }

  function ConfirmButton() {
    const confirmButton = document.createElement("button");
    confirmButton.textContent = "Confirm";
    confirmButton.addEventListener("click", handleConfirmButton);

    return confirmButton;
  }

  function handleConfirmButton(e) {
    const projectName = e.target.closest(".add-project-popup").querySelector(".project-name-input").value.toLowerCase();
    Data.addProject(projectName);
    ProjectsList.addProject(projectName);
    clearProjectNameInput();
    toggleVisibilities();
    ModalWindow.updateProjects();
  }

  function clearProjectNameInput() {
    projectNameInput.value = "";
  }

  function AddProjectPopup() {
    addProjectPopup = document.createElement("div");
    addProjectPopup.classList.add("add-project-popup");
    addProjectPopup.classList.add("hidden");
    addProjectPopup.appendChild(ProjectNameInput());
    addProjectPopup.appendChild(CancelButton());
    addProjectPopup.appendChild(ConfirmButton());

    return addProjectPopup;
  }

  // ADD PROJECT CONTAINER
  function init() {
    addProjectContainer = document.createElement("div");
    addProjectContainer.classList.add("projects-add");
    addProjectContainer.appendChild(AddProjectButton());
    addProjectContainer.appendChild(AddProjectPopup());
  }

  function get() {
    return addProjectContainer;
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
