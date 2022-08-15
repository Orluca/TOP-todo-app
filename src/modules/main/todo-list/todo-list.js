import todoListStyle from "./todo-list.css";
import todoItem from "./todo-item/todo-item.js";

const todos = [
  //   { title: "Wash dishes", description: "Wahs dishes description", date: "24.4", priority: "medium" },
  //   { title: "Walk dog", description: "Walk dog desc", date: "24.4", priority: "high" },
];

function header() {
  const header = document.createElement("h2");
  header.textContent = "Today";

  return header;
}

function todoList() {
  const todoList = document.createElement("div");
  todoList.classList.add("todo-list");

  todos.forEach((todo) => {
    todoList.appendChild(todoItem(todo));
  });

  return todoList;
}

function newTodoBtn() {
  const newTodoBtn = document.createElement("div");
  newTodoBtn.classList.add("btn-new-todo");
  newTodoBtn.textContent = "Add Todo";

  return newTodoBtn;
}

function updateTodos(data) {
  todos.push(data);
  console.log(todos);
}

function todoSection() {
  const todoSection = document.createElement("div");
  todoSection.classList.add("todo-section");

  todoSection.appendChild(header());
  todoSection.appendChild(todoList());
  todoSection.appendChild(newTodoBtn());

  return todoSection;
}

export default todoSection;
export { updateTodos };
