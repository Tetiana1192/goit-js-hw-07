import { galleryItems } from './gallery-items.js';
// Change code below this line



// console.log(galleryItems);




const paletteGallery = document.querySelector(".gallery");
const socketGallery = createGallerycardsMarkup(galleryItems);

console.log(createGallerycardsMarkup(galleryItems));



paletteGallery.insertAdjacentHTML('beforeend', socketGallery);




function createGallerycardsMarkup(galleryItems) {

	return galleryItems.map(({preview, original, description})=> {
	return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
    
})

	.join('');
}

paletteGallery.addEventListener("click", galleryModal);

function galleryModal(evt) {
	evt.preventDefault();
	const galleryImgBig = evt.target.classList.contains("gallery__image");	
	if (!galleryImgBig) {
		return;
	}
	const imgValue = evt.target;
	let parentImg = imgValue.closest(".gallery__image");
	parentImg = basicLightbox.create(`
	<img width="1280" height="800" src = "${parentImg.dataset.source}">`)
	.show()

}