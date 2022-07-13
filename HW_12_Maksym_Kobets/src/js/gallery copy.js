export { Gallery };
import "../css/common.css";

import galleryMarkup from "../templates/galleryTemplates.handlebars";
import "../../node_modules/material-icons";
import "lodash";

// &page=${page}

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
      this.refs.ul.innerHTML = markup;
      this.loadMore();
    } catch (err) {
      console.error(err);
    }
  }
  getInput = () => {
    let findIMG = this.refs.input.value;
    let searchReq = `&q=${findIMG}`;
    this.fetchIMG(searchReq);
  };

  loadMore = () => {
    let options = { rootMargin: "0px 0px -200px 0px" };

    if (!!window.IntersectionObserver) {
      let observer = new IntersectionObserver(this.onObserve, options);

      document.querySelectorAll("img").forEach((img) => {
        observer.observe(img);
      });
    } else {
      console.log("IntersectionObserver is not supported");
    }
  };

  onObserve = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
      }
    });
  };
}
