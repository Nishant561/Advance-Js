const but = document.querySelector('.button'); // Selects the first element with the class 'button'
const img1 = document.querySelector('.image1'); // Selects all elements with the class 'image'
const img2 = document.querySelector('.image2'); // Selects all elements with the class 'image'

but.addEventListener('click',()=>{
    const src1 = img1.src
    const src2 = img2.src

    img1.src = src2;
    img2.src = src1;
})
