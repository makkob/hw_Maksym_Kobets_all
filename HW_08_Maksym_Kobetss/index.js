import gallery from "./gallery-items.js";

let ulRef = document.querySelector(".js-gallery");

gallery.forEach((img) => {
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

function open(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  lightBoxImageRef.src = event.target.dataset.source;
  lightBoxImageRef.alt = event.target.alt;

  lightBoxRef.classList.toggle("is-open");
  //   idx = Number(event.target.dataset.index);

  lightBoxButtonRef.addEventListener("click", close);
  lightBoxOverlayRef.addEventListener("click", close);
}

function close() {
  lightBoxRef.classList.toggle("is-open");
  lightBoxImageRef.src = "";
  //   window.removeEventListener("keydown", keyAction);
  console.log("close");
}

// function next (){

// }

ulRef.addEventListener("click", open);
