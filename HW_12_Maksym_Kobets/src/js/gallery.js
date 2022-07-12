export { Gallery };
import "../css/common.css";

import galleryMarkup from "../templates/galleryTemplates.handlebars";
import "../../node_modules/material-icons";
import "lodash";

class Gallery {
  constructor(URI, refs) {
    this.URI = URI;
    this.refs = refs;
  }

  init = () => {
    this.refs.input.addEventListener("input", _.debounce(this.getInput, 800));
    this.fetchIMG();
  };

  async fetchIMG(searchReq) {
    try {
      let response = await fetch(this.URI + searchReq);

      let data = await response.json();

      let markup = galleryMarkup(data.hits);
      this.refs.div.innerHTML = markup;
    } catch (err) {
      console.error(err);
    }
  }
  getInput = () => {
    let findIMG = this.refs.input.value;
    let searchReq = `&q=${findIMG}`;
    this.fetchIMG(searchReq);
  };
}
