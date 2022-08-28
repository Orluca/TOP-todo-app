import Data from "./modules/Data/Data.js";
import Interface from "./modules/Interface/Interface.js";
import { TodoList } from "./modules/Interface/Main/Content/TodoList/TodoList.js";
import { ProjectsList, TodayButton, WeekButton } from "./modules/Interface/Main/Sidebar/Sidebar.js";
import { ModalWindow } from "./modules/Interface/Main/Content/TodoModal/TodoModal.js";
import Header from "./modules/Interface/Header/Header.js";

const App = (function () {
  function start() {
    // init data
    Data.restoreFromLocalStorage();

    // init interface
    const content = document.querySelector(".app");
    content.appendChild(Interface.get());
    TodoList.restore();
    ProjectsList.restore();
    TodayButton.updateCount();
    WeekButton.updateCount();
    ModalWindow.updateProjects();
    Header.setDarkMode();
  }

  start();
})();
