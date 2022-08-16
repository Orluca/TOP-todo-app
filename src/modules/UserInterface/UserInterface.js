import UserInterfaceStyle from "./UserInterface.css";
import Main from "./Main/Main.js";
import Footer from "./Footer/Footer.js";
import Header from "./Header/Header.js";

const UserInterface = (function () {
  let UserInterface;

  function create() {
    UserInterface = document.createElement("div");
    UserInterface.classList.add("user-interface");
  }

  function addComponents() {
    UserInterface.appendChild(Header.get());
    UserInterface.appendChild(Main.get());
    UserInterface.appendChild(Footer.get());
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
