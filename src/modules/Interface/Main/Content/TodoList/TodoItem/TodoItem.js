import todoItemStyle from "./TodoItem.css";
import Data from "../../../../../Data/Data.js";
import ModalBackground from "../../TodoModal/TodoModal.js";
import { TodoList } from "../TodoList.js";

function handleCheckboxClicks(e) {
  const id = e.target.closest(".todo-item").dataset.id;
  const isFinished = e.target.checked;
  Data.changeTodoStatus(id, isFinished);
}

const TodoCheckbox = function (isFinished) {
  const TodoCheckbox = document.createElement("input");
  TodoCheckbox.classList.add("todo-item-checkbox");
  TodoCheckbox.type = "checkbox";
  TodoCheckbox.checked = isFinished;
  TodoCheckbox.addEventListener("change", handleCheckboxClicks);

  return TodoCheckbox;
};

const TodoTitle = function (titleVal) {
  const TodoTitle = document.createElement("div");
  TodoTitle.classList.add("todo-item-title");
  TodoTitle.textContent = titleVal;

  return TodoTitle;
};

const TodoButtons = function (priorityVal) {
  function editButton() {
    const editButton = document.createElement("button");
    editButton.classList.add("todo-item-edit-btn");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", handleEditButton);

    return editButton;
  }

  function handleEditButton(e) {
    const id = e.target.closest(".todo-item").dataset.id;
    const todoData = Data.getTodoItem(id);
    console.log(todoData);
    ModalBackground.showEditTodoWindow(todoData);
  }

  function deleteButton() {
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("todo-item-delete-btn");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", handleDeleteButton);

    return deleteButton;
  }

  function handleDeleteButton(e) {
    const id = e.target.closest(".todo-item").dataset.id;
    Data.deleteTodo(id);
    TodoList.deleteTodo(id);
  }

  function priorityButton(priorityVal) {
    const priorityButton = document.createElement("button");
    priorityButton.classList.add("todo-item-priority-btn");
    if (priorityVal === "low") priorityButton.textContent = "🟢";
    if (priorityVal === "medium") priorityButton.textContent = "🟡";
    if (priorityVal === "high") priorityButton.textContent = "🔴";

    return priorityButton;
  }

  const TodoButtons = document.createElement("div");
  TodoButtons.classList.add("todo-item-buttons");
  TodoButtons.appendChild(editButton());
  TodoButtons.appendChild(deleteButton());
  TodoButtons.appendChild(priorityButton(priorityVal));

  return TodoButtons;
};

const TodoExpandable = function (descriptionVal, dueDateVal) {
  function TodoDescription() {
    const TodoDescription = document.createElement("div");
    TodoDescription.classList.add("todo-item-description");
    TodoDescription.textContent = descriptionVal;

    return TodoDescription;
  }

  function TodoDueDate() {
    const TodoDueDate = document.createElement("div");
    TodoDueDate.classList.add("todo-item-due-date");
    TodoDueDate.textContent = dueDateVal;

    return TodoDueDate;
  }

  const TodoExpandable = document.createElement("div");
  TodoExpandable.classList.add("todo-item-expandable");
  TodoExpandable.appendChild(TodoDescription());
  TodoExpandable.appendChild(TodoDueDate());

  return TodoExpandable;
};

const TodoItem = function ({ title: titleVal, description: descriptionVal, dueDate: dueDateVal, priority: priorityVal, project: projectName, id: uuid, isFinished }) {
  const TodoItem = document.createElement("div");
  TodoItem.classList.add("todo-item");
  TodoItem.dataset.id = uuid;
  TodoItem.appendChild(TodoCheckbox(isFinished));
  TodoItem.appendChild(TodoTitle(titleVal));
  TodoItem.appendChild(TodoButtons(priorityVal));
  TodoItem.appendChild(TodoExpandable(descriptionVal, dueDateVal));

  return TodoItem;
};

export default TodoItem;
