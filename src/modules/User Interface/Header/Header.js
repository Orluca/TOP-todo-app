import HeaderStyle from "./Header.css";
import Sidebar from "../Main/Sidebar/Sidebar";

const Header = (function () {
  let Header;

  function create() {
    Header = document.createElement("div");
    Header.classList.add("header");
  }

  function addComponents() {
    Header.appendChild(HeaderComponents.sidebarToggle());
  }

  function get() {
    return Header;
  }

  function init() {
    create();
    addComponents();
  }

  return { init, get };
})();

const HeaderComponents = (function () {
  function sidebarToggle() {
    const sidebarToggle = document.createElement("button");
    sidebarToggle.textContent = "Sidebar";

    sidebarToggle.addEventListener("click", Sidebar.toggle);

    return sidebarToggle;
  }

  return { sidebarToggle };
})();

Header.init();

export default Header;
