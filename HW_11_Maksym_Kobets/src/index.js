import refs from "./js/refs";
import "lodash";

refs.input.addEventListener("input", _.debounce(getInput, 500));
function getInput() {
  let URI = `https://restcountries.com/v3.1/name/${refs.input.value}`;
  refs.div.innerHTML = "";
  fetch(URI)
    .then((res) => res.json())
    .then((data) => getData(data))
    .catch(console.error);
  function getData(data) {
    if (data.length > 10) {
      PNotify.alert({
        title: "Уточните страну",
      });
    }
    if (data.length <= 10 && data.length !== 1) {
      data.map((country) => {
        refs.div.insertAdjacentHTML(
          "beforeend",
          `<li> <img src="${country.flags.png}" style= "height:20px"> ${country.name.official} </li>`
        );
      });
    }
    if (data.length === 1) {
      let templateScript = Handlebars.compile(refs.template);
      let markup = templateScript(data);
      refs.div.insertAdjacentHTML("beforeend", markup);
    }
  }
}
