import mainStyle from "./Main.css";
import Sidebar from "./Sidebar/Sidebar.js";
import Content from "./Content/Content.js";

const Main = (function () {
  let Main;

  function create() {
    Main = document.createElement("div");
    Main.classList.add("main");
    // Main.appendChild(Sidebar.get());
    // Main.appendChild(Content.get());
  }

  function get() {
    return Main;
  }

  create();

  return { get };
})();

export default Main;
