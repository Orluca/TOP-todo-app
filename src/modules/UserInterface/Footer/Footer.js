import FooterStyle from "./Footer.css";

const Footer = (function () {
  let Footer;

  function create() {
    Footer = document.createElement("div");
    Footer.classList.add("footer");
  }

  function addComponents() {}

  function get() {
    return Footer;
  }

  function init() {
    create();
    // addComponents();
  }

  return { init, get };
})();

Footer.init();

export default Footer;
