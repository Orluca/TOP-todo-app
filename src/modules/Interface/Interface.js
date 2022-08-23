import interfaceStyle from "./Interface.css";
import Main from "./Main/Main.js";
import Footer from "./Footer/Footer.js";
import Header from "./Header/Header.js";

const Interface = (function () {
  let Interface;

  function init() {
    Interface = document.createElement("div");
    Interface.classList.add("user-interface");
    Interface.appendChild(Header.get());
    Interface.appendChild(Main.get());
    Interface.appendChild(Footer.get());
  }

  function get() {
    return Interface;
  }

  init();

  return { get };
})();

export default Interface;
