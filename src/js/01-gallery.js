// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);
console.log(SimpleLightbox);

const galleryList = galleryItems
  .map(
    ({ preview, original, description }) =>
      `
<li class="gallery__item">
   <a class="gallery__link" href=${original}>
      <img class="gallery__image js__img" src=${preview} alt=${description}  />
   </a>
</li>

`
  )
  .join("");

const galleryEl = document.querySelector(".gallery");
galleryEl.insertAdjacentHTML("beforeend", galleryList);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: `alt`,
  captionDelay: 250
});