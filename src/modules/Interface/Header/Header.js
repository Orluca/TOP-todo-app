import HeaderStyle from "./Header.css";
import Sidebar from "../Main/Sidebar/Sidebar.js";
import iconMenu from "../../assets/icon-sidebar-toggle.svg";

const Header = (function () {
  let Header;

  function SidebarToggle() {
    function Icon() {
      const icon = document.createElement("img");
      icon.classList.add("sidebar-toggle-icon");
      icon.src = iconMenu;

      return icon;
    }

    const SidebarToggle = document.createElement("button");
    SidebarToggle.addEventListener("click", Sidebar.toggle);
    SidebarToggle.classList.add("sidebar-toggle");
    SidebarToggle.appendChild(Icon());

    return SidebarToggle;
  }

  function Headline() {
    const headline = document.createElement("h1");
    headline.textContent = "Todo List";

    return headline;
  }

  function init() {
    Header = document.createElement("header");
    Header.classList.add("header");
    Header.appendChild(SidebarToggle());
    Header.appendChild(Headline());
  }

  function get() {
    return Header;
  }

  init();

  return { get };
})();

export default Header;
