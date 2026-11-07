import './styles.css';

import welcome from './components/welcome.js';
import menu from './components/menu.js';
import catering from './components/catering.js';



//   ---   DOM Components   ---

const header = document.querySelector("header");
const navTabs = document.getElementById("nav-tabs");
const mainContent = document.getElementById("main-content");



//   ---   Event Listeners   ---

window.addEventListener("scroll", event => {
  if (document.documentElement.scrollTop > 100) {
    header.classList.add("bg-espresso");
    header.classList.remove("bg-inherit");
  } 
  else {
    header.classList.add("bg-inherit");
    header.classList.remove("bg-espresso");
  }
});

navTabs.addEventListener("click", event => {
  const tabId = event.target.id;
  switch (tabId) {
    case "welcome-tab":
      mainContent.innerHTML = welcome;
      mainContent.classList.add("welcome");
      break;
    case "menu-tab":
      mainContent.innerHTML = menu;
      mainContent.classList.remove("welcome");
      break;
    case "catering-tab":
      mainContent.innerHTML = catering;
      mainContent.classList.remove("welcome");
      break;
  }
  document.documentElement.scrollTop = 0;
});



//   ---   Initialization   ---

mainContent.innerHTML = welcome;
mainContent.classList.add("welcome");