class Todo {
  constructor({ title, description, priority, dueDate, project }) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
    this.project = project;
    this.isFinished = false;
  }
  setToFinished() {
    this.isFinished = true;
  }
  setToUnfinished() {
    this.isFinished = false;
  }
}

export default Todo;
