import { galleryItems } from './gallery-items.js';
// Change code below this line



const ulList = document.querySelector( ".gallery" );

const itemElement = galleryItems.map( ( { preview, original, description } ) => {
    return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
} );

ulList.insertAdjacentHTML( "afterbegin", itemElement.join( "" ) );


const lightbox = new SimpleLightbox('.gallery a', { captionsData:"alt",captionDelay: 250 });
