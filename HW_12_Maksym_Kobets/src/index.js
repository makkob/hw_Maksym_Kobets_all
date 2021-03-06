import { Gallery } from "./js/gallery";
import refs from "./js/refs.js";

const API_KEY = "28517920-47e926602853ad98d512bf5fa";

const URI = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&per_page=12&key=${API_KEY}`;

let gallery = new Gallery(URI, refs);
gallery.init();
