import todoItemStyle from "./todo-item.css";

// ----------------- CHECKBOX AND TITLE -----------------
function checkbox() {
  const checkbox = document.createElement("input");
  checkbox.classList.add("todo-item-checkbox");
  checkbox.type = "checkbox";

  return checkbox;
}

function title(val) {
  const title = document.createElement("div");
  title.classList.add("todo-item-title");
  title.textContent = val;

  return title;
}

// ----------------- BUTTONS -----------------
function btnDelete() {
  const btnDelete = document.createElement("button");
  btnDelete.textContent = "🗑";

  return btnDelete;
}

function btnEdit() {
  const btnEdit = document.createElement("button");
  btnEdit.textContent = "🖍";

  return btnEdit;
}

function buttons() {
  const buttons = document.createElement("div");
  buttons.classList.add("todo-item-buttons");

  buttons.appendChild(btnDelete());
  buttons.appendChild(btnEdit());

  return buttons;
}
// ----------------- ENTIRE TOP SECTION -----------------
function top(titleText) {
  const top = document.createElement("div");
  top.classList.add("todo-item-top");
  top.appendChild(checkbox());
  top.appendChild(title(titleText));
  top.appendChild(buttons());

  return top;
}

// ----------------- BOTTOM / EXPANDABLE ADDITIONAL INFO -----------------
function descriptionTitle() {
  const descriptionTitle = document.createElement("h3");
  descriptionTitle.textContent = "Description:";

  return descriptionTitle;
}

function descriptionContent() {
  const descriptionContent = document.createElement("div");
  descriptionContent.textContent = "Lorem ipsium blablablabla";

  return descriptionContent;
}

function description() {
  const description = document.createElement("div");

  description.appendChild(descriptionTitle());
  description.appendChild(descriptionContent());

  return description;
}

function bottom() {
  const bottom = document.createElement("div");
  bottom.classList.add("todo-item-bottom");
  //   bottom.classList.add("hidden");

  bottom.appendChild(description());

  return bottom;
}

// ----------------- THE WHOLE ITEM -----------------
function todoItem(titleText) {
  const todoItem = document.createElement("div");
  todoItem.classList.add("todo-item");

  todoItem.appendChild(top(titleText));
  todoItem.appendChild(bottom());

  return todoItem;
}

export default todoItem;
