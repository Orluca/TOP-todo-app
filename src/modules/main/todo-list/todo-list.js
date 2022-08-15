import todoListStyle from "./todo-list.css";

function todoList() {
  const todoList = document.createElement("div");
  todoList.classList.add("todo-list");

  return todoList;
}

export default todoList;
