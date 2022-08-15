import headerStyle from "./header.css";

function title() {
  const title = document.createElement("h1");
  title.textContent = "TODO APP";

  return title;
}

// ############## BUTTONS LEFT ##############

function btnToggleSidebar() {
  const btnToggleSidebar = document.createElement("button");
  btnToggleSidebar.classList.add("btn-toggle-sidebar");
  btnToggleSidebar.textContent = "Toggle Side";

  return btnToggleSidebar;
}

function buttonsLeft() {
  const buttonsLeft = document.createElement("div");
  buttonsLeft.classList.add("btns-left");

  buttonsLeft.appendChild(btnToggleSidebar());

  return buttonsLeft;
}

// ############## BUTTONS RIGHT ##############

function btnDarkMode() {
  const btnDarkMode = document.createElement("button");
  btnDarkMode.classList.add("btn-dark-mode");
  btnDarkMode.textContent = "Dark Mode";

  return btnDarkMode;
}

function buttonsRight() {
  const buttonsRight = document.createElement("div");
  buttonsRight.classList.add("btns-right");

  buttonsRight.appendChild(btnDarkMode());

  return buttonsRight;
}

// ############## HEADER MAIN ##############

function header() {
  const header = document.createElement("div");
  header.classList.add("header");

  header.appendChild(buttonsLeft());
  header.appendChild(title());
  header.appendChild(buttonsRight());

  return header;
}

export default header;
