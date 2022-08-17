import AddTodoModalStyle from "./AddTodoModal.css";

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

    modalWindow.appendChild(inputTitle());
    modalWindow.appendChild(inputDescription());
    modalWindow.appendChild(inputDate());
    modalWindow.appendChild(inputPriority());
    modalWindow.appendChild(confirmBtn());

    return modalWindow;
  }

  function inputTitle() {
    const inputTitle = document.createElement("div");
    // inputTitle.setAttribute("id", "title-input");

    inputTitle.innerHTML = `
      <label for="title-input">Title:</label>
      <input type="text" id="title-input"/>
    `;

    return inputTitle;
  }

  function inputDescription() {
    const inputDescription = document.createElement("div");
    // inputDescription.setAttribute("id", "description-input");

    inputDescription.innerHTML = `
      <label for="description-input">Description:</label>
      <textarea id="description-input"></textarea>
    `;

    return inputDescription;
  }

  function inputDate() {
    const inputDate = document.createElement("div");
    // inputDate.setAttribute("id", "date-input");

    inputDate.innerHTML = `
      <label for="date-input">Date:</label>
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

  function confirmBtn() {
    const confirmBtn = document.createElement("button");
    confirmBtn.textContent = "Confirm";
    confirmBtn.addEventListener("click", function () {
      console.log(getData());
    });

    return confirmBtn;
  }

  function getData() {
    const titleInput = document.querySelector("#title-input");
    const descriptionInput = document.querySelector("#description-input");
    const dateInput = document.querySelector("#date-input");
    const priorityInput = document.querySelector("#priority-input");

    const title = titleInput.value;
    const description = descriptionInput.value;
    const date = dateInput.value;
    const priority = priorityInput.value;

    return { title, description, date, priority };
  }

  return { get };
})();

AddTodoModal.init();
export default AddTodoModal;
