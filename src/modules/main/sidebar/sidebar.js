import sidebarStyle from "./sidebar.css";
// import iconToday from "./assets/icon-today.png";
import SidebarButton from "./sidebar-button/sidebar-button.js";
import sidebarButton from "./sidebar-button/sidebar-button.js";

// // --------------------- TODAYS TASKS BUTTON ---------------------
// function todayIcon() {
//   const todayIcon = document.createElement("img");
//   todayIcon.classList.add("sidebar-btn-icon");
//   todayIcon.src = iconToday;

//   return todayIcon;
// }

// function todayText() {
//   const todayText = document.createElement("div");
//   todayText.textContent = "TODAY";

//   return todayText;
// }

// function todayLeft() {
//   const todayLeft = document.createElement("div");
//   todayLeft.classList.add("sidebar-btn-left");

//   todayLeft.appendChild(todayIcon());
//   todayLeft.appendChild(todayText());

//   return todayLeft;
// }

// function todayCount() {
//   const todayCount = document.createElement("div");
//   todayCount.textContent = "6";

//   return todayCount;
// }

// function today() {
//   const today = document.createElement("div");
//   today.classList.add("sidebar-btn");

//   today.appendChild(todayLeft());
//   today.appendChild(todayCount());

//   return today;
// }

// --------------------- SIDEBAR ---------------------
function sidebar() {
  const sidebar = document.createElement("div");
  sidebar.classList.add("sidebar");

  // sidebar.appendChild(today());
  // const btnToday = new SidebarButton("TODAY", "iconToday", 0);
  // sidebar.appendChild(btnToday.createButton());
  sidebar.appendChild(sidebarButton("TODAY", "today", 0));
  sidebar.appendChild(sidebarButton("THIS WEEK", "week", 0));

  return sidebar;
}

export default sidebar;
