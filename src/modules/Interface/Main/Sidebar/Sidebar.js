import sidebarStyle from "./Sidebar.css";
import iconToday from "../../../assets/icon-today.svg";
import iconWeek from "../../../assets/icon-week.svg";
import iconPlus from "../../../assets/icon-plus.svg";
import Data from "../../../Data/Data.js";
import { ModalWindow } from "../Content/TodoModal/TodoModal.js";
import { TodoList } from "../Content/TodoList/TodoList.js";

// -------------------- DUE DATE FILTERS --------------------
const TodayButton = (function () {
  function LeftSide() {
    function Icon() {
      const icon = document.createElement("img");
      icon.classList.add("sidebar-icon");
      icon.src = iconToday;

      return icon;
    }

    function Label() {
      const label = document.createElement("div");
      label.textContent = "Today";

      return label;
    }
    const leftSide = document.createElement("div");
    leftSide.classList.add("date-filter-btn-left");
    leftSide.appendChild(Icon());
    leftSide.appendChild(Label());

    return leftSide;
  }

  function Counter() {
    const counter = document.createElement("div");
    counter.classList.add("today-count");
    counter.textContent = "6";

    return counter;
  }

  function get() {
    return TodayButton;
  }

  const TodayButton = document.createElement("div");
  TodayButton.classList.add("today-btn");
  TodayButton.classList.add("date-filter-btn");
  TodayButton.appendChild(LeftSide());
  TodayButton.appendChild(Counter());

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
    EditButton.addEventListener("click", handleEditProjects);

    return EditButton;
  }

  function handleEditProjects() {
    toggleEditButtonsVisibilites();
    ProjectsAdd.hideAddProjectPopup();
  }

  function toggleEditButtonsVisibilites() {
    document.querySelectorAll(".reorder-project-handle").forEach((handle) => handle.classList.toggle("hidden"));
    document.querySelectorAll(".rename-project-btn").forEach((button) => button.classList.toggle("hidden"));
    document.querySelectorAll(".delete-project-btn").forEach((button) => button.classList.toggle("hidden"));
    document.querySelectorAll(".counter").forEach((counter) => counter.classList.toggle("hidden"));
  }

  function hideEditButtonsVisibilites() {
    document.querySelectorAll(".reorder-project-handle").forEach((handle) => handle.classList.add("hidden"));
    document.querySelectorAll(".rename-project-btn").forEach((button) => button.classList.add("hidden"));
    document.querySelectorAll(".delete-project-btn").forEach((button) => button.classList.add("hidden"));
    document.querySelectorAll(".counter").forEach((counter) => counter.classList.remove("hidden"));
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

  return { get, hideEditButtonsVisibilites };
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

  function updateCounts() {
    ProjectsList.querySelectorAll(".counter").forEach((counter) => {
      const projectName = counter.closest(".project-button").dataset.projectName;
      counter.textContent = Data.getProjectOccurrencesAmount(projectName);
    });
  }

  init();

  return { get, addProject, restore, updateCounts };
})();

const ProjectButton = function (projectName) {
  let ProjectButton;
  let projectNameLabel;
  let reorderHandle;
  let renameButton;
  let deleteButton;
  let counter;

  const projectNameCapitalized = projectName.slice(0, 1).toUpperCase() + projectName.slice(1);

  function ReorderHandle() {
    reorderHandle = document.createElement("button");
    reorderHandle.classList.add("reorder-project-handle");
    reorderHandle.classList.add("hidden");
    reorderHandle.textContent = "=";

    return reorderHandle;
  }

  function RenameButton() {
    renameButton = document.createElement("button");
    renameButton.classList.add("rename-project-btn");
    renameButton.classList.add("hidden");
    renameButton.textContent = "🖍";
    renameButton.addEventListener("click", handleRenameButton);

    return renameButton;
  }

  function handleRenameButton(e) {
    projectNameLabel.disabled = false;
    projectNameLabel.focus();
    projectNameLabel.select();
  }

  function DeleteButton() {
    deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-project-btn");
    deleteButton.classList.add("hidden");
    deleteButton.textContent = "🗑";
    deleteButton.addEventListener("click", handleDeleteButton);

    return deleteButton;
  }

  function handleDeleteButton(e) {
    const projectName = e.target.closest(".project-button").dataset.projectName;
    Data.deleteProject(projectName);
    e.target.closest(".project-button").remove();
    ModalWindow.updateProjects();
    TodoList.updateProjectNames(projectName, "");
  }

  function ProjectNameLabel(nameVal) {
    projectNameLabel = document.createElement("input");
    projectNameLabel.classList.add("project-name-input");
    projectNameLabel.value = nameVal;
    projectNameLabel.disabled = true;
    projectNameLabel.addEventListener("keypress", handleProjectNameLabelEnterPresses);

    return projectNameLabel;
  }

  function handleProjectNameLabelEnterPresses(e) {
    if (e.key !== "Enter") return;
    updateProjectName(e);
  }

  function updateProjectName(e) {
    const oldName = e.target.closest(".project-button").dataset.projectName;
    const newName = e.target.value.toLowerCase();

    if (!newName) {
      window.alert("Please enter a name");
      return;
    }

    Data.changeProjectName(oldName, newName);
    TodoList.updateProjectNames(oldName, newName);
    ModalWindow.updateProjects();

    e.target.closest(".project-button").dataset.projectName = newName;
    projectNameLabel.disabled = true;
  }

  function Counter() {
    counter = document.createElement("div");
    counter.classList.add("counter");
    counter.textContent = Data.getProjectOccurrencesAmount(projectName);

    return counter;
  }

  function init() {
    ProjectButton = document.createElement("div");
    ProjectButton.classList.add("project-button");
    ProjectButton.dataset.projectName = projectName;
    ProjectButton.appendChild(ProjectNameLabel(projectNameCapitalized));
    ProjectButton.appendChild(RenameButton());
    ProjectButton.appendChild(DeleteButton());
    ProjectButton.appendChild(ReorderHandle());
    ProjectButton.appendChild(Counter());
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
  function toggleAddProjectPopupVisibility() {
    addProjectButton.classList.toggle("hidden");
    addProjectPopup.classList.toggle("hidden");
  }

  function hideAddProjectPopup() {
    addProjectButton.classList.remove("hidden");
    addProjectPopup.classList.add("hidden");
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
    toggleAddProjectPopupVisibility();
    ProjectsHeader.hideEditButtonsVisibilites();
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
    toggleAddProjectPopupVisibility();
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
    toggleAddProjectPopupVisibility();
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

  return { get, hideAddProjectPopup };
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
