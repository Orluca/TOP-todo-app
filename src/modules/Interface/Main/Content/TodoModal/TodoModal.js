import todoModalStyle from "./TodoModal.css";

const ModalWindow = (function () {
  let modalWindow;
  let header;
  let title;

  function Header(text) {
    header = document.createElement("h2");
    header.classList.add("modal-window-header");
    header.textContent = text;

    return header;
  }

  function labelMaker(targetID, name) {
    const label = document.createElement("label");
    label.htmlFor = targetID;
    label.textContent = name;

    return label;
  }

  function containerMaker(className) {
    const container = document.createElement("div");
    container.classList.add(className);

    return container;
  }

  // ---------------------- TITLE INPUT ----------------------
  function Title(titleVal) {
    function TitleInput() {
      const titleInput = document.createElement("input");
      titleInput.type = "text";
      titleInput.value = titleVal ? titleVal : "";
      titleInput.setAttribute("id", "title-input");

      return titleInput;
    }

    const title = containerMaker("modal-window-title");
    title.appendChild(labelMaker("title-input", "Title"));
    title.appendChild(TitleInput());

    return title;
  }

  // ---------------------- DESCRIPTION INPUT ----------------------
  function Description(descriptionVal) {
    function DescriptionInput() {
      const descriptionInput = document.createElement("textarea");
      descriptionInput.textContent = descriptionVal ? descriptionVal : "";
      descriptionInput.setAttribute("id", "description-input");

      return descriptionInput;
    }

    const description = containerMaker("modal-window-description");
    description.appendChild(labelMaker("description-input", "Description"));
    description.appendChild(DescriptionInput());

    return description;
  }

  // ---------------------- DATE INPUT ----------------------
  function Date(dateVal) {
    function DateInput() {
      const dateInput = document.createElement("input");
      dateInput.type = "datetime-local";
      dateInput.value = dateVal ? dateVal : "";
      dateInput.setAttribute("id", "date-input");

      return dateInput;
    }

    const date = containerMaker("modal-window-date");
    date.appendChild(labelMaker("date-input", "Date"));
    date.appendChild(DateInput());

    return date;
  }

  // ---------------------- PRIORITY INPUT ----------------------
  function Priority(priorityVal) {
    function PriorityInput() {
      const priorityInput = document.createElement("select");
      priorityInput.setAttribute("id", "priority-input");

      priorityInput.innerHTML = `
        <option value="low">🟢 Low</option>
        <option value="medium">🟡 Medium</option>
        <option value="high">🔴 High</option>
    `;

      if (priorityVal) {
        priorityInput.querySelectorAll("option").forEach((option) => {
          if (option.value === priorityVal) option.setAttribute("selected", true);
        });
      }

      return priorityInput;
    }

    const priority = containerMaker("modal-window-priority");
    priority.appendChild(labelMaker("priority-input", "Priority"));
    priority.appendChild(PriorityInput());

    return priority;
  }

  // ---------------------- PRIORITY INPUT ----------------------
  function Projects(projectsVal) {
    function ProjectsInput() {
      const projectsInput = document.createElement("select");
      projectsInput.setAttribute("id", "projects-input");

      //   const projects = Data.getProjects();
      const projects = ["programming", "sports", "cooking"];
      projects.forEach((project) => {
        const option = document.createElement("option");
        option.value = project;
        option.textContent = project.slice(0, 1).toUpperCase() + project.slice(1);
        projectsInput.appendChild(option);
      });

      if (projectsVal) {
        projectsInput.querySelectorAll("option").forEach((option) => {
          if (option.value === projectsVal) option.setAttribute("selected", true);
        });
      }

      return projectsInput;
    }

    const projects = containerMaker("modal-window-projects");
    projects.appendChild(labelMaker("projects-input", "Projects"));
    projects.appendChild(ProjectsInput());

    return projects;
  }

  // ---------------------- WINDOW LAYOUTS ----------------------
  function newTodo() {
    modalWindow.innerHTML = "";
    modalWindow.appendChild(Header("New Todo"));
    modalWindow.appendChild(Title());
    modalWindow.appendChild(Description());
    modalWindow.appendChild(Date());
    modalWindow.appendChild(Priority());
    modalWindow.appendChild(Projects());
    return modalWindow;
  }

  function editTodo({ title: titleVal, description: descriptionVal, dueDate: dateVal, priority: priorityVal, project: projectsVal }) {
    modalWindow.innerHTML = "";
    modalWindow.appendChild(Header("Edit Todo"));
    modalWindow.appendChild(Title(titleVal));
    modalWindow.appendChild(Description(descriptionVal));
    modalWindow.appendChild(Date(dateVal));
    modalWindow.appendChild(Priority(priorityVal));
    modalWindow.appendChild(Projects(projectsVal));
    return modalWindow;
  }

  function init() {
    modalWindow = document.createElement("div");
    modalWindow.classList.add("modal-window");
  }

  init();

  return { newTodo, editTodo };
})();

const ModalBackground = (function () {
  let ModalBackground;

  function init() {
    ModalBackground = document.createElement("div");
    ModalBackground.classList.add("todo-modal-background");
    ModalBackground.appendChild(ModalWindow.newTodo());
    // ModalBackground.appendChild(ModalWindow.editTodo({ title: "Learn React", description: "Use Udemy course", dueDate: "2018-06-12T19:30", priority: "low", project: "cooking" }));
  }

  function get() {
    return ModalBackground;
  }

  init();

  return { get };
})();

export default ModalBackground;
