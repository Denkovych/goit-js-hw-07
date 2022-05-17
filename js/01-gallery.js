import { galleryItems } from './gallery-items.js';
// Change code below this line
    const instance = basicLightbox.create(`
        <div class="modal">
            <p>
                Your first lightbox with just a few lines of code.
                Yes, it's really that simple.
            </p>
        </div>`)
    instance.close();

const listGallery = document.querySelector('.gallery');

listGallery.addEventListener('click', onClickImage);
    

    const markup = galleryItems.map((image)=>
        `<div class="gallery__item">
        <a class="gallery__link" href="${image.original}">
            <img
            class="gallery__image"
            src="${image.preview}"
            data-source="${image.original}"
            alt="${image.description}"
            />
        </a>
        </div>`).join('');
    listGallery.insertAdjacentHTML( 'beforeend', markup);
    const img = document.querySelector('.gallery__image');
    console.log(img);


function onClickImage(event){
    event.preventDefault();
   if(event.target.nodeName !== "IMG"){
       return; 
    }
    console.log(event.target)
    const srcImages = event.target.dataset.source;
    const instance = basicLightbox.create(
    `<img src="${srcImages}">`
    )
    instance.show(  ); }
    
       
listGallery.addEventListener('keydown',modalOpen);
    
    
function modalOpen(){
        const qwe = document.querySelector(".basicLightbox--img");
    if(!instance.show(  )){
      return;  
    }
     
     //console.log(qwe);  
    
    !instance.show();
} 