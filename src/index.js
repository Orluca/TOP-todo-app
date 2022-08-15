import indexStyle from "./index.css";
import Header from "./modules/header/header.js";
import Footer from "./modules/footer/footer.js";

function app() {
  const content = document.querySelector(".content");

  content.appendChild(Header());
  content.appendChild(Footer());
}

app();
