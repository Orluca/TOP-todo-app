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

    return modalWindow;
  }

  return { modalWindow };
})();

AddTodoModal.init();
export default AddTodoModal;
