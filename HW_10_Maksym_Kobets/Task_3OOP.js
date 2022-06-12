import refs from "./refs.js";

class Promotion {
  constructor(refs) {
    this.refs = refs;
  }

  init() {
    refs.input.addEventListener("change", this.getTimeCode);
  }

  getTimeCode = () => {
    let promotion = new Date(refs.input.value).getTime();

    if (this.refs.input.value) {
      this.setPromotion(promotion);
      this.refs.input.removeEventListener("change", this.getTimeCode);
    }
  };

  setPromotion = (promotion) => {
    let promitionTimerId = setInterval(() => {
      let dist = promotion - Date.now();

      let days = Math.floor(dist / 1000 / 60 / 60 / 24);
      let hours = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let mins = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((dist % (1000 * 60)) / 1000);

      this.refs.days.innerText = days;
      this.refs.hours.innerText = hours;
      this.refs.mins.innerText = mins;
      this.refs.secs.innerText = seconds;

      if (dist < 0) {
        clearInterval(promitionTimerId);
        this.refs.p.innerText = "Promotion ended";
        this.refs.timer.classList.add("off");
      }
    }, 1000);
  };
}
let homeWorkPromotion = new Promotion(refs);

homeWorkPromotion.init();
