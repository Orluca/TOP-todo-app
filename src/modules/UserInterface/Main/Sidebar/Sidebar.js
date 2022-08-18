import SidebarStyle from "./Sidebar.css";
import iconToday from "./assets/icon-today.svg";

const Sidebar = (function () {
  let Sidebar;

  function TodaysTodos() {
    const TodaysTodos = document.createElement("div");
    TodaysTodos.classList.add("sidebar-button");

    const leftContainer = document.createElement("div");
    leftContainer.classList.add("sidebar-button-left");
    const icon = document.createElement("img");
    icon.src = iconToday;
    icon.classList.add("sidebar-icon");
    const name = document.createElement("div");
    name.textContent = "Today";
    leftContainer.appendChild(icon);
    leftContainer.appendChild(name);

    const counter = document.createElement("div");
    counter.classList.add("today-count");
    counter.textContent = "0";

    TodaysTodos.appendChild(leftContainer);
    TodaysTodos.appendChild(counter);

    return TodaysTodos;
  }

  function create() {
    Sidebar = document.createElement("div");
    Sidebar.classList.add("sidebar");
  }

  function addComponents() {
    Sidebar.appendChild(TodaysTodos());
  }

  function get() {
    return Sidebar;
  }

  function toggle() {
    Sidebar.classList.toggle("hidden");
  }

  function init() {
    create();
    addComponents();
  }

  return { init, get, toggle };
})();

Sidebar.init();

export default Sidebar;
