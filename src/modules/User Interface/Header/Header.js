import HeaderStyle from "./Header.css";

const Header = (function () {
  let Header;

  function create() {
    Header = document.createElement("div");
    Header.classList.add("header");
  }

  function addComponents() {}

  function get() {
    return Header;
  }

  function init() {
    create();
    // addComponents();
  }

  return { init, get };
})();

Header.init();

export default Header;
