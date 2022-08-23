import mainStyle from "./Main.css";
import Sidebar from "./Sidebar/Sidebar.js";
import Content from "./Content/Content.js";

const Main = (function () {
  let Main;

  function init() {
    Main = document.createElement("main");
    Main.classList.add("main");
    // Main.appendChild(Sidebar.get());
    // Main.appendChild(Content.get());
  }

  function get() {
    return Main;
  }

  init();

  return { get };
})();

export default Main;
