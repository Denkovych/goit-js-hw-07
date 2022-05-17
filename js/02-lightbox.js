import { galleryItems } from './gallery-items.js';
// Change code below this line

const listGallery = document.querySelector('.gallery');
const qwe = document.querySelector("a");
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
    console.log(event.target)
    
    var lightbox = new SimpleLightbox(qwe, `${event.target}`);
    
     }

console.log(galleryItems);
