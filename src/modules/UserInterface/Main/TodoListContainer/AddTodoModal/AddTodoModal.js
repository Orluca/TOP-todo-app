import AddTodoModalStyle from "./AddTodoModal.css";
import Data from "../../../../Data/Data.js";
import Todo from "../../../../Data/Todo.js";
import TodoList from "../TodoList/TodoList.js";
import Sidebar from "../../Sidebar/Sidebar.js";

const AddTodoModal = (function () {
  let AddTodoModal;

  function create() {
    AddTodoModal = document.createElement("div");
    AddTodoModal.classList.add("add-todo-modal-background");
  }

  function addComponents() {
    AddTodoModal.appendChild(ModalWindow.get());
  }

  function showEditWindow(todoObj) {
    show();
    AddTodoModal.innerHTML = "";
    AddTodoModal.appendChild(ModalWindow.editWindow(todoObj));
  }

  function get() {
    return AddTodoModal;
  }

  function hide() {
    AddTodoModal.classList.add("hidden");
  }

  function show() {
    AddTodoModal.classList.remove("hidden");
  }

  function init() {
    create();
    addComponents();
    ModalWindow.updateProjectInputs();
  }

  return { init, get, hide, show, showEditWindow };
})();

const ModalWindow = (function () {
  let inputProjectEl;
  let modalWindow;

  // FÜR REWRITE: zwei funktionen, eine baut "new todo" mdoal, die andere baut "edit todo" window?!
  function editWindow({ title, description, priority, dueDate, project }) {
    editWindow = document.createElement("div");
    editWindow.classList.add("edit-todo-modal-window");

    editWindow.appendChild(header("Edit Todo"));
    editWindow.appendChild(inputTitle(title));
    editWindow.appendChild(inputDescription(description));
    editWindow.appendChild(inputDate(dueDate));

    const priorityEl = inputPriority();
    priorityEl.querySelectorAll("option").forEach((option) => {
      if (option.value === priority) option.setAttribute("selected", true);
    });
    editWindow.appendChild(priorityEl);

    inputProjectEl = inputProject();
    updateProjectInputs();
    inputProjectEl.querySelectorAll("option").forEach((option) => {
      if (option.value === project) option.setAttribute("selected", true);
    });

    editWindow.appendChild(inputProjectEl);
    editWindow.appendChild(cancelBtn());
    editWindow.appendChild(confirmBtn());

    return editWindow;
  }

  function get() {
    modalWindow = document.createElement("div");
    modalWindow.classList.add("add-todo-modal-window");

    modalWindow.appendChild(header("New Todo"));
    modalWindow.appendChild(inputTitle());
    modalWindow.appendChild(inputDescription());
    modalWindow.appendChild(inputDate());
    modalWindow.appendChild(inputPriority());

    modalWindow.appendChild(inputProject());
    modalWindow.appendChild(cancelBtn());
    modalWindow.appendChild(confirmBtn());

    return modalWindow;
  }

  function header(text) {
    const headerContainer = document.createElement("div");
    const header = document.createElement("h2");
    const hr = document.createElement("hr");

    header.textContent = text;

    headerContainer.appendChild(header);
    headerContainer.appendChild(hr);

    return headerContainer;
  }

  function inputTitle(titleVal) {
    const inputTitle = document.createElement("div");

    inputTitle.innerHTML = `
      <label for="title-input">Title:</label>
      <input type="text" id="title-input" value="${titleVal ? titleVal : ""}"/>
    `;

    return inputTitle;
  }

  function inputDescription(descriptionVal) {
    const inputDescription = document.createElement("div");

    inputDescription.innerHTML = `
      <label for="description-input">Description:</label>
      <textarea id="description-input">${descriptionVal ? descriptionVal : ""}</textarea>
    `;

    return inputDescription;
  }

  function inputDate(dueDateVal) {
    const inputDate = document.createElement("div");

    inputDate.innerHTML = `
      <label for="date-input">Date <em>(optional)</em>:</label>
      <input type="datetime-local" id="date-input" value="${dueDateVal ? dueDateVal : ""}"/>
    `;

    return inputDate;
  }

  function inputPriority() {
    const inputPriority = document.createElement("select");
    inputPriority.setAttribute("id", "priority-input");

    inputPriority.innerHTML = `
      <option value="low">🟢 Low</option>
      <option value="medium">🟡 Medium</option>
      <option value="high">🔴 High</option>
    `;

    return inputPriority;
  }

  function inputProject() {
    inputProjectEl = document.createElement("select");
    inputProjectEl.setAttribute("id", "project-input");

    return inputProjectEl;
  }

  function updateProjectInputs() {
    inputProjectEl.innerHTML = "";
    Data.init();
    const projects = Data.getProjects();
    if (!projects) return;

    projects.forEach((projectName) => {
      const option = document.createElement("option");
      option.textContent = projectName;
      option.value = projectName.toLowerCase();
      inputProjectEl.appendChild(option);
    });
  }

  function addProjectInput(projectName) {
    const option = document.createElement("option");
    option.textContent = projectName;
    inputProjectEl.appendChild(option);
  }

  // --------------------- CANCEL BUTTON ---------------------
  function cancelBtn() {
    const cancelBtn = document.createElement("button");
    cancelBtn.textContent = "Cancel";
    cancelBtn.addEventListener("click", handleCancelBtn);

    return cancelBtn;
  }

  function handleCancelBtn() {
    AddTodoModal.hide();
  }

  // --------------------- CONFIRM BUTTON ---------------------

  function confirmBtn() {
    const confirmBtn = document.createElement("button");
    confirmBtn.textContent = "Confirm";
    confirmBtn.addEventListener("click", handleConfirmBtn);

    return confirmBtn;
  }

  function handleConfirmBtn() {
    const todo = new Todo(getData());
    Data.addTodo(todo);
    TodoList.showAll();
    Sidebar.updateTaskAmounts();
    Sidebar.updateProjectButtons();
  }

  function getData() {
    const title = document.querySelector("#title-input").value.toLowerCase();
    const description = document.querySelector("#description-input").value;
    const dueDate = document.querySelector("#date-input").value;
    const priority = document.querySelector("#priority-input").value;
    const project = document.querySelector("#project-input").value.toLowerCase();

    return { title, description, dueDate, priority, project };
  }

  return { get, updateProjectInputs, addProjectInput, editWindow };
})();

AddTodoModal.init();
export default AddTodoModal;
export { ModalWindow };
