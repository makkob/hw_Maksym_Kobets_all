import refs from "./js/refs";
import "lodash";

class Counry {
  constructor(refs) {
    this.refs = refs;
  }
  init = () => {
    this.refs.input.addEventListener("input", _.debounce(this.getInput, 500));
  };

  getInput = () => {
    let URI = `https://restcountries.com/v3.1/name/${this.refs.input.value}`;
    this.refs.div.innerHTML = "";
    fetch(URI)
      .then((res) => res.json())
      .then((data) => this.getData(data))
      .catch(console.error);
    this.getData = (data) => {
      if (data.length > 10) {
        PNotify.alert({
          title: "Уточните страну",
        });
      }
      if (data.length <= 10 && data.length !== 1) {
        data.map((country) => {
          this.refs.div.insertAdjacentHTML(
            "beforeend",
            `<li> <img src="${country.flags.png}" style= "height:20px"> ${country.name.official} </li>`
          );
        });
      }
      if (data.length === 1) {
        let templateScript = Handlebars.compile(this.refs.template);
        let markup = templateScript(data);
        this.refs.div.insertAdjacentHTML("beforeend", markup);
      }
    };
  };
}
let HWCountry = new Counry(refs);

HWCountry.init();
