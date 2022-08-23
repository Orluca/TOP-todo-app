import todoModalStyle from "./TodoModal.css";

const ModalWindowHeader = function () {
  const ModalWindowHeader = document.createElement("h2");
  ModalWindowHeader.classList.add("modal-window-header");
  ModalWindowHeader.textContent = "New Todo";

  return ModalWindowHeader;
};

const ModalWindow = (function () {
  let ModalWindow;

  function init() {
    ModalWindow = document.createElement("div");
    ModalWindow.classList.add("modal-window");
    ModalWindow.appendChild(ModalWindowHeader());
  }

  function get() {
    return ModalWindow;
  }

  init();

  return { get };
})();

const ModalBackground = (function () {
  let ModalBackground;

  function init() {
    ModalBackground = document.createElement("div");
    ModalBackground.classList.add("todo-modal-background");
    ModalBackground.appendChild(ModalWindow.get());
  }

  function get() {
    return ModalBackground;
  }

  init();

  return { get };
})();

export default ModalBackground;
