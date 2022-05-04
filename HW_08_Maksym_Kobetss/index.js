import gallery from "./gallery-items.js";

let ulRef = document.querySelector(".js-gallery");

gallery.forEach((img, index) => {
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

  ulRef.insertAdjacentHTML("beforeend", li);
});

let lightBoxRef = document.querySelector(".lightbox");

let lightBoxImageRef = document.querySelector(".lightbox__image");
let lightBoxButtonRef = document.querySelector(".lightbox__button");
let lightBoxOverlayRef = document.querySelector(".lightbox__overlay");
let indexNow = 0;

function open(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  lightBoxImageRef.src = event.target.dataset.source;
  lightBoxImageRef.alt = event.target.alt;

  lightBoxRef.classList.toggle("is-open");

  lightBoxButtonRef.addEventListener("click", close);
  lightBoxOverlayRef.addEventListener("click", close);
}

function close() {
  lightBoxRef.classList.remove("is-open");
  lightBoxImageRef.src = "";
}

function nextImage() {
  indexNow += 1;
  let nextImg = document.querySelector(`[data-index="${indexNow}"]`);
  lightBoxImageRef.src = nextImg.src;
  lightBoxImageRef.alt = nextImg.alt;
  lightBoxImageRef.dataset.idx = nextImg.idx;
}

function prevImage() {
  indexNow -= 1;
  let prevImg = document.querySelector(`[data-index="${indexNow}"]`);
  lightBoxImageRef.src = prevImg.src;
  lightBoxImageRef.alt = prevImg.alt;
  lightBoxImageRef.dataset.idx = prevImg.idx;
}

document.addEventListener("keydown", (event) => {
  if (event.code == "Escape") {
    close();
  }
  if (event.code == "ArrowRight" && indexNow < gallery.length - 1) {
    nextImage();
  }
  if (event.code == "ArrowLeft" && indexNow > 0) {
    prevImage();
  }
});

ulRef.addEventListener("click", open);
