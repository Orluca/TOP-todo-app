import AddTodoModalStyle from "./AddTodoModal.css";

const AddTodoModal = (function () {
  let AddTodoModal;

  function create() {
    AddTodoModal = document.createElement("div");
    AddTodoModal.classList.add("add-todo-modal-background");
  }

  function addComponents() {
    AddTodoModal.appendChild(AddTodoModalComponents.modalWindow());
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

const AddTodoModalComponents = (function () {
  function modalWindow() {
    const modalWindow = document.createElement("div");
    modalWindow.classList.add("add-todo-modal-window");

    modalWindow.appendChild(inputTitle());
    modalWindow.appendChild(inputDescription());
    modalWindow.appendChild(inputDate());
    modalWindow.appendChild(inputPriority());

    return modalWindow;
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
      <label for="date-input">Date:</label>
      <input type="datetime-local" id="date-input"/>
    `;

    return inputDate;
  }

  function inputPriority() {
    const inputPriority = document.createElement("select");

    inputPriority.innerHTML = `
      <option value="low">🟢 Low</option>
      <option value="medium">🟡 Medium</option>
      <option value="high">🔴 High</option>
    `;

    return inputPriority;
  }

  return { modalWindow };
})();

AddTodoModal.init();
export default AddTodoModal;
