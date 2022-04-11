import {createMain} from "./uiElements.js"

const createTodos = (title, description, dueDate, priority) => {

  const isDone = () => {
    let taskDone = false;

    if (checkbox.checked) {
      taskDone = true;
    }
    return taskDone;
  }

  const setPriority = () => {
    if (priority === "low") {
      taskPriority.classList.add("priority-low");
    } else if (priority === "medium") {
      taskPriority.classList.add("priority-medium");
    } else {
      taskPriority.classList.add("priority-high");
    }
  }

  return (isDone, title, description, dueDate, setPriority)
};

export { createTodos };