import MainStyle from "./Main.css";

const Main = (function () {
  let Main;

  function create() {
    Main = document.createElement("div");
    Main.classList.add("main");
  }

  function addComponents() {}

  function get() {
    return Main;
  }

  function init() {
    create();
    // addComponents();
  }

  return { init, get };
})();

Main.init();

export default Main;
