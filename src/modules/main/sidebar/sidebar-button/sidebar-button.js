import sidebarButtonStyle from "./sidebar-button.css";

function icon(src) {
  const buttonIcon = document.createElement("img");
  buttonIcon.classList.add("sidebar-btn-icon");
  buttonIcon.src = src;

  return buttonIcon;
}
function text(name) {
  const buttonText = document.createElement("div");
  buttonText.textContent = name;

  return buttonText;
}
function leftContainer(name, iconSrc) {
  const buttonLeft = document.createElement("div");
  buttonLeft.classList.add("sidebar-btn-left");

  buttonLeft.appendChild(icon(iconSrc));
  buttonLeft.appendChild(text(name));

  return buttonLeft;
}
function count(count) {
  const buttonCount = document.createElement("div");
  buttonCount.textContent = count;

  return buttonCount;
}
function sidebarButton(name, iconSrc, countAmount, id) {
  const sidebarButton = document.createElement("div");
  sidebarButton.classList.add("sidebar-btn");
  sidebarButton.setAttribute("id", id);

  sidebarButton.appendChild(leftContainer(name, iconSrc));
  sidebarButton.appendChild(count(countAmount));

  return sidebarButton;
}

export default sidebarButton;
