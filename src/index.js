import indexStyle from "./index.css";
import Header from "./modules/header/header.js";
import Footer from "./modules/footer/footer.js";
import Main from "./modules/main/main.js";

function app() {
  const content = document.querySelector(".content");

  content.appendChild(Header());
  content.appendChild(Main());
  content.appendChild(Footer());
}

app();
