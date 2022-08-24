import { v4 as uuidv4 } from "uuid";

const Data = (function () {
  let todos = [];
  let projects = [];

  function addTodo(todo) {
    todo.isFinished = false;
    todo.id = uuidv4();
    todos.push(todo);
    console.log(todos);
  }

  return { addTodo };
})();

export default Data;
