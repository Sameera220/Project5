const slideContainer = document.querySelector('.slide-container');
const leftSlide = document.querySelector('.left-slide');
const rightSlide = document.querySelector('.right-slide');
const  buttonUp = document.querySelector('.up-button');
const buttonDown = document.querySelector('.down-buton');
const slideLength = rightSlide.querySelectorAll('div').length;

let activeSlidIndex =0;

leftSlide.style.top = `-${(slideLength-1)*100}vh`

buttonUp.addEventListener('click', () => changeSlide('up'))
buttonDown.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    const sliderHeight = slideContainer.clientHeight;
    if(direction==='up'){
        activeSlidIndex++;

        if (activeSlidIndex > slideLength -1){
            activeSlidIndex=0;
        }
    }

    rightSlide.style.transform = `translateY(-${activeSlidIndex*sliderHeight}px)`
    leftSlide.style.transform = `translateY(${activeSlidIndex*sliderHeight}px)`
}



