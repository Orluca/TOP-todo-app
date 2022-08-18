import Todo from "../../../../../Data/Todo";
import TodoItemStyle from "./TodoItem.css";

const TodoItem = function () {
  let TodoItem;

  function title() {
    const title = document.createElement("div");
    title.innerHTML = `
      <h3>Title: </h3>
      <div class="title-value"></div>
    `;
    return title;
  }

  function description() {
    const description = document.createElement("div");
    description.innerHTML = `
      <h3>Description: </h3>
      <div class="description-value"></div>
    `;
    return description;
  }

  function dueDate() {
    const dueDate = document.createElement("div");
    dueDate.innerHTML = `
      <h3>Date: </h3>
      <div class="dueDate-value"></div>
    `;
    return dueDate;
  }

  function priority() {
    const priority = document.createElement("div");
    priority.innerHTML = `
      <h3>Priority: </h3>
      <div class="priority-value"></div>
    `;
    return priority;
  }

  function TodoItem() {
    const TodoItem = document.createElement("div");
    TodoItem.classList.add("todo-item");

    TodoItem.appendChild(title());
    TodoItem.appendChild(description());
    TodoItem.appendChild(dueDate());
    TodoItem.appendChild(priority());

    return TodoItem;
  }
};
