import HeaderStyle from "./Header.css";
import Sidebar from "../Main/Sidebar/Sidebar.js";
import iconMenu from "../../assets/icon-sidebar-toggle.svg";
import iconSun from "../../assets/icon-sun.svg";
import iconMoon from "../../assets/icon-moon.svg";
import Content from "../Main/Content/Content";

const Header = (function () {
  let Header;

  function HeaderLeft() {
    function SidebarToggle() {
      function Icon() {
        const icon = document.createElement("img");
        icon.classList.add("sidebar-toggle-icon");
        icon.src = iconMenu;

        return icon;
      }

      function handleSidebarToggle() {
        Sidebar.toggle();
        Content.toggleGridSetting();
      }

      const SidebarToggle = document.createElement("button");
      SidebarToggle.addEventListener("click", handleSidebarToggle);
      SidebarToggle.classList.add("sidebar-toggle");
      SidebarToggle.appendChild(Icon());

      return SidebarToggle;
    }

    function Headline() {
      const headline = document.createElement("h1");
      headline.textContent = "Todo List";
      headline.classList.add("headline");

      return headline;
    }

    const headerLeft = document.createElement("div");
    headerLeft.classList.add("header-left");
    headerLeft.appendChild(SidebarToggle());
    headerLeft.appendChild(Headline());

    return headerLeft;
  }

  function DarkModeToggle() {
    function handleDarkModeToggle() {
      document.body.classList.toggle("dark-mode");
    }

    function Input() {
      const input = document.createElement("input");
      input.setAttribute("id", "dark-mode-toggle-input");
      input.type = "checkbox";
      input.addEventListener("change", handleDarkModeToggle);

      return input;
    }

    function Label() {
      function SunIcon() {
        const sun = document.createElement("img");
        sun.classList.add("sun-icon");
        sun.src = iconSun;

        return sun;
      }

      function MoonIcon() {
        const moon = document.createElement("img");
        moon.classList.add("moon-icon");
        moon.src = iconMoon;

        return moon;
      }

      const label = document.createElement("label");
      label.htmlFor = "dark-mode-toggle-input";
      label.classList.add("dark-mode-toggle-label");
      label.appendChild(SunIcon());
      label.appendChild(MoonIcon());

      return label;
    }

    const darkModeToggle = document.createElement("div");
    darkModeToggle.classList.add("dark-mode-toggle");
    darkModeToggle.appendChild(Input());
    darkModeToggle.appendChild(Label());

    return darkModeToggle;
  }

  function init() {
    Header = document.createElement("header");
    Header.classList.add("header");
    Header.appendChild(HeaderLeft());
    Header.appendChild(DarkModeToggle());
  }

  function get() {
    return Header;
  }

  init();

  return { get };
})();

export default Header;
