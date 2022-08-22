import differenceInCalendarWeeksWithOptions from "date-fns/esm/fp/differenceInCalendarWeeksWithOptions/index.js";
import Data from "../../../../../Data/Data";
import TodoItemStyle from "./TodoItem.css";
import iconPriority from "../.././../../../assets/icon-priority.svg";
import AddTodoModal from "../../AddTodoModal/AddTodoModal";

const TodoItem = function ({ title: titleVal, description: descriptionVal, dueDate: dueDateVal, priority: priorityVal, project: projectName, id: uuid }) {
  function checkbox() {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("input-status");

    checkbox.addEventListener("change", handleCheckbox);

    return checkbox;
  }

  function handleCheckbox(e) {
    const id = e.target.closest(".todo-item").dataset.id;
    const status = e.target.checked;
    Data.changeStatus(id, status);
    console.log(Data.getTodoItem(id));
  }

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

    deleteBtn.addEventListener("click", handleDeleteBtn);

    return deleteBtn;
  }

  function handleDeleteBtn(e) {
    const idOfClickedItem = e.target.closest(".todo-item").dataset.id;
    Data.deleteTodo(idOfClickedItem);
    e.target.closest(".todo-item").remove();
  }

  function priorityBtn(priorityVal) {
    const priorityBtn = document.createElement("button");
    const priorityIcon = document.createElement("img");
    priorityIcon.src = iconPriority;
    priorityIcon.classList.add("priority-icon");
    priorityIcon.classList.add(`priority-color-${priorityVal}`);
    priorityBtn.appendChild(priorityIcon);

    return priorityBtn;
  }

  function editBtn() {
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";

    editBtn.addEventListener("click", handleEditBtn);
    return editBtn;
  }

  function handleEditBtn(e) {
    const id = e.target.closest(".todo-item").dataset.id;
    const todoObject = Data.getTodoItem(id);

    AddTodoModal.showEditWindow(todoObject);
  }

  const TodoItem = document.createElement("div");
  TodoItem.classList.add("todo-item");
  TodoItem.dataset.id = uuid;

  TodoItem.appendChild(checkbox());
  TodoItem.appendChild(title(titleVal));
  TodoItem.appendChild(description(descriptionVal));
  TodoItem.appendChild(dueDate(dueDateVal));
  TodoItem.appendChild(priority(priorityVal));
  TodoItem.appendChild(project(projectName));
  TodoItem.appendChild(deleteBtn());
  TodoItem.appendChild(priorityBtn(priorityVal));
  TodoItem.appendChild(editBtn());

  return TodoItem;
};

export default TodoItem;
