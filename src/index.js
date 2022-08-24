import Data from "./modules/Data/Data.js";
import Interface from "./modules/Interface/Interface.js";
import { TodoList } from "./modules/Interface/Main/Content/TodoList/TodoList.js";

const App = (function () {
  function start() {
    // init data
    Data.restoreFromLocalStorage();

    // init interface
    const content = document.querySelector(".app");
    content.appendChild(Interface.get());
    TodoList.restore();
  }

  start();
})();
