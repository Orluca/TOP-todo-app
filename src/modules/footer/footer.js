import footerStyle from "./footer.css";

function githubLink() {
  const githubLink = document.createElement("a");
  githubLink.textContent = "git";
  githubLink.target = "_blank";
  githubLink.href = "https://github.com/Orluca/TOP-todo-app";

  return githubLink;
}

function footer() {
  const footer = document.createElement("div");
  footer.classList.add("footer");

  footer.appendChild(githubLink());

  return footer;
}

export default footer;
