class Data {
  constructor() {
    this.todos = [];
  }

  setTodos(data) {
    this.todos = data;
  }

  addTodo(data) {
    this.todos.push(data);
  }

  saveToLocalStorage() {
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  getFromLocalStorage() {
    return JSON.parse(localStorage.getItem("todos"));
  }

  clearLocalStorage() {
    localStorage.removeItem("todos");
  }
}

export default Data;
