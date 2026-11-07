import './styles.css';

import welcome from './components/welcome.js';
import menu from './components/menu.js';
import catering from './components/catering.js';



//   ---   DOM Components   ---

const navTabs = document.getElementById("nav-tabs");
const mainContent = document.getElementById("main-content");



//   ---   Event Listeners   ---

navTabs.addEventListener("click", event => {
  const tabId = event.target.id;
  switch (tabId) {
    case "welcome-tab":
      mainContent.innerHTML = welcome;
      break;
    case "menu-tab":
      mainContent.innerHTML = menu;
      break;
    case "catering-tab":
      mainContent.innerHTML = catering;
      break;
  }
  window.scrollTo(0, 0);
});



//   ---   Initialization   ---

mainContent.innerHTML = welcome;