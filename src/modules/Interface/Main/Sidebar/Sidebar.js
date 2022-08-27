import sidebarStyle from "./Sidebar.css";
import iconToday from "../../../assets/icon-today.svg";
import iconWeek from "../../../assets/icon-week.svg";
import iconPlus from "../../../assets/icon-plus.svg";
import iconPen from "../../../assets/icon-pen.svg";
import iconDelete from "../../../assets/icon-delete.svg";
import iconReorder from "../../../assets/icon-reorder.svg";
import Data from "../../../Data/Data.js";
import Content from "../Content/Content.js";
import { ModalWindow } from "../Content/TodoModal/TodoModal.js";
import { TodoList, TodoListHeader } from "../Content/TodoList/TodoList.js";

// -------------------- DUE DATE FILTERS --------------------
const TodayButton = (function () {
  let counter;

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
    counter = document.createElement("div");
    counter.classList.add("today-count");

    return counter;
  }

  function get() {
    return TodayButton;
  }

  function handleTodayClicks() {
    TodayButton.classList.toggle("clicked");
    if (TodayButton.classList.contains("clicked")) {
      TodoList.showToday();
      TodoListHeader.update("Today");
    } else {
      TodoList.showAll();
      TodoListHeader.update("All Todos");
    }
    WeekButton.clear();
    ProjectsList.clearAll();
  }

  function updateCount() {
    counter.textContent = Data.getTodayCount();
  }

  function clear() {
    TodayButton.classList.remove("clicked");
  }

  const TodayButton = document.createElement("div");
  TodayButton.classList.add("today-btn");
  TodayButton.classList.add("date-filter-btn");
  TodayButton.appendChild(LeftSide());
  TodayButton.appendChild(Counter());
  TodayButton.addEventListener("click", handleTodayClicks);

  return { get, updateCount, clear };
})();

const WeekButton = (function () {
  let counter;

  function LeftSide() {
    function Icon() {
      const icon = document.createElement("img");
      icon.classList.add("sidebar-icon");
      icon.src = iconWeek;

      return icon;
    }

    function Label() {
      const label = document.createElement("div");
      label.textContent = "This Week";

      return label;
    }
    const leftSide = document.createElement("div");
    leftSide.classList.add("date-filter-btn-left");
    leftSide.appendChild(Icon());
    leftSide.appendChild(Label());

    return leftSide;
  }

  function Counter() {
    counter = document.createElement("div");
    counter.classList.add("week-count");

    return counter;
  }

  function get() {
    return WeekButton;
  }

  function handleWeekClicks() {
    WeekButton.classList.toggle("clicked");
    if (WeekButton.classList.contains("clicked")) {
      TodoList.showWeek();
      TodoListHeader.update("This Week");
    } else {
      TodoList.showAll();
      TodoListHeader.update("All Todos");
    }
    TodayButton.clear();
    ProjectsList.clearAll();
  }

  function updateCount() {
    counter.textContent = Data.getWeekCount();
  }

  function clear() {
    WeekButton.classList.remove("clicked");
  }

  const WeekButton = document.createElement("div");
  WeekButton.classList.add("today-btn");
  WeekButton.classList.add("date-filter-btn");
  WeekButton.appendChild(LeftSide());
  WeekButton.appendChild(Counter());
  WeekButton.addEventListener("click", handleWeekClicks);

  return { get, updateCount, clear };
})();

// -------------------- PROJECTS SECTION --------------------
const ProjectsHeader = (function () {
  let ProjectsHeader;

  function Header() {
    const Header = document.createElement("h2");
    Header.classList.add("projects-headline");
    Header.textContent = "Projects";

    return Header;
  }

  function EditButton() {
    function PenIcon() {
      const icon = document.createElement("img");
      icon.src = iconPen;
      icon.classList.add("sidebar-icon");

      return icon;
    }
    const EditButton = document.createElement("button");
    EditButton.classList.add("edit-projects-btn");
    EditButton.addEventListener("click", handleEditProjects);
    EditButton.appendChild(PenIcon());

    return EditButton;
  }

  function handleEditProjects() {
    ProjectsList.toggleEditButtonsVisibilites();
    ProjectsList.toggleEditMode();
    ProjectsAdd.hideAddProjectPopup();
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

  function updateCounts() {
    ProjectsList.querySelectorAll(".counter").forEach((counter) => {
      const projectName = counter.closest(".project-button").dataset.projectName;
      counter.textContent = Data.getProjectOccurrencesAmount(projectName);
    });
  }

  function clear(exception) {
    ProjectsList.querySelectorAll(".project-button").forEach((button) => {
      if (button !== exception) button.classList.remove("clicked");
    });
  }

  function clearAll() {
    ProjectsList.querySelectorAll(".project-button").forEach((button) => button.classList.remove("clicked"));
  }

  function toggleEditMode() {
    ProjectsList.querySelectorAll(".project-button").forEach((button) => {
      button.dataset.editMode = button.dataset.editMode === "true" ? "false" : "true";
    });
  }

  function removeEditMode() {
    ProjectsList.querySelectorAll(".project-button").forEach((button) => (button.dataset.editMode = "false"));
  }

  function toggleEditButtonsVisibilites() {
    // ProjectsList.querySelectorAll(".reorder-project-handle").forEach((handle) => handle.classList.toggle("hidden"));
    // ProjectsList.querySelectorAll(".rename-project-btn").forEach((button) => button.classList.toggle("hidden"));
    // ProjectsList.querySelectorAll(".delete-project-btn").forEach((button) => button.classList.toggle("hidden"));
    ProjectsList.querySelectorAll(".edit-buttons").forEach((button) => button.classList.toggle("hidden"));
    ProjectsList.querySelectorAll(".project-count").forEach((counter) => counter.classList.toggle("hidden"));
  }

  function hideEditButtonsVisibilites() {
    // ProjectsList.querySelectorAll(".reorder-project-handle").forEach((handle) => handle.classList.add("hidden"));
    // ProjectsList.querySelectorAll(".rename-project-btn").forEach((button) => button.classList.add("hidden"));
    // ProjectsList.querySelectorAll(".delete-project-btn").forEach((button) => button.classList.add("hidden"));
    ProjectsList.querySelectorAll(".edit-buttons").forEach((button) => button.classList.add("hidden"));
    ProjectsList.querySelectorAll(".project-count").forEach((counter) => counter.classList.remove("hidden"));
  }

  init();

  return { get, addProject, restore, updateCounts, clear, clearAll, toggleEditMode, removeEditMode, toggleEditButtonsVisibilites, hideEditButtonsVisibilites };
})();

const ProjectButton = function (projectName) {
  let ProjectButton;
  let projectNameLabel;
  let reorderHandle;
  let renameButton;
  let deleteButton;
  let counter;

  const projectNameCapitalized = projectName.slice(0, 1).toUpperCase() + projectName.slice(1);

  function EditButtons() {
    function ReorderHandle() {
      function Icon() {
        const icon = document.createElement("img");
        icon.classList.add("edit-project-reorder-icon");
        icon.src = iconReorder;

        return icon;
      }

      reorderHandle = document.createElement("button");
      reorderHandle.classList.add("reorder-project-handle");
      reorderHandle.appendChild(Icon());

      return reorderHandle;
    }

    function RenameButton() {
      function Icon() {
        const icon = document.createElement("img");
        icon.classList.add("edit-project-rename-icon");
        icon.src = iconPen;

        return icon;
      }

      renameButton = document.createElement("button");
      renameButton.classList.add("rename-project-btn");
      renameButton.appendChild(Icon());
      renameButton.addEventListener("click", handleRenameButton);

      return renameButton;
    }

    function handleRenameButton(e) {
      projectNameLabel.disabled = false;
      projectNameLabel.focus();
      projectNameLabel.select();
    }

    function DeleteButton() {
      function Icon() {
        const icon = document.createElement("img");
        icon.classList.add("edit-project-delete-icon");
        icon.src = iconDelete;

        return icon;
      }

      deleteButton = document.createElement("button");
      deleteButton.classList.add("delete-project-btn");
      deleteButton.addEventListener("click", handleDeleteButton);
      deleteButton.appendChild(Icon());

      return deleteButton;
    }

    function handleDeleteButton(e) {
      const projectName = e.target.closest(".project-button").dataset.projectName;
      Data.deleteProject(projectName);
      e.target.closest(".project-button").remove();
      ModalWindow.updateProjects();
      TodoList.updateProjectNames(projectName, "");
    }

    const editButtons = document.createElement("div");
    editButtons.classList.add("edit-buttons");
    editButtons.classList.add("hidden");
    editButtons.appendChild(RenameButton());
    editButtons.appendChild(DeleteButton());
    editButtons.appendChild(ReorderHandle());

    return editButtons;
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
    counter.classList.add("project-count");
    counter.textContent = Data.getProjectOccurrencesAmount(projectName);

    return counter;
  }

  function handleProjectButton() {
    const projectName = ProjectButton.dataset.projectName;

    if (isInEditMode()) return;
    ProjectButton.classList.toggle("clicked");
    ProjectButton.classList.contains("clicked") ? TodoList.showProject(projectName) : TodoList.showAll();
    if (ProjectButton.classList.contains("clicked")) {
      TodoList.showProject(projectName);
      TodoListHeader.update(projectName);
    } else {
      TodoList.showAll();
      TodoListHeader.update("All Todos");
    }
    ProjectsList.clear(ProjectButton);
    TodayButton.clear();
    WeekButton.clear();
  }

  function isInEditMode() {
    return ProjectButton.dataset.editMode === "true" ? true : false;
  }

  function init() {
    ProjectButton = document.createElement("div");
    ProjectButton.classList.add("project-button");
    ProjectButton.dataset.projectName = projectName;
    ProjectButton.dataset.editMode = false; // To disable button highlighting and filtering when in edit mode
    ProjectButton.appendChild(ProjectNameLabel(projectNameCapitalized));
    ProjectButton.appendChild(EditButtons());
    ProjectButton.appendChild(Counter());
    ProjectButton.addEventListener("click", handleProjectButton);
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
    ProjectsList.hideEditButtonsVisibilites();
    ProjectsList.removeEditMode();
    projectNameInput.focus();
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
  function PopupName() {
    projectNameInput = document.createElement("input");
    projectNameInput.classList.add("project-popup-name-input");
    projectNameInput.type = "text";

    return projectNameInput;
  }

  function PopupButtons() {
    const buttons = document.createElement("div");
    buttons.classList.add("project-popup-buttons");
    buttons.appendChild(CancelButton());
    buttons.appendChild(ConfirmButton());

    return buttons;
  }

  function CancelButton() {
    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";
    cancelButton.addEventListener("click", handleCancelButton);
    cancelButton.classList.add("project-popup-cancel-btn");

    return cancelButton;
  }

  function handleCancelButton() {
    toggleAddProjectPopupVisibility();
  }

  function ConfirmButton() {
    const confirmButton = document.createElement("button");
    confirmButton.textContent = "Confirm";
    confirmButton.addEventListener("click", handleConfirmButton);
    confirmButton.classList.add("project-popup-confirm-btn");

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
    addProjectPopup.appendChild(PopupName());
    addProjectPopup.appendChild(PopupButtons());

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

  function toggle() {
    Sidebar.classList.toggle("hidden");
    // Sidebar.style.display = Sidebar.offsetParent === null ? "flex" : "none";
    // if (Sidebar.offsetParent === null) {
    //   console.log("Element is hidden.");
    // } else {
    //   console.log("Element is visible.");
    // }
  }

  function hide() {
    Sidebar.classList.add("hidden");
  }

  function show() {
    Sidebar.classList.remove("hidden");
  }

  init();

  return { get, toggle, hide, show };
})();

// Auto hide sidebar under 900px of width
const mediaQuery = "(max-width: 900px)";
const mediaQueryList = window.matchMedia(mediaQuery);

mediaQueryList.addEventListener("change", (event) => {
  if (event.matches) {
    Sidebar.hide();
    Content.enableGridSetting();
  } else {
    Sidebar.show();
    Content.disableGridSetting();
  }
});

window.addEventListener("click", function (e) {
  const sidebar = e.target.closest(".sidebar");
  const sidebarToggle = e.target.closest(".sidebar-toggle");
  if (!sidebar && !sidebarToggle) Sidebar.hide();
});

export default Sidebar;
export { ProjectsList, TodayButton, WeekButton };
