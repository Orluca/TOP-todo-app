import Data from "./modules/Data/Data.js";
import Interface from "./modules/Interface/Interface.js";

const App = (function () {
  function initInterface() {
    const content = document.querySelector(".content");
    content.appendChild(Interface.get());
  }

  function initData() {
    // Data.init();
  }

  function start() {
    initData();
    initInterface();
  }

  start();
})();
