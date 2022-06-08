import refs from "./refs.js";
import menuDB from "./menu.json" assert { type: "json" };

const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};
refs.checkBox.addEventListener("change", setLocalStorage);

function setLocalStorage() {
  refs.body.classList.toggle(Theme.LIGHT);
  refs.body.classList.toggle(Theme.DARK);

  if (localStorage.getItem("theme") !== Theme.DARK) {
    localStorage.setItem("theme", Theme.DARK);
  } else {
    localStorage.setItem("theme", Theme.LIGHT);
  }
}
refs.body.classList.add(localStorage.getItem("theme"));

if (localStorage.getItem("theme") == Theme.DARK) {
  refs.checkBox.setAttribute("checked", "true");
}

let templateScript = Handlebars.compile(refs.menuTemplate);
let markup = templateScript(menuDB);
refs.menu.insertAdjacentHTML("beforeend", markup);
