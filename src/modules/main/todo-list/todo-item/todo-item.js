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

  title.addEventListener("click", function (e) {
    const correspondingBottom = e.target.closest(".todo-item").querySelector(".todo-item-bottom");
    correspondingBottom.classList.toggle("hidden");
  });

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
// DESCRIPTION
function descriptionTitle() {
  const descriptionTitle = document.createElement("h3");
  descriptionTitle.textContent = "Description:";

  return descriptionTitle;
}

function descriptionContent(descriptionText) {
  const descriptionContent = document.createElement("div");
  descriptionContent.textContent = descriptionText;

  return descriptionContent;
}

function description(descriptionText) {
  const description = document.createElement("div");

  description.appendChild(descriptionTitle());
  description.appendChild(descriptionContent(descriptionText));

  return description;
}

// DUE DATE
function dateTitle() {
  const dateTitle = document.createElement("h3");
  dateTitle.textContent = "Due Date:";

  return dateTitle;
}

function dateContent(dueDate) {
  const dateContent = document.createElement("div");
  dateContent.textContent = dueDate;

  return dateContent;
}

function date(dueDate) {
  const date = document.createElement("div");

  date.appendChild(dateTitle());
  date.appendChild(dateContent(dueDate));

  return date;
}

// PRIORITY
function priorityTitle() {
  const priorityTitle = document.createElement("h3");
  priorityTitle.textContent = "Priority:";

  return priorityTitle;
}

function priorityContent(priorityVal) {
  const priorityContent = document.createElement("div");
  priorityContent.textContent = priorityVal;

  return priorityContent;
}

function priority(priorityVal) {
  const priority = document.createElement("div");

  priority.appendChild(priorityTitle());
  priority.appendChild(priorityContent(priorityVal));

  return priority;
}

function bottom(descriptionText, dueDate, priorityVal) {
  const bottom = document.createElement("div");
  bottom.classList.add("todo-item-bottom");
  bottom.classList.add("hidden");

  bottom.appendChild(description(descriptionText));
  bottom.appendChild(date(dueDate));
  bottom.appendChild(priority(priorityVal));

  return bottom;
}

// ----------------- THE WHOLE ITEM -----------------
function todoItem(data) {
  const { title: titleText, description: descriptionText, date: dueDate, priority } = data;

  const todoItem = document.createElement("div");
  todoItem.classList.add("todo-item");

  todoItem.appendChild(top(titleText));
  todoItem.appendChild(bottom(descriptionText, dueDate, priority));

  return todoItem;
}

export default todoItem;
