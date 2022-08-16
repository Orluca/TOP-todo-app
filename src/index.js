import indexStyle from "./index.css";
// import Header from "./modules/header/header.js";
// import Footer from "./modules/footer/footer.js";
import Main from "./modules/UI Components/main/Main.js";
import Data from "./modules/Data.js";

function buildUI() {
  const content = document.querySelector(".content");
  content.appendChild(Main());
}

function initData() {
  // const data = new Data();
  // const localStorage = data.getFromLocalStorage();
  // if (localStorage) data.setTodos(localStorage);
}

function app() {
  buildUI();
  initData();
}

app();
