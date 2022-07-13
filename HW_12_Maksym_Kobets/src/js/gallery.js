export { Gallery };
import "../css/common.css";

import galleryMarkup from "../templates/galleryTemplates.handlebars";
import "../../node_modules/material-icons";
import "lodash";

class Gallery {
  constructor(URI, refs) {
    this.URI = URI;
    this.refs = refs;
    this.pageNumber = 1;
  }

  init = () => {
    this.refs.input.addEventListener("input", _.debounce(this.getInput, 800));
    this.fetchIMG();
  };

  async fetchIMG(searchReq, nextPage) {
    try {
      this.refs.ul.innerHTML = "";
      let response = await fetch(this.URI + searchReq + nextPage);

      let data = await response.json();

      let markup = galleryMarkup(data.hits);
      this.refs.ul.insertAdjacentHTML("beforeend", markup);
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
    let options = { rootMargin: "0px 0px 0px 0px" };

    if (!!window.IntersectionObserver) {
      let observer = new IntersectionObserver(this.onObserve, options);

      document.querySelectorAll("#next").forEach((ul) => {
        observer.observe(ul);
      });
    } else {
      console.log("IntersectionObserver is not supported");
    }
  };

  onObserve = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let nextPage = ` &page=${(this.pageNumber += 1)}`;
        let findIMG = this.refs.input.value;
        let searchReq = `&q=${findIMG}`;
        console.log(nextPage);

        this.fetchIMG(searchReq, nextPage);
        observer.unobserve(entry.target);
      }
    });
  };
}
