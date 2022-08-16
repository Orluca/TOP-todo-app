import UserInterfaceStyle from "./UserInterface.css";
import Main from "./Main/Main.js";

const UserInterface = (function () {
  let UserInterface;

  function create() {
    UserInterface = document.createElement("div");
    UserInterface.classList.add("user-interface");
  }

  function addComponents() {
    UserInterface.appendChild(Main.get());
  }

  function get() {
    return UserInterface;
  }

  function init() {
    create();
    addComponents();
  }

  return { init, get };
})();

UserInterface.init();

export default UserInterface;
