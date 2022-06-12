const startRef = document.querySelector('[data-action="start"]');
const stopRef = document.querySelector('[data-action="stop"]');
const bodyRef = document.querySelector("body");
const colors = ["red", "green", "violet", "gray", "blue", "yellow"];

startRef.addEventListener("click", clickStart);
stopRef.addEventListener("click", clikStop);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
let intervalID;
function clickStart() {
  intervalID = setInterval(() => {
    bodyRef.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, 1000);
  startRef.disabled = true;
}
function clikStop() {
  clearInterval(intervalID);
  startRef.disabled = false;
}
