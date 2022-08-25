import todoItemStyle from "./TodoItem.css";
import Data from "../../../../../Data/Data.js";
import ModalBackground from "../../TodoModal/TodoModal.js";
import { TodoList } from "../TodoList.js";
import { ProjectsList, TodayButton, WeekButton } from "../../../Sidebar/Sidebar.js";

function handleCheckboxClicks(e) {
  const id = e.target.closest(".todo-item").dataset.id;
  const isFinished = e.target.checked;
  Data.changeTodoStatus(id, isFinished);
}

const TodoLeft = function (titleVal, isFinished) {
  const TodoCheckbox = function () {
    const TodoCheckbox = document.createElement("input");
    TodoCheckbox.classList.add("todo-item-checkbox");
    TodoCheckbox.type = "checkbox";
    TodoCheckbox.checked = isFinished;
    TodoCheckbox.addEventListener("change", handleCheckboxClicks);

    return TodoCheckbox;
  };

  const TodoTitle = function () {
    const TodoTitle = document.createElement("div");
    TodoTitle.classList.add("todo-item-title");
    TodoTitle.textContent = titleVal;

    return TodoTitle;
  };

  const todoLeft = document.createElement("div");
  todoLeft.classList.add("todo-item-left");
  todoLeft.appendChild(TodoCheckbox());
  todoLeft.appendChild(TodoTitle());

  return todoLeft;
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
    ProjectsList.updateCounts();
    TodayButton.updateCount();
    WeekButton.updateCount();
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

const TodoExpandable = function (descriptionVal, dueDateVal, projectName) {
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

  function TodoProject() {
    const TodoProject = document.createElement("div");
    TodoProject.classList.add("todo-item-project");
    TodoProject.textContent = projectName;

    return TodoProject;
  }

  const TodoExpandable = document.createElement("div");
  TodoExpandable.classList.add("todo-item-expandable");
  TodoExpandable.appendChild(TodoDescription());
  TodoExpandable.appendChild(TodoDueDate());
  TodoExpandable.appendChild(TodoProject());

  return TodoExpandable;
};

const TodoItem = function ({ title: titleVal, description: descriptionVal, dueDate: dueDateVal, priority: priorityVal, project: projectName, id: uuid, isFinished }) {
  const TodoItem = document.createElement("div");
  TodoItem.classList.add("todo-item");
  TodoItem.dataset.id = uuid;
  TodoItem.appendChild(TodoLeft(titleVal, isFinished));
  TodoItem.appendChild(TodoButtons(priorityVal));
  TodoItem.appendChild(TodoExpandable(descriptionVal, dueDateVal, projectName));

  return TodoItem;
};

export default TodoItem;
