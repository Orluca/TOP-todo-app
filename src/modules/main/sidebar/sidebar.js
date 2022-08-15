import sidebarStyle from "./sidebar.css";
import SidebarButton from "./sidebar-button/sidebar-button.js";

import iconToday from "./assets/icon-today.png";
import iconWeek from "./assets/icon-week.png";
import iconPlus from "./assets/icon-plus.png";

function projectsHeader() {
  const projectsHeader = document.createElement("h2");
  projectsHeader.textContent = "Projects";

  return projectsHeader;
}

function sidebar() {
  const sidebar = document.createElement("div");
  sidebar.classList.add("sidebar");

  sidebar.appendChild(SidebarButton("Today", iconToday, 0, "btn-today"));
  sidebar.appendChild(SidebarButton("This Week", iconWeek, 0, "btn-this-week"));

  sidebar.appendChild(projectsHeader());
  sidebar.appendChild(SidebarButton("Add new project", iconPlus, "", "btn-new-project"));

  return sidebar;
}

export default sidebar;
