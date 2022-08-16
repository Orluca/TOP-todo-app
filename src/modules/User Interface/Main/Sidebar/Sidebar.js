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

  function hide() {
    Sidebar.classList.add("hidden");
  }

  function show() {
    Sidebar.classList.remove("hidden");
  }

  function init() {
    create();
    // addComponents();
  }

  return { init, get, hide, show };
})();

Sidebar.init();

export default Sidebar;
