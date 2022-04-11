/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/eventsListeners.js":
/*!********************************!*\
  !*** ./src/eventsListeners.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTaskBtnClick\": () => (/* binding */ addTaskBtnClick)\n/* harmony export */ });\n/* harmony import */ var _uiElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uiElements */ \"./src/uiElements.js\");\n/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos */ \"./src/todos.js\");\n\n\n\nconst addTaskBtnClick = () => {\n  const addTaskBtn = document.getElementById(\"add-task\");\n  addTaskBtn.addEventListener(\"click\",_uiElements__WEBPACK_IMPORTED_MODULE_0__.createTask ); \n};\n\n\n\n\n\n//# sourceURL=webpack://todoapp/./src/eventsListeners.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos */ \"./src/todos.js\");\n/* harmony import */ var _uiElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uiElements */ \"./src/uiElements.js\");\n/* harmony import */ var _eventsListeners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eventsListeners */ \"./src/eventsListeners.js\");\n\n\n\n\n(0,_uiElements__WEBPACK_IMPORTED_MODULE_1__.createSidebar)();\n(0,_eventsListeners__WEBPACK_IMPORTED_MODULE_2__.addTaskBtnClick)();\n\n//# sourceURL=webpack://todoapp/./src/index.js?");

/***/ }),

/***/ "./src/todos.js":
/*!**********************!*\
  !*** ./src/todos.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTodos\": () => (/* binding */ createTodos)\n/* harmony export */ });\n/* harmony import */ var _uiElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uiElements.js */ \"./src/uiElements.js\");\n\n\nconst createTodos = (title, description, dueDate, priority) => {\n\n  const isDone = () => {\n    let taskDone = false;\n\n    if (checkbox.checked) {\n      taskDone = true;\n    }\n    return taskDone;\n  }\n\n  const setPriority = () => {\n    if (priority === \"low\") {\n      taskPriority.classList.add(\"priority-low\");\n    } else if (priority === \"medium\") {\n      taskPriority.classList.add(\"priority-medium\");\n    } else {\n      taskPriority.classList.add(\"priority-high\");\n    }\n  }\n\n  return (isDone, title, description, dueDate, setPriority)\n};\n\n\n\n//# sourceURL=webpack://todoapp/./src/todos.js?");

/***/ }),

/***/ "./src/uiElements.js":
/*!***************************!*\
  !*** ./src/uiElements.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createSidebar\": () => (/* binding */ createSidebar),\n/* harmony export */   \"createTask\": () => (/* binding */ createTask)\n/* harmony export */ });\nconst content = document.getElementById('content');\n\nconst mainSection = document.createElement(\"div\");\n  mainSection.classList.add(\"main\");\n\n// sidebar UI\nconst createSidebar = () => {\n\n  const sidebar = document.createElement(\"div\");\n  sidebar.classList.add(\"sidebar\");\n\n  const createTitle = () => {\n    const titleSection = document.createElement(\"div\");\n    titleSection.classList.add(\"title-section\")\n\n    const logo = document.createElement(\"img\");\n    logo.src = \"../src/images/checklist.png\"\n    logo.classList.add(\"logo\")\n\n    const title = document.createElement(\"h1\");\n    title.textContent = \"todo\"\n\n    titleSection.append(logo, title);\n\n    return {\n      titleSection\n    }\n  }\n\n  const createCategory = () => {\n    const categorySection = document.createElement(\"div\");\n    categorySection.classList.add(\"category-section\");\n\n    const iconToday = document.createElement(\"i\");\n    iconToday.setAttribute(\"data-feather\", \"calendar\");\n    const today = document.createElement(\"p\");\n    today.textContent = \"today\";\n\n    const iconUnCat = document.createElement(\"i\");\n    iconUnCat.setAttribute(\"data-feather\", \"archive\");\n    const uncategorized = document.createElement(\"p\");\n    uncategorized.textContent = \"uncategorized\";\n\n    categorySection.append(iconToday, today, iconUnCat, uncategorized);\n\n    return {\n      categorySection\n    };\n  }\n\n  const createProject = () => {\n    const projectSection = document.createElement(\"div\");\n    projectSection.classList.add(\"project-section\");\n\n    const iconProject = document.createElement(\"i\");\n    iconProject.setAttribute(\"data-feather\", \"square\");\n    const work = document.createElement(\"p\");\n    work.textContent = \"work\";\n\n    const iconProject2 = document.createElement(\"i\");\n    iconProject2.setAttribute(\"data-feather\", \"square\");\n    const study = document.createElement(\"p\");\n    study.textContent = \"study\";\n\n    const iconProject3 = document.createElement(\"i\");\n    iconProject3.setAttribute(\"data-feather\", \"square\");\n    const gym = document.createElement(\"p\");\n    gym.textContent = \"gym\";\n\n    projectSection.append(iconProject, work, iconProject2, study, iconProject3, gym);\n\n    return {\n      projectSection\n    }\n  }\n\n  const addTaskBtn = document.createElement(\"button\");\n  addTaskBtn.setAttribute(\"id\", \"add-task\");\n  addTaskBtn.classList.add(\"add-task\");\n  addTaskBtn.innerText = \"+\"\n\n  sidebar.append(\n    createTitle().titleSection,\n    createCategory().categorySection,\n    createProject().projectSection,\n    addTaskBtn)\n\n  return{sidebar}\n  // content.appendChild(sidebar);\n};\n\n\nconst createTask = () => {\n\n  const taskBody = document.createElement('div');\n  taskBody.classList.add(\"task\");\n\n  const taskPriority = document.createElement(\"div\");\n  taskPriority.classList.add(\"priority-low\");\n\n  const taskTitle = document.createElement('p');\n  taskTitle.textContent = \"do shopping\";\n\n  const taskBtn = document.createElement(\"button\");\n  taskBtn.classList.add(\"task-button\")\n  taskBtn.innerText = \"INFO\"\n\n  const deleteIcon = document.createElement(\"i\");\n  deleteIcon.setAttribute(\"data-feather\", \"x\");\n\n  taskBody.append(taskPriority, taskTitle, taskBtn, deleteIcon);\n\n  \n  mainSection.append(taskBody)\n\n}\n\n\ncontent.append(createSidebar().sidebar,\n  mainSection);\n  \n\n\n//# sourceURL=webpack://todoapp/./src/uiElements.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;