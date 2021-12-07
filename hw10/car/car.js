let offset = 0;
let sliderline = document.querySelector('.slider-line');

document.querySelector('.next').addEventListener('click', function (){
    offset = offset + 256;
    sliderline.style.left = -offset + 'px'
});