

import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const paletteGallery = document.querySelector(".gallery");
const socketGallery = createGallerycardsMarkup(galleryItems);

console.log(createGallerycardsMarkup(galleryItems));



paletteGallery.insertAdjacentHTML('beforeend', socketGallery);




function createGallerycardsMarkup(galleryItems) {

	return galleryItems.map(({preview, original, description}) => {
	return `<li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`;
    
})

	.join('');
}


const gallery = new SimpleLightbox('.gallery a', { 
	captionSelector: "img",
	captionsData: "atl",
	captionPosition: "botton",
	captionDelay: "250",
	
 });
 


