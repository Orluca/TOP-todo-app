import HeaderStyle from "./Header.css";
// import Sidebar from "../Main/Sidebar/Sidebar.js";

const Header = (function () {
  let Header;

  function SidebarToggle() {
    const SidebarToggle = document.createElement("button");
    SidebarToggle.textContent = "Sidebar";
    // SidebarToggle.addEventListener("click", Sidebar.toggle);

    return SidebarToggle;
  }

  function init() {
    Header = document.createElement("header");
    Header.classList.add("header");
    Header.appendChild(SidebarToggle());
  }

  function get() {
    return Header;
  }

  init();

  return { get };
})();

export default Header;
