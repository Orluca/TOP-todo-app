import SidebarStyle from "./Sidebar.css";

const Sidebar = (function () {
  let Sidebar;

  function create() {
    Sidebar = document.createElement("div");
    Sidebar.classList.add("sidebar");
  }

  function addComponents() {}

  function get() {
    return Sidebar;
  }

  function toggle() {
    Sidebar.classList.toggle("hidden");
  }

  function init() {
    create();
    // addComponents();
  }

  return { init, get, toggle };
})();

Sidebar.init();

export default Sidebar;
