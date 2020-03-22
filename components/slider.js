const SlideHandler = () => {
    initialSlider();
    addSlideHandler();
};

const slide = document.querySelector('.slide');
const slides = [...document.querySelectorAll('.slide__item')];
const sliderWrap = document.querySelector('.slide__wrapper');
const slideItemWidth = document.querySelector('.slide__item').offsetWidth;
let widthSlider = 0;
let direction = -1;

const initialSlider = () => {
    for(let i = 0; i < slides.length; i++) {
        widthSlider += slides[i].offsetWidth;
    }
    sliderWrap.style.width = `${widthSlider}px`;
}

const addSlideHandler = () => {
    document.querySelector('.slider__content').addEventListener('click', (e) => {
        if(e.target.classList.contains('slider__button-prev')) {
            sliderMoveToLeft();
        } else if(e.target.classList.contains('slider__button-next')) {
            sliderMoveToRight();
        }
    sliderWrap.addEventListener('transitionend', resetAnimate);
    })
}

const sliderMoveToLeft = () => {
    if (direction === -1) {
        sliderWrap.appendChild(sliderWrap.firstElementChild);
        direction = 1;
    }
    slide.style.justifyContent = 'flex-end';
    sliderWrap.style.transform = `translate(${slideItemWidth}px)`;
}

const sliderMoveToRight = () => {
    direction = -1;
    slide.style.justifyContent = 'flex-start';
    sliderWrap.style.transform = `translate(-${slideItemWidth}px)`;
}

const resetAnimate = () => {
    if (direction === -1) {
        sliderWrap.appendChild(sliderWrap.firstElementChild);
    } else if (direction === 1) {
        sliderWrap.prepend(sliderWrap.lastElementChild);
    }

    sliderWrap.style.transition = 'none';
    sliderWrap.style.transform = 'translate(0)';
    setTimeout(()=>{
        sliderWrap.style.transition = 'all 0.5s';
    })
}

export default SlideHandler;