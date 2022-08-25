import todoItemStyle from "./TodoItem.css";
import Data from "../../../../../Data/Data.js";
import ModalBackground from "../../TodoModal/TodoModal.js";
import { TodoList } from "../TodoList.js";
import { ProjectsList, TodayButton, WeekButton } from "../../../Sidebar/Sidebar.js";

const TodoTop = function (titleVal, isFinished, priorityVal) {
  const TodoCheckbox = function () {
    function handleCheckboxClicks(e) {
      const id = e.target.closest(".todo-item").dataset.id;
      const isFinished = e.target.checked;
      Data.changeTodoStatus(id, isFinished);
    }

    const TodoCheckbox = document.createElement("input");
    TodoCheckbox.classList.add("todo-item-checkbox");
    TodoCheckbox.type = "checkbox";
    TodoCheckbox.checked = isFinished;
    TodoCheckbox.addEventListener("change", handleCheckboxClicks);

    return TodoCheckbox;
  };

  const TodoTitle = function () {
    function handleTitleClicks(e) {
      e.target.closest(".todo-item").querySelector(".todo-item-bottom").classList.toggle("hidden");
    }

    const TodoTitle = document.createElement("div");
    TodoTitle.classList.add("todo-item-title");
    TodoTitle.textContent = titleVal;
    TodoTitle.addEventListener("click", handleTitleClicks);

    return TodoTitle;
  };

  const TodoButtons = function () {
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

    function priorityButton() {
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
    TodoButtons.appendChild(priorityButton());

    return TodoButtons;
  };

  const TodoTop = document.createElement("div");
  TodoTop.classList.add("todo-item-top");
  TodoTop.appendChild(TodoCheckbox());
  TodoTop.appendChild(TodoTitle());
  TodoTop.appendChild(TodoButtons());

  return TodoTop;
};

const TodoBottom = function (descriptionVal, dueDateVal, projectName) {
  function TodoDescription() {
    function DescriptionLabel() {
      const label = document.createElement("div");
      label.textContent = "Description:";

      return label;
    }

    function DescriptionValue() {
      const value = document.createElement("div");
      value.textContent = descriptionVal;

      return value;
    }

    const TodoDescription = document.createElement("div");
    TodoDescription.classList.add("todo-item-description");
    TodoDescription.appendChild(DescriptionLabel());
    TodoDescription.appendChild(DescriptionValue());

    return TodoDescription;
  }

  function TodoDueDate() {
    function DateLabel() {
      const label = document.createElement("div");
      label.textContent = "Date:";

      return label;
    }

    function DateValue() {
      const value = document.createElement("div");
      value.textContent = dueDateVal;

      return value;
    }

    const TodoDueDate = document.createElement("div");
    TodoDueDate.classList.add("todo-item-due-date");
    TodoDueDate.appendChild(DateLabel());
    TodoDueDate.appendChild(DateValue());

    return TodoDueDate;
  }

  function TodoProject() {
    function ProjectLabel() {
      const label = document.createElement("div");
      label.textContent = "Project:";

      return label;
    }

    function ProjectValue() {
      const value = document.createElement("div");
      value.textContent = projectName;

      return value;
    }

    const TodoProject = document.createElement("div");
    TodoProject.classList.add("todo-item-project");
    TodoProject.appendChild(ProjectLabel());
    TodoProject.appendChild(ProjectValue());

    return TodoProject;
  }

  const TodoBottom = document.createElement("div");
  TodoBottom.classList.add("todo-item-bottom");
  TodoBottom.classList.add("hidden");
  TodoBottom.appendChild(TodoDescription());
  TodoBottom.appendChild(TodoDueDate());
  TodoBottom.appendChild(TodoProject());

  return TodoBottom;
};

const TodoItem = function ({ title: titleVal, description: descriptionVal, dueDate: dueDateVal, priority: priorityVal, project: projectName, id: uuid, isFinished }) {
  const TodoItem = document.createElement("div");
  TodoItem.classList.add("todo-item");
  TodoItem.dataset.id = uuid;
  TodoItem.appendChild(TodoTop(titleVal, isFinished, priorityVal));
  TodoItem.appendChild(TodoBottom(descriptionVal, dueDateVal, projectName));

  return TodoItem;
};

export default TodoItem;
