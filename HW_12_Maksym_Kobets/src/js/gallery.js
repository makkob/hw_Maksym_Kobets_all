export { Gallery };
import "../css/common.css";

import galleryMarkup from "../templates/galleryTemplates.handlebars";
import "../../node_modules/material-icons";
import "lodash";
const basicLightbox = require("basiclightbox");
import {
  alert,
  defaultModules,
} from "../../node_modules/@pnotify/core/dist/PNotify.js";
import * as PNotifyMobile from "../../node_modules/@pnotify/mobile/dist/PNotifyMobile.js";

defaultModules.set(PNotifyMobile, {});

class Gallery {
  constructor(URI, refs) {
    this.URI = URI;
    this.refs = refs;
    this.pageNumber = 1;
  }

  init = () => {
    this.refs.input.addEventListener("input", _.debounce(this.getInput, 800));
    this.fetchIMG();
    this.refs.ul.addEventListener("click", this.onGalleryClick);
  };

  async fetchIMG(searchReq, nextPage) {
    try {
      let response = await fetch(this.URI + searchReq + nextPage);
      let data = await response.json();
      alert({
        title: "Ready",
        text: `${data.total} results found!`,

        hide: true,
        delay: 500,
      });

      let markup = galleryMarkup(data.hits);
      this.refs.ul.insertAdjacentHTML("beforeend", markup);

      this.loadMore();
    } catch (err) {
      alert({
        text: `${err}`,
      });
    }
  }
  getInput = () => {
    this.refs.ul.innerHTML = "";
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

        this.fetchIMG(searchReq, nextPage);
        observer.unobserve(entry.target);
      }
    });
  };

  displayModal = (src) => {
    console.log("test");

    const instance = basicLightbox.create(`
    <div class="modal">
    <img class="gallery-item-modal" src="${src}" width="800" height="600">
    </div>
`);

    instance.show();
  };

  onGalleryClick = (event) => {
    if (event.target.nodeName !== "IMG") {
      return;
    }

    this.displayModal(event.target.dataset.src);
  };
}
