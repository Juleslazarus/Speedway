const leftBtn = document.querySelector('.leftBtn'); 

const middleBtn = document.querySelector('.middleBtn'); 

const rightBtn = document.querySelector('.rightBtn'); 

const galleryGrid1 = document.querySelector('.galleryGrid1'); 

const galleryGrid2 = document.querySelector('.galleryGrid2'); 

const galleryGrid3 = document.querySelector('.galleryGrid3'); 

//these EL's help the gallery on landing page work: 

leftBtn.addEventListener('click', () => {
    // local 
    galleryGrid1.style.display = 'grid'; 
    //other grids
    galleryGrid2.style.display = 'none';
    galleryGrid3.style.display = 'none'; 
})
middleBtn.addEventListener('click', () => {
    //local grid 
    galleryGrid2.style.display = 'grid'; 
    //other grids: 
    galleryGrid1.style.display = 'none'; 
    galleryGrid3.style.display = 'none'; 
})
rightBtn.addEventListener('click', () => {
    //local grid
    galleryGrid3.style.display = 'grid'; 
    //other grids: 
    galleryGrid1.style.display = 'none'; 
    galleryGrid2.style.display = 'none'; 
})

