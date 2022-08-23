import footerStyle from "./Footer.css";

const Footer = (function () {
  let Footer;

  function init() {
    Footer = document.createElement("footer");
    Footer.classList.add("footer");
  }

  function get() {
    return Footer;
  }

  init();

  return { get };
})();

export default Footer;
