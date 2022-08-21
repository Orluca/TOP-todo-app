import differenceInCalendarWeeksWithOptions from "date-fns/esm/fp/differenceInCalendarWeeksWithOptions/index.js";
import TodoItemStyle from "./TodoItem.css";

const TodoItem = function ({ title: titleVal, description: descriptionVal, dueDate: dueDateVal, priority: priorityVal, project: projectName, id: uuid }) {
  function title(titleVal) {
    const title = document.createElement("div");
    title.innerHTML = `
      <h3>Title: </h3>
      <div class="title-value">${titleVal}</div>
    `;
    return title;
  }

  function description(descriptionVal) {
    const description = document.createElement("div");
    description.innerHTML = `
      <h3>Description: </h3>
      <div class="description-value">${descriptionVal}</div>
    `;
    return description;
  }

  function dueDate(dueDateVal) {
    const dueDate = document.createElement("div");
    dueDate.innerHTML = `
      <h3>Date: </h3>
      <div class="dueDate-value">${dueDateVal}</div>
    `;
    return dueDate;
  }

  function priority(priorityVal) {
    const priority = document.createElement("div");
    priority.innerHTML = `
      <h3>Priority: </h3>
      <div class="priority-value">${priorityVal}</div>
    `;
    return priority;
  }

  function project(projectName) {
    const project = document.createElement("div");
    project.innerHTML = `
      <h3>Project: </h3>
      <div class="project-value">${projectName}</div>
    `;
    return project;
  }

  function deleteBtn() {
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Del";

    return deleteBtn;
  }

  const TodoItem = document.createElement("div");
  TodoItem.classList.add("todo-item");
  TodoItem.dataset.id = uuid;

  TodoItem.appendChild(title(titleVal));
  TodoItem.appendChild(description(descriptionVal));
  TodoItem.appendChild(dueDate(dueDateVal));
  TodoItem.appendChild(priority(priorityVal));
  TodoItem.appendChild(project(projectName));
  TodoItem.appendChild(deleteBtn());

  return TodoItem;
};

export default TodoItem;
