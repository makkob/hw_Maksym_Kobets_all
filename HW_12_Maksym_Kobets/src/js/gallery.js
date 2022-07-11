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
    this.refs.input.addEventListener("input", _.debounce(this.getInput, 500));
    this.get();
  };

  async get() {
    try {
      let response = await fetch(this.URI);

      let data = await response.json();
      console.log(data.hits);

      let markup = galleryMarkup(data.hits);
      this.refs.div.innerHTML = markup;
    } catch (err) {
      console.error(err);
    }
  }
  getInput = () => {
    console.log(this.refs.input.value);
  };
}
