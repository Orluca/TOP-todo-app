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

  function get() {
    return AddTodoModal;
  }

  function init() {
    create();
    addComponents();
  }

  return { init, get };
})();

const ModalWindow = (function () {
  function get() {
    const modalWindow = document.createElement("div");
    modalWindow.classList.add("add-todo-modal-window");

    modalWindow.appendChild(header());
    modalWindow.appendChild(inputTitle());
    modalWindow.appendChild(inputDescription());
    modalWindow.appendChild(inputDate());
    modalWindow.appendChild(inputPriority());
    modalWindow.appendChild(confirmBtn());

    return modalWindow;
  }

  function header() {
    const headerContainer = document.createElement("div");
    const header = document.createElement("h2");
    const hr = document.createElement("hr");

    header.textContent = "New Todo";

    headerContainer.appendChild(header);
    headerContainer.appendChild(hr);

    return headerContainer;
  }

  function inputTitle() {
    const inputTitle = document.createElement("div");

    inputTitle.innerHTML = `
      <label for="title-input">Title:</label>
      <input type="text" id="title-input"/>
    `;

    return inputTitle;
  }

  function inputDescription() {
    const inputDescription = document.createElement("div");

    inputDescription.innerHTML = `
      <label for="description-input">Description:</label>
      <textarea id="description-input"></textarea>
    `;

    return inputDescription;
  }

  function inputDate() {
    const inputDate = document.createElement("div");

    inputDate.innerHTML = `
      <label for="date-input">Date <em>(optional)</em>:</label>
      <input type="datetime-local" id="date-input"/>
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
    TodoList.update();
    Sidebar.updateTaskAmounts();
  }

  function getData() {
    const title = document.querySelector("#title-input").value;
    const description = document.querySelector("#description-input").value;
    const dueDate = document.querySelector("#date-input").value;
    const priority = document.querySelector("#priority-input").value;

    return { title, description, dueDate, priority };
  }

  return { get };
})();

AddTodoModal.init();
export default AddTodoModal;
