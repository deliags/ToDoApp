const content = document.getElementById('content');

// sidebar UI
export const createSidebar = () => {

  const sidebar = document.createElement("div");
  sidebar.classList.add("sidebar");

  const createTitle = () => {
    const titleSection = document.createElement("div");
    titleSection.classList.add("title-section")

    const logo = document.createElement("img");
    logo.src = "../src/images/checklist.png"
    logo.classList.add("logo")

    const title = document.createElement("h1");
    title.textContent = "todo"

    titleSection.append(logo, title);

    return {
      titleSection
    }
  }

  const createCategory = () => {
    const categorySection = document.createElement("div");
    categorySection.classList.add("category-section");

    const iconToday = document.createElement("i");
    iconToday.setAttribute("data-feather", "calendar");
    const today = document.createElement("p");
    today.textContent = "today";

    const iconUnCat = document.createElement("i");
    iconUnCat.setAttribute("data-feather", "archive");
    const uncategorized = document.createElement("p");
    uncategorized.textContent = "uncategorized";

    categorySection.append(iconToday, today, iconUnCat, uncategorized);

    return {
      categorySection
    };
  }

  const createProject = () => {
    const projectSection = document.createElement("div");
    projectSection.classList.add("project-section");

    const iconProject = document.createElement("i");
    iconProject.setAttribute("data-feather", "square");
    const work = document.createElement("p");
    work.textContent = "work";

    const iconProject2 = document.createElement("i");
    iconProject2.setAttribute("data-feather", "square");
    const study = document.createElement("p");
    study.textContent = "study";

    const iconProject3 = document.createElement("i");
    iconProject3.setAttribute("data-feather", "square");
    const gym = document.createElement("p");
    gym.textContent = "gym";

    projectSection.append(iconProject, work, iconProject2, study, iconProject3, gym);

    return {
      projectSection
    }
  }

  sidebar.append(
    createTitle().titleSection,
    createCategory().categorySection,
    createProject().projectSection);
  
  content.appendChild(sidebar);
};

export const createMain = () => {

  const mainSection = document.createElement("div");
  mainSection.classList.add("main");

  const createTask = () => {

    const taskBody = document.createElement('div');
    taskBody.classList.add("task");

    const taskTitle = document.createElement('p');
    taskTitle.textContent = "do shopping";

    taskBody.append(taskTitle);

    console.log(mainSection)
    
    return {
      taskBody
    }

  }
  
  mainSection.append(createTask().taskBody)
  content.appendChild(mainSection);
}



// export {
//   createSidebar, createMain
// };