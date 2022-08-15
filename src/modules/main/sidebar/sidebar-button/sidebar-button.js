import sidebarButtonStyle from "./sidebar-button.css";
import iconToday from "../assets/icon-today.png";
import iconWeek from "../assets/icon-week.png";

// class sidebarButton {
//   constructor(name, icon, count) {
//     this.name = name;
//     this.icon = icon;
//     this.count = count;
//   }

//   setCount(count) {
//     this.count = count;
//   }

//   icon() {
//     const buttonIcon = document.createElement("img");
//     buttonIcon.classList.add("sidebar-btn-icon");
//     buttonIcon.src = this.icon;

//     return buttonIcon;
//   }
//   text() {
//     const buttonText = document.createElement("div");
//     buttonText.textContent = this.name;

//     return buttonText;
//   }
//   leftContainer() {
//     const buttonLeft = document.createElement("div");
//     buttonLeft.classList.add("sidebar-btn-left");

//     buttonLeft.appendChild(this.icon());
//     buttonLeft.appendChild(this.text());

//     return buttonLeft;
//   }
//   count() {
//     const buttonCount = document.createElement("div");
//     buttonCount.textContent = "6";

//     return buttonCount;
//   }
//   createButton() {
//     const button = document.createElement("div");
//     button.classList.add("sidebar-btn");

//     button.appendChild(this.leftContainer());
//     button.appendChild(this.count());

//     return button;
//   }
// }

// export default sidebarButton;

//

function icon(src) {
  const imageSources = {
    today: iconToday,
    week: iconWeek,
  };

  const buttonIcon = document.createElement("img");
  buttonIcon.classList.add("sidebar-btn-icon");
  buttonIcon.src = imageSources[src];

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
function sidebarButton(name, iconSrc, countAmount) {
  const sidebarButton = document.createElement("div");
  sidebarButton.classList.add("sidebar-btn");

  sidebarButton.appendChild(leftContainer(name, iconSrc));
  sidebarButton.appendChild(count(countAmount));

  return sidebarButton;
}

export default sidebarButton;
