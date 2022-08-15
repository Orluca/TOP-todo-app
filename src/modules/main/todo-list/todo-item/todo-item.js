import todoItemStyle from "./todo-item.css";

function checkbox() {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  return checkbox;
}

function title(val) {
  const title = document.createElement("div");
  title.textContent = val;

  return title;
}

function todoItem(titleText) {
  const todoItem = document.createElement("div");
  todoItem.classList.add("todo-item");

  todoItem.appendChild(checkbox());
  todoItem.appendChild(title(titleText));

  return todoItem;
}

export default todoItem;
