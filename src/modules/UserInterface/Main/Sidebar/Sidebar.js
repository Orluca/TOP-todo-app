import SidebarStyle from "./Sidebar.css";

const Sidebar = (function () {
  let Sidebar;

  function temp() {
    const temp = document.createElement("div");
    temp.textContent = "This Week";

    return temp;
  }

  function create() {
    Sidebar = document.createElement("div");
    Sidebar.classList.add("sidebar");
  }

  function addComponents() {
    Sidebar.appendChild(temp());
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
