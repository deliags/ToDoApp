const content = document.getElementById('content');

// sidebar UI
const createSidebar = () => {

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
    projectSection.classList.add("category-section");

    const title = document.createElement("p");
    title.classList.add("project-title")
    title.textContent = "projects";

    const iconProj = document.createElement("i");
    iconProj.setAttribute("data-feather", "square");
    
    projectSection.append(title, iconProj);

    return {projectSection}
  }

  sidebar.append(
    createTitle().titleSection,
    createCategory().categorySection,
    createProject().projectSection);
  
  content.appendChild(sidebar);
};

export {
  createSidebar
};