import { galleryItems } from './gallery-items.js';
// Change code below this line

const divEl = document.querySelector( ".gallery" );

const itemElem = galleryItems.map( ( { preview, original, description } ) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="${ original }">
    <img class="gallery__image" src=${ preview } 
    data-source="${ original }"
    alt=${ description }/>
    </a>
    </div>`;
} );

divEl.insertAdjacentHTML( "afterbegin", itemElem.join("") );

divEl.addEventListener( "click", handleclick );

function handleclick ( event ) {
    event.preventDefault()

    if ( event.target.nodeName !== "IMG" ) {
        return;
    };

    const instance = basicLightbox.create( `
    <img src="${ event.target.dataset.source }" width="800" height="600">`, {
        onShow: ( instance ) => {
            window.addEventListener( "keydown", onEscClick );
        },
        onClose: ( instance ) => {
            window.removeEventListener( 'keydown', onEscClick );
        },
    } );
    
    instance.show();

    function onEscClick ( event ) {
        if ( event.key === "Escape" ) {
            instance.close();
            return;
        };
    };
};