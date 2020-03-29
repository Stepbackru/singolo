const BurgerHandler = () => {
    burgerActive();
};

const burgerActive = () => {
    document.querySelector('.header').addEventListener('click', (e) => {
        if(e.target.classList.contains('burger__icon-wrapper') || e.target.classList.contains('burger__icon')) {
            document.querySelector('.burger').classList.toggle('burger-active');
            document.querySelector('.burger__wrapper').classList.toggle('burger__wrapper-active');
            if(document.querySelector('.burger__wrapper').classList.contains('burger__wrapper-active')) {
                document.querySelector('.burger__wrapper > .logo').style.display = 'block';
                document.querySelector('.burger__wrapper > .menu').style.display = 'flex';
            } else {
                document.querySelector('.burger__wrapper > .logo').removeAttribute('style');
                document.querySelector('.burger__wrapper > .menu').removeAttribute('style');
            }
        }
    })
}


export default BurgerHandler;