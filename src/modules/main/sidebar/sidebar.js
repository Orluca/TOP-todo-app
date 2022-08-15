import sidebarStyle from "./sidebar.css";

function sidebar() {
  const sidebar = document.createElement("div");
  sidebar.classList.add("sidebar");
  sidebar.textContent = "YO";

  return sidebar;
}

export default sidebar;
