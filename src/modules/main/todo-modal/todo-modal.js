import todoModalStyle from "./todo-modal.css";

// function createInput(inputName, inputType) {
//   function label() {
//     const label = document.createElement("label");
//     label.textContent = inputName.slice(0, 1).toUpperCase() + inputName.slice(1);
//     label.htmlFor = `${inputName}-input`;

//     return label;
//   }

//   function input() {
//     const input = document.createElement("input");
//     input.type = inputType;
//     input.setAttribute("id", `${inputName}-input`);

//     return input;
//   }

//   function container() {
//     const container = document.createElement("div");

//     container.appendChild(label());
//     container.appendChild(input());

//     return container;
//   }

//   return container();
// }

// ----------------------- TITLE -----------------------
function titleLabel() {
  const titleLabel = document.createElement("label");
  titleLabel.textContent = "Title";
  titleLabel.htmlFor = "title-input";

  return titleLabel;
}

function titleInput() {
  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.setAttribute("id", "title-input");

  return titleInput;
}

function title() {
  const title = document.createElement("div");

  title.appendChild(titleLabel());
  title.appendChild(titleInput());

  return title;
}

// ----------------------- DESCRIPTION -----------------------
function descriptionLabel() {
  const descriptionLabel = document.createElement("label");
  descriptionLabel.textContent = "Description";
  descriptionLabel.htmlFor = "description-input";

  return descriptionLabel;
}

function descriptionInput() {
  const descriptionInput = document.createElement("textarea");
  descriptionInput.setAttribute("id", "description-input");

  return descriptionInput;
}

function description() {
  const description = document.createElement("div");

  description.appendChild(descriptionLabel());
  description.appendChild(descriptionInput());

  return description;
}

// ----------------------- DUE DATE -----------------------
function dateLabel() {
  const dateLabel = document.createElement("label");
  dateLabel.textContent = "Date";
  dateLabel.htmlFor = "date-input";

  return dateLabel;
}

function dateInput() {
  const dateInput = document.createElement("input");
  dateInput.type = "date";
  dateInput.setAttribute("id", "date-input");

  return dateInput;
}

function date() {
  const date = document.createElement("div");

  date.appendChild(dateLabel());
  date.appendChild(dateInput());

  return date;
}

// ----------------------- PRIORITY -----------------------
function priorityLabel() {
  const priorityLabel = document.createElement("label");
  priorityLabel.textContent = "Priority";
  priorityLabel.htmlFor = "priority-input";

  return priorityLabel;
}

function priorityInput() {
  const priorityInput = document.createElement("select");
  priorityInput.setAttribute("id", "priority-input");
  priorityInput.innerHTML = `
    <option value="low">Low</option>
    <option value="medium">Medium</option>
    <option value="high">High</option>
  `;

  return priorityInput;
}

function priority() {
  const priority = document.createElement("div");

  priority.appendChild(priorityLabel());
  priority.appendChild(priorityInput());

  return priority;
}

// ----------------------- WINDOW -----------------------
function modalWindow() {
  const modalWindow = document.createElement("div");
  modalWindow.classList.add("modal-window");

  modalWindow.appendChild(title());
  modalWindow.appendChild(description());
  modalWindow.appendChild(date());
  modalWindow.appendChild(priority());
  // modalWindow.appendChild(createInput("title", "text"));
  // modalWindow.appendChild(createInput("description", "text"));
  // modalWindow.appendChild(createInput("duedate", "date"));

  return modalWindow;
}

// ----------------------- BACKGROUND -----------------------

function todoModal() {
  const todoModal = document.createElement("div");
  todoModal.classList.add("modal-background");

  todoModal.appendChild(modalWindow());

  return todoModal;
}

export default todoModal;
