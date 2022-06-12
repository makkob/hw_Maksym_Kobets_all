import refs from "./refs.js";

let promotion;
function getTimeCode() {
  promotion = new Date(refs.input.value).getTime();
  if (refs.input.value) {
    setPromotion(promotion);
    refs.input.removeEventListener("change", getTimeCode);
  }
}
refs.input.addEventListener("change", getTimeCode);

function setPromotion(promotionDate) {
  let promitionTimerId = setInterval(() => {
    let dist = promotionDate - Date.now();

    let days = Math.floor(dist / 1000 / 60 / 60 / 24);
    let hours = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let mins = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dist % (1000 * 60)) / 1000);

    refs.days.innerText = days;
    refs.hours.innerText = hours;
    refs.mins.innerText = mins;
    refs.secs.innerText = seconds;

    if (dist < 0) {
      clearInterval(promitionTimerId);
      refs.p.innerText = "Promotion ended";
      refs.timer.classList.add("off");
    }
  }, 1000);
}
