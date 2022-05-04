import gallery from "./gallery-items.js";

class Gallery {
  constructor(
    gallery,
    ulRef,
    lightBoxRef,
    lightBoxImageRef,
    lightBoxButtonRef,
    lightBoxOverlayRef,
    indexNow
  ) {
    this.gallery = gallery;
    this.ulRef = ulRef;
    this.lightBoxRef = lightBoxRef;
    this.lightBoxImageRef = lightBoxImageRef;
    this.lightBoxButtonRef = lightBoxButtonRef;
    this.lightBoxOverlayRef = lightBoxOverlayRef;
    this.indexNow = indexNow;
  }

  createGallery() {
    this.gallery.forEach((img, index) => {
      let li = `
            <li class="gallery__item">
              <a
                class="gallery__link"
                href="${img.original}"
              >
                <img
                  class="gallery__image"
                  src="${img.preview}"
                  data-source="${img.original}"
                  data-index="${index}"
                  alt="${img.description}"
                />
              </a>
          
            </li>
            `;

      this.ulRef.insertAdjacentHTML("beforeend", li);
    });
  }

  open = (event) => {
    event.preventDefault();

    if (event.target.nodeName !== "IMG") {
      return;
    }

    this.lightBoxImageRef.src = event.target.dataset.source;
    this.lightBoxImageRef.alt = event.target.alt;

    this.lightBoxRef.classList.toggle("is-open");

    this.lightBoxButtonRef.addEventListener("click", close);
    this.lightBoxOverlayRef.addEventListener("click", close);
  };

  close = () => {
    this.lightBoxRef.classList.remove("is-open");
    this.lightBoxImageRef.src = "";
  };

  nextImage = () => {
    this.indexNow += 1;
    let nextImg = document.querySelector(`[data-index="${this.indexNow}"]`);
    this.lightBoxImageRef.src = nextImg.src;
    this.lightBoxImageRef.alt = nextImg.alt;
    this.lightBoxImageRef.dataset.idx = nextImg.idx;
  };

  prevImage = () => {
    this.indexNow -= 1;
    let prevImg = document.querySelector(`[data-index="${this.indexNow}"]`);
    this.lightBoxImageRef.src = prevImg.src;
    this.lightBoxImageRef.alt = prevImg.alt;
    this.lightBoxImageRef.dataset.idx = prevImg.idx;
  };

  keybord = () => {
    document.addEventListener("keydown", (event) => {
      if (event.code == "Escape") {
        close();
      }
      if (
        event.code == "ArrowRight" &&
        this.indexNow < this.gallery.length - 1
      ) {
        nextImage();
      }
      if (event.code == "ArrowLeft" && this.indexNow > 0) {
        prevImage();
      }
    });
  };

  init = () => {
    createGallery();
    this.ulRef.addEventListener("click", open);
    keybord();
  };
}

let ulRef = document.querySelector(".js-gallery");
let lightBoxRef = document.querySelector(".lightbox");

let lightBoxImageRef = document.querySelector(".lightbox__image");
let lightBoxButtonRef = document.querySelector(".lightbox__button");
let lightBoxOverlayRef = document.querySelector(".lightbox__overlay");
let indexNow = 0;

let homeWorkGallery = new Gallery(
  gallery,
  ulRef,
  lightBoxRef,
  lightBoxImageRef,
  lightBoxButtonRef,
  lightBoxOverlayRef,
  indexNow
);

homeWorkGallery.init();
