import { createSidebar, createTask } from "./uiElements";
import {createTodos} from "./todos";

const addTaskBtnClick = () => {
  const addTaskBtn = document.getElementById("add-task");
  addTaskBtn.addEventListener("click",createTask ); 
};

export {addTaskBtnClick}

