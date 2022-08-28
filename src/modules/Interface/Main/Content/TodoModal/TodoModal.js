import todoModalStyle from "./TodoModal.css";
import Data from "../../../../Data/Data.js";
import { TodoList } from "../TodoList/TodoList.js";
import { ProjectsList, TodayButton, WeekButton } from "../../Sidebar/Sidebar.js";

const ModalWindow = (function () {
  let modalWindow;
  let titleInput;
  let descriptionInput;
  let dateInput;
  let priorityInput;
  let projectsInput;

  function Header(text) {
    const header = document.createElement("h2");
    header.classList.add("modal-window-header");
    header.textContent = text;

    return header;
  }

  function labelMaker(targetID, name, isOptional) {
    const label = document.createElement("label");
    label.htmlFor = targetID;
    label.innerHTML = `${name}${isOptional ? " <em>(optional)</em>" : ""}`;

    return label;
  }

  function containerMaker(className) {
    const container = document.createElement("div");
    container.classList.add(className);

    return container;
  }

  // ---------------------- TITLE INPUT ----------------------
  function Title(titleVal) {
    function TitleInput() {
      titleInput = document.createElement("input");
      titleInput.type = "text";
      titleInput.value = titleVal ? titleVal : "";
      titleInput.setAttribute("id", "title-input");

      return titleInput;
    }

    const title = containerMaker("modal-window-title");
    title.appendChild(labelMaker("title-input", "Title", false));
    title.appendChild(TitleInput());

    return title;
  }

  // ---------------------- DESCRIPTION INPUT ----------------------
  function Description(descriptionVal) {
    function DescriptionInput() {
      descriptionInput = document.createElement("textarea");
      descriptionInput.textContent = descriptionVal ? descriptionVal : "";
      descriptionInput.setAttribute("id", "description-input");

      return descriptionInput;
    }

    const description = containerMaker("modal-window-description");
    description.appendChild(labelMaker("description-input", "Description", true));
    description.appendChild(DescriptionInput());

    return description;
  }

  // ---------------------- DATE INPUT ----------------------
  function Date(dateVal) {
    function DateInput() {
      dateInput = document.createElement("input");
      dateInput.type = "datetime-local";
      dateInput.value = dateVal ? dateVal : "";
      dateInput.setAttribute("id", "date-input");

      return dateInput;
    }

    const date = containerMaker("modal-window-date");
    date.appendChild(labelMaker("date-input", "Date", true));
    date.appendChild(DateInput());

    return date;
  }

  // ---------------------- PRIORITY INPUT ----------------------
  function Priority(priorityVal) {
    function PriorityInput() {
      priorityInput = document.createElement("select");
      priorityInput.setAttribute("id", "priority-input");

      priorityInput.innerHTML = `
        <option value="low">🟢 Low</option>
        <option value="medium">🟡 Medium</option>
        <option value="high">🔴 High</option>
    `;

      if (priorityVal) {
        priorityInput.querySelectorAll("option").forEach((option) => {
          if (option.value === priorityVal) option.setAttribute("selected", true);
        });
      }

      return priorityInput;
    }

    const priority = containerMaker("modal-window-priority");
    priority.appendChild(labelMaker("priority-input", "Priority", false));
    priority.appendChild(PriorityInput());

    return priority;
  }

  // ---------------------- PRIORITY INPUT ----------------------
  function Projects(projectsVal) {
    function ProjectsInput() {
      projectsInput = document.createElement("select");
      projectsInput.setAttribute("id", "projects-input");

      const projectsData = Data.getProjects();
      projectsData.forEach((project) => {
        const option = document.createElement("option");
        option.value = project;
        option.textContent = project.slice(0, 1).toUpperCase() + project.slice(1);
        projectsInput.appendChild(option);
      });

      const placeholderOption = document.createElement("option");
      placeholderOption.setAttribute("hidden", true);
      placeholderOption.setAttribute("disabled", true);
      placeholderOption.textContent = "";
      placeholderOption.value = "";
      projectsInput.appendChild(placeholderOption);

      if (projectsVal) {
        projectsInput.querySelectorAll("option").forEach((option) => {
          if (option.value === projectsVal) option.setAttribute("selected", true);
        });
      } else {
        projectsInput.querySelectorAll("option").forEach((option) => {
          if (!option.value) option.setAttribute("selected", true);
        });
      }

      return projectsInput;
    }

    const projects = containerMaker("modal-window-projects");
    projects.appendChild(labelMaker("projects-input", "Projects", false));
    projects.appendChild(ProjectsInput());

    return projects;
  }

  function updateProjects() {
    projectsInput.innerHTML = "";
    const projectsData = Data.getProjects();
    projectsData.forEach((project) => {
      const option = document.createElement("option");
      option.value = project;
      option.textContent = project.slice(0, 1).toUpperCase() + project.slice(1);
      projectsInput.appendChild(option);
    });
  }

  // ---------------------- CANCEL BUTTON ----------------------
  function CancelButton() {
    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";
    cancelButton.classList.add("cancel-btn");
    cancelButton.addEventListener("click", handleCancelButton);

    return cancelButton;
  }

  function handleCancelButton() {
    ModalBackground.hide();
  }

  // ---------------------- CONFIRM BUTTON ----------------------
  function ConfirmButton() {
    const confirmButton = document.createElement("button");
    confirmButton.textContent = "Confirm";
    confirmButton.classList.add("confirm-btn");
    confirmButton.addEventListener("click", handleConfirmButton);

    return confirmButton;
  }

  function handleConfirmButton() {
    const todoData = getDataFromInputs();
    if (!todoData) return; // Cancel if the user didn't fill out all necessary inputs
    Data.addTodo(todoData);
    TodoList.addTodo(todoData);
    ProjectsList.updateCounts();
    TodayButton.updateCount();
    WeekButton.updateCount();
  }

  function getDataFromInputs() {
    const title = titleInput.value;
    const description = descriptionInput.value;
    const dueDate = dateInput.value;
    const priority = priorityInput.value;
    const project = projectsInput.value;

    if (!title) {
      window.alert("Please enter a Title");
      return;
    }
    return { title, description, dueDate, priority, project };
  }

  // ---------------------- SAVE BUTTON ----------------------
  function SaveButton() {
    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.classList.add("save-btn");
    saveButton.addEventListener("click", handleSaveButton);

    return saveButton;
  }

  function handleSaveButton(e) {
    const updatedData = getDataFromInputs();
    const id = e.target.closest(".modal-window").dataset.id;
    Data.updateTodo(updatedData, id);
    TodoList.updateTodo(id);
    ProjectsList.updateCounts();
    TodayButton.updateCount();
    WeekButton.updateCount();
  }

  // ---------------------- WINDOW LAYOUTS ----------------------
  function newTodo() {
    modalWindow.innerHTML = "";
    modalWindow.appendChild(Header("New Todo"));
    modalWindow.appendChild(Title());
    modalWindow.appendChild(Description());
    modalWindow.appendChild(Date());
    modalWindow.appendChild(Priority());
    modalWindow.appendChild(Projects());
    modalWindow.appendChild(CancelButton());
    modalWindow.appendChild(ConfirmButton());
    return modalWindow;
  }

  function editTodo({ title: titleVal, description: descriptionVal, dueDate: dateVal, priority: priorityVal, project: projectsVal, id }) {
    modalWindow.innerHTML = "";
    modalWindow.dataset.id = id;
    modalWindow.appendChild(Header("Edit Todo"));
    modalWindow.appendChild(Title(titleVal));
    modalWindow.appendChild(Description(descriptionVal));
    modalWindow.appendChild(Date(dateVal));
    modalWindow.appendChild(Priority(priorityVal));
    modalWindow.appendChild(Projects(projectsVal));
    modalWindow.appendChild(CancelButton());
    modalWindow.appendChild(SaveButton());
    return modalWindow;
  }

  function init() {
    modalWindow = document.createElement("div");
    modalWindow.classList.add("modal-window");
  }

  init();

  return { newTodo, editTodo, updateProjects };
})();

const ModalBackground = (function () {
  let ModalBackground;

  function init() {
    ModalBackground = document.createElement("div");
    ModalBackground.classList.add("todo-modal-background");
    ModalBackground.classList.add("hidden");
    ModalBackground.appendChild(ModalWindow.newTodo());
  }

  function get() {
    return ModalBackground;
  }

  function hide() {
    ModalBackground.classList.add("hidden");
  }

  function showNewTodoWindow() {
    ModalBackground.classList.remove("hidden");
    ModalWindow.newTodo();
  }

  function showEditTodoWindow(todoData) {
    ModalBackground.classList.remove("hidden");
    ModalWindow.editTodo(todoData);
  }

  init();

  return { get, hide, showNewTodoWindow, showEditTodoWindow };
})();

export default ModalBackground;
export { ModalWindow };
