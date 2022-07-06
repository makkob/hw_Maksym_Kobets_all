import { Gallery } from "./js/gallery";

const API_KEY = "";
const URI = `${API_KEY}`;

let gallery = new Gallery(URI);
gallery.init();
