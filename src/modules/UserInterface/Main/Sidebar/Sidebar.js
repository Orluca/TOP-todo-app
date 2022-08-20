import SidebarStyle from "./Sidebar.css";
import iconToday from "./assets/icon-today.svg";
import iconWeek from "./assets/icon-week.svg";
import iconPlus from "./assets/icon-plus.svg";
import TodoList from "../TodoListContainer/TodoList/TodoList.js";
import Data from "../../../Data/Data.js";
import AddTodoModal from "../TodoListContainer/AddTodoModal/AddTodoModal";
import { ModalWindow } from "../TodoListContainer/AddTodoModal/AddTodoModal";

const Sidebar = (function () {
  let Sidebar;
  let todayBtn;
  let weekBtn;
  let projectButtons;

  function TodayBtn() {
    todayBtn = document.createElement("div");
    todayBtn.classList.add("sidebar-button");
    todayBtn.classList.add("today-btn");

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
    counter.textContent = Data.getAmountOfTasksToday();

    todayBtn.appendChild(leftContainer);
    todayBtn.appendChild(counter);

    todayBtn.addEventListener("click", handleTodayClicks);

    return todayBtn;
  }

  function WeekBtn() {
    weekBtn = document.createElement("div");
    weekBtn.classList.add("sidebar-button");
    weekBtn.classList.add("week-btn");

    const leftContainer = document.createElement("div");
    leftContainer.classList.add("sidebar-button-left");
    const icon = document.createElement("img");
    icon.src = iconWeek;
    icon.classList.add("sidebar-icon");
    const name = document.createElement("div");
    name.textContent = "This Week";
    leftContainer.appendChild(icon);
    leftContainer.appendChild(name);

    const counter = document.createElement("div");
    counter.classList.add("week-count");
    counter.textContent = Data.getAmountOfTasksThisWeek();

    weekBtn.appendChild(leftContainer);
    weekBtn.appendChild(counter);

    weekBtn.addEventListener("click", handleWeekClicks);

    return weekBtn;
  }

  function ProjectsHeader() {
    const projectsHeader = document.createElement("h3");
    projectsHeader.textContent = "Projects";

    return projectsHeader;
  }

  function ProjectButtons() {
    projectButtons = document.createElement("div");
    projectButtons.classList.add("project-buttons");

    return projectButtons;
  }

  function NewProjectButton() {
    const newProjectButton = document.createElement("div");
    newProjectButton.classList.add("sidebar-button");
    newProjectButton.classList.add("new-project-btn");

    const plusIcon = document.createElement("img");
    plusIcon.src = iconPlus;
    plusIcon.classList.add("sidebar-icon");
    const text = document.createElement("div");
    text.textContent = "New Project";

    newProjectButton.appendChild(plusIcon);
    newProjectButton.appendChild(text);
    newProjectButton.addEventListener("click", handleNewProjectClicks);

    return newProjectButton;
  }

  function handleTodayClicks(e) {
    const todayBtn = e.target.closest(".today-btn");
    const weekBtn = document.querySelector(".week-btn");
    todayBtn.classList.toggle("clicked");
    todayBtn.classList.contains("clicked") ? TodoList.showToday() : TodoList.showAll();
    weekBtn.classList.remove("clicked");
  }

  function handleWeekClicks(e) {
    const weekBtn = e.target.closest(".week-btn");
    const todayBtn = document.querySelector(".today-btn");
    weekBtn.classList.toggle("clicked");
    weekBtn.classList.contains("clicked") ? TodoList.showThisWeek() : TodoList.showAll();
    todayBtn.classList.remove("clicked");
  }

  function handleNewProjectClicks() {
    const name = window.prompt("Enter Project Name");
    Data.addProject(name);
    Data.saveToLocalStorage();

    ModalWindow.addProjectInput(name);

    CreateProjectBtn(name);
  }

  function CreateProjectBtn(projectName) {
    const projectBtn = document.createElement("div");
    projectBtn.classList.add("project-btn");
    projectBtn.classList.add(`${projectName.toLowerCase()}-button`);
    const projectBtnName = document.createElement("div");
    projectBtnName.textContent = projectName;
    const projectBtnCount = document.createElement("div");
    projectBtnCount.textContent = Data.getProjectCount(projectName);
    projectBtnCount.classList.add(`${projectName.toLowerCase()}-counter`);
    projectBtn.appendChild(projectBtnName);
    projectBtn.appendChild(projectBtnCount);

    projectButtons.appendChild(projectBtn);
  }

  function updateTaskAmounts() {
    const todayCount = document.querySelector(".today-count");
    todayCount.textContent = Data.getAmountOfTasksToday();
    const weekCount = document.querySelector(".week-count");
    weekCount.textContent = Data.getAmountOfTasksThisWeek();
  }

  function create() {
    Sidebar = document.createElement("div");
    Sidebar.classList.add("sidebar");
  }

  function addComponents() {
    Sidebar.appendChild(TodayBtn());
    Sidebar.appendChild(WeekBtn());
    Sidebar.appendChild(ProjectsHeader());
    Sidebar.appendChild(ProjectButtons());
    Sidebar.appendChild(NewProjectButton());
  }

  function get() {
    return Sidebar;
  }

  function toggle() {
    Sidebar.classList.toggle("hidden");
  }

  function updateProjectButtons() {
    const projects = Data.getProjects();
    if (!projects) return;

    projectButtons.innerHTML = "";

    projects.forEach((projectName) => {
      const projectBtn = document.createElement("div");
      projectBtn.classList.add("project-btn");
      projectBtn.classList.add(`${projectName}-button`);
      projectBtn.dataset.project = projectName;
      const projectBtnName = document.createElement("div");
      projectBtnName.textContent = projectName;
      const projectBtnCount = document.createElement("div");
      projectBtnCount.textContent = Data.getProjectCount(projectName);
      projectBtnCount.classList.add(`${projectName}-counter`);

      projectBtn.appendChild(projectBtnName);
      projectBtn.appendChild(projectBtnCount);
      projectBtn.addEventListener("click", handleProjectButtonClicks);

      projectButtons.appendChild(projectBtn);
    });
  }

  function handleProjectButtonClicks(e) {
    const projectButton = e.target.closest(".project-btn");
    const projectName = projectButton.dataset.project;

    projectButton.classList.toggle("clicked");
    projectButton.classList.contains("clicked") ? TodoList.showProject(projectName) : TodoList.showAll();
    // todayBtn.classList.remove("clicked");
  }

  function init() {
    create();
    addComponents();
    updateProjectButtons();
  }

  return { init, get, toggle, updateTaskAmounts, updateProjectButtons };
})();

Sidebar.init();

export default Sidebar;
