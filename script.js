window.addEventListener('DOMContentLoaded', function() {

    //header interactive menu choice
    let menuLink = [...document.querySelectorAll('.menu__link')];
    menuLink.map(e=> {
        e.addEventListener('click', () => {
            for(let i = 0; i < menuLink.length; i++){
                menuLink[i].classList.remove('menu__link-active');
            }
            e.classList.add('menu__link-active');
        })
    })







});