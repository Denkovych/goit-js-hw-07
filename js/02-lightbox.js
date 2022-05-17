import { galleryItems } from './gallery-items.js';
// Change code below this line
const listGallery = document.querySelector('.gallery');
listGallery.addEventListener('click', onClickImage);


const markup = galleryItems.map((image)=>
`<a class="gallery__item" href="${image.original}">
    <img
    class="gallery__image"
    src="${image.preview}"
    alt="${image.description}"
    />
</a>` ).join('');
listGallery.insertAdjacentHTML( 'beforeend', markup);

function onClickImage(event){
    event.preventDefault();
   if(event.target.nodeName !== "IMG"){
       return; 
    }
    console.log(event.currentTarget)
    
    var lightbox = `${gallery__item}`.simpleLightbox( `${event.target}` );
    
     }

console.log(galleryItems);
