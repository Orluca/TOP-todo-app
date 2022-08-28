import todoItemStyle from "./TodoItem.css";
import Data from "../../../../../Data/Data.js";
import ModalBackground from "../../TodoModal/TodoModal.js";
import TodoListContainer, { TodoList } from "../TodoList.js";
import { ProjectsList, TodayButton, WeekButton } from "../../../Sidebar/Sidebar.js";
import { format, parseISO } from "date-fns";
import iconPen from "../../../../../assets/icon-pen.svg";
import iconDelete from "../../../../../assets/icon-delete.svg";
import iconPriority from "../../../../../assets/icon-priority2.svg";
import iconPriorityGreen from "../../../../../assets/icon-priority2-green.svg";
import iconPriorityYellow from "../../../../../assets/icon-priority2-yellow.svg";
import iconPriorityRed from "../../../../../assets/icon-priority2-red.svg";

const TodoTop = function (titleVal, isFinished, priorityVal) {
  const TodoCheckbox = function () {
    function handleCheckboxClicks(e) {
      const todoItem = e.target.closest(".todo-item");
      const id = todoItem.dataset.id;
      const isFinished = e.target.checked;
      Data.changeTodoStatus(id, isFinished);
      todoItem.classList.toggle("completed");
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
      const todoItem = e.target.closest(".todo-item");
      todoItem.querySelector(".todo-item-bottom").classList.toggle("hidden");
      todoItem.classList.toggle("expanded");
    }

    const TodoTitle = document.createElement("div");
    TodoTitle.classList.add("todo-item-title");
    TodoTitle.textContent = titleVal;
    TodoTitle.addEventListener("click", handleTitleClicks);

    return TodoTitle;
  };

  const TodoButtons = function () {
    function editButton() {
      function Icon() {
        const icon = document.createElement("img");
        icon.src = iconPen;
        icon.classList.add("todo-item-icon");

        return icon;
      }

      const editButton = document.createElement("button");
      editButton.classList.add("todo-item-edit-btn");
      editButton.appendChild(Icon());
      editButton.addEventListener("click", handleEditButton);

      return editButton;
    }

    function handleEditButton(e) {
      const id = e.target.closest(".todo-item").dataset.id;
      const todoData = Data.getTodoItem(id);
      ModalBackground.showEditTodoWindow(todoData);
      TodoListContainer.toggleBlur();
    }

    function deleteButton() {
      function Icon() {
        const icon = document.createElement("img");
        icon.src = iconDelete;
        icon.classList.add("todo-item-icon");

        return icon;
      }

      const deleteButton = document.createElement("button");
      deleteButton.classList.add("todo-item-delete-btn");
      deleteButton.appendChild(Icon());
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
      function Icon() {
        const icon = document.createElement("img");
        icon.classList.add("todo-item-icon");
        icon.classList.add("todo-item-priority-icon");
        if (priorityVal === "low") icon.src = iconPriorityGreen;
        if (priorityVal === "medium") icon.src = iconPriorityYellow;
        if (priorityVal === "high") icon.src = iconPriorityRed;

        return icon;
      }

      const priorityButton = document.createElement("button");
      priorityButton.classList.add("todo-item-priority-btn");
      priorityButton.appendChild(Icon());

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

const TodoBottom = function (descriptionVal, dueDateVal, projectName, priorityVal) {
  function TodoDescription() {
    function DescriptionLabel() {
      const label = document.createElement("div");
      label.classList.add("todo-item-label");
      label.textContent = "Description:";

      return label;
    }

    function DescriptionValue() {
      const value = document.createElement("div");
      value.classList.add("todo-item-description-value");
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
      label.classList.add("todo-item-label");
      label.textContent = "Date:";

      return label;
    }

    function DateValue() {
      const value = document.createElement("div");
      value.classList.add("todo-item-date-value");
      value.textContent = dueDateVal ? format(parseISO(dueDateVal), "MMMM do yyy, HH:mm") : "";

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
      label.classList.add("todo-item-label");
      label.textContent = "Project:";

      return label;
    }

    function ProjectValue() {
      const value = document.createElement("div");
      value.classList.add("todo-item-project-value");
      value.textContent = Data.capitalizeString(projectName);

      return value;
    }

    const TodoProject = document.createElement("div");
    TodoProject.classList.add("todo-item-project");
    TodoProject.appendChild(ProjectLabel());
    TodoProject.appendChild(ProjectValue());

    return TodoProject;
  }

  function TodoPriority() {
    function PriorityLabel() {
      const label = document.createElement("div");
      label.classList.add("todo-item-label");
      label.textContent = "Priority:";

      return label;
    }

    function PriorityValue() {
      const value = document.createElement("div");
      value.textContent = Data.capitalizeString(priorityVal);

      return value;
    }

    const TodoPriority = document.createElement("div");
    TodoPriority.classList.add("todo-item-priority");
    TodoPriority.appendChild(PriorityLabel());
    TodoPriority.appendChild(PriorityValue());

    return TodoPriority;
  }

  const TodoBottom = document.createElement("div");
  TodoBottom.classList.add("todo-item-bottom");
  TodoBottom.classList.add("hidden");
  TodoBottom.appendChild(TodoDescription());
  TodoBottom.appendChild(TodoDueDate());
  TodoBottom.appendChild(TodoProject());
  TodoBottom.appendChild(TodoPriority());

  return TodoBottom;
};

const TodoItem = function ({ title: titleVal, description: descriptionVal, dueDate: dueDateVal, priority: priorityVal, project: projectName, id: uuid, isFinished }) {
  function hideEmpties() {
    if (!TodoItem.querySelector(".todo-item-date-value").textContent) TodoItem.querySelector(".todo-item-due-date").classList.add("hidden");
    if (!TodoItem.querySelector(".todo-item-description-value").textContent) TodoItem.querySelector(".todo-item-description").classList.add("hidden");
    if (!TodoItem.querySelector(".todo-item-project-value").textContent) TodoItem.querySelector(".todo-item-project").classList.add("hidden");
  }

  const TodoItem = document.createElement("div");
  TodoItem.classList.add("todo-item");
  TodoItem.dataset.id = uuid;
  TodoItem.appendChild(TodoTop(titleVal, isFinished, priorityVal));
  TodoItem.appendChild(TodoBottom(descriptionVal, dueDateVal, projectName, priorityVal));
  hideEmpties();

  return TodoItem;
};

export default TodoItem;
