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
    this.refs.input.addEventListener("input", _.debounce(this.get, 800));
  };

  async get() {
    try {
      let findIMG = this.refs.input.value;
      console.log(findIMG);
      let searchReq = `&q=${findIMG}`;
      // &page=${page}
      let response = await fetch(this.URI + searchReq);

      let data = await response.json();
      console.log(data.hits);

      let markup = galleryMarkup(data.hits);
      this.refs.div.innerHTML = markup;
    } catch (err) {
      console.error(err);
    }
  }
}
