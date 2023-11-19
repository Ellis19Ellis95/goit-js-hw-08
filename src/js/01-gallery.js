// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

document.addEventListener('DOMContentLoaded', function () {
    const galleryList = document.querySelector('.gallery');
    let galleryMarkup = '';
  
    galleryItems.forEach(({ preview, original, description }) => {
      galleryMarkup += `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
          </a>
        </li>
      `;
    });
  
    galleryList.insertAdjacentHTML('beforeend', galleryMarkup);
  
    new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,

    });
  });