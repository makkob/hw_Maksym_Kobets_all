const daysRef = document.querySelector('[data-value="days"]');
const hoursRef = document.querySelector('[data-value="hours"]');
const minsRef = document.querySelector('[data-value="mins"]');
const secsRef = document.querySelector('[data-value="secs"]');
const pRef = document.querySelector('[data-value="end"]');
const timerRef = document.querySelector(".timer");
const inputRef = document.querySelector(".datetime");
let promotion;
function getTimeCode() {
  promotion = new Date(inputRef.value).getTime();
  if (inputRef.value) {
    setPromotion(promotion);
    inputRef.removeEventListener("change", getTimeCode);
  }
}
inputRef.addEventListener("change", getTimeCode);

function setPromotion(promotionDate) {
  let promitionTimerId = setInterval(() => {
    let dist = promotionDate - Date.now();

    let days = Math.floor(dist / 1000 / 60 / 60 / 24);
    let hours = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let mins = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dist % (1000 * 60)) / 1000);

    daysRef.innerText = days;
    hoursRef.innerText = hours;
    minsRef.innerText = mins;
    secsRef.innerText = seconds;

    if (dist < 0) {
      clearInterval(promitionTimerId);
      pRef.innerText = "Promotion ended";
      timerRef.classList.add("off");
    }
  }, 1000);
}
