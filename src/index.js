import Data from "./modules/Data/Data.js";
import UserInterface from "./modules/User Interface/UserInterface.js";

function buildUI() {
  const content = document.querySelector(".content");
  content.appendChild(UserInterface.get());
}

function initData() {
  Data.init();
}

function startApp() {
  buildUI();
  initData();
}

startApp();
