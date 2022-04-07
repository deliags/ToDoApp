const content = document.getElementById('content');

// sidebar UI
const createSidebar = () => {

  const sidebar = document.createElement("div");
  sidebar.classList.add("sidebar");
  
  const logo = document.createElement("img");
  logo.src = "../src/images/checklist.png"
  logo.classList.add("logo")
  
  const title = document.createElement("h1");
  title.textContent = "todo"
  
  sidebar.append(logo, title);
  content.appendChild(sidebar);
};

export {
  createSidebar
};