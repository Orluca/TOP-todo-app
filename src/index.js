import index from "./index.css";
import Sidebar from "./modules/sidebar/sidebar.js";
import Header from "./modules/header/header.js";

function app() {
  const content = document.querySelector(".content");

  content.appendChild(Header());
}

app();
