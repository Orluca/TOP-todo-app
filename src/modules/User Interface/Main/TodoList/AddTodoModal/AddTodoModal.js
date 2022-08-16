import AddTodoModalStyle from "./AddTodoModal.css";

const AddTodoModal = (function () {
  let AddTodoModal;

  function create() {
    AddTodoModal = document.createElement("div");
    AddTodoModal.classList.add("add-todo-modal-background");
  }

  function addComponents() {}

  function get() {
    return AddTodoModal;
  }

  function init() {
    create();
    // addComponents();
  }

  return { init, get };
})();

AddTodoModal.init();
export default AddTodoModal;
