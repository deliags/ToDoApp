import createUI from "./uiElements.js"

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
      //set color to green
    } else if (priority === "medium") {
      //set color to orange
    } else {
      //set color to red
    }
  }

  return (isDone, title, description, dueDate, setPriority)
}