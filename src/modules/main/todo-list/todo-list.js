import todoListStyle from "./todo-list.css";
import todoItem from "./todo-item/todo-item.js";

function header() {
  const header = document.createElement("h2");
  header.textContent = "Today";

  return header;
}

function newTodoBtn() {
  const newTodoBtn = document.createElement("div");
  newTodoBtn.classList.add("btn-new-todo");
  newTodoBtn.textContent = "Add Todo";

  return newTodoBtn;
}

function todoList() {
  const todoList = document.createElement("div");
  todoList.classList.add("todo-list");

  todoList.appendChild(header());
  todoList.appendChild(todoItem({ title: "Wash dishes", description: "Wahs dishes description", date: "24.4", priority: "medium" }));
  todoList.appendChild(newTodoBtn());

  return todoList;
}

export default todoList;
