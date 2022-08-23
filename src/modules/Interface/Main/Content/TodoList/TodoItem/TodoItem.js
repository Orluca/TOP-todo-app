import todoItemStyle from "./TodoItem.css";

const TodoCheckbox = function (isFinished) {
  const TodoCheckbox = document.createElement("input");
  TodoCheckbox.classList.add("todo-item-checkbox");
  TodoCheckbox.type = "checkbox";
  TodoCheckbox.checked = isFinished;

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

    return editButton;
  }

  function deleteButton() {
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("todo-item-delete-btn");
    deleteButton.textContent = "Delete";

    return deleteButton;
  }

  function priorityButton(priorityVal) {
    const priorityButton = document.createElement("button");
    priorityButton.classList.add("todo-item-priority-btn");
    if (priorityVal === "medium") priorityButton.textContent = "🟡";

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
  let TodoItem;

  function init() {
    TodoItem = document.createElement("div");
    TodoItem.classList.add("todo-item");
    TodoItem.dataset.id = uuid;
    TodoItem.appendChild(TodoTitle(titleVal));
    TodoItem.appendChild(TodoCheckbox(isFinished));
    TodoItem.appendChild(TodoButtons(priorityVal));
    TodoItem.appendChild(TodoExpandable(descriptionVal, dueDateVal));
  }

  init();

  return TodoItem;
};

export default TodoItem;
