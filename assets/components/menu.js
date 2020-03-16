const MenuClickHandler = () => {

    addMenuLinksClickHandler();
    
};

const addMenuLinksClickHandler = () => {
    document.querySelector('.menu').addEventListener('click', (e) => {
        if(e.target.classList.contains('menu__link')) {
            let clickedMenuLink = e.target;
            removeSelectedMenuLink(clickedMenuLink);
        }
    })
}

const removeSelectedMenuLink = (e) => {
    let menuLinks = [...document.querySelectorAll('.menu__link')];
    for(let i = 0; i < menuLinks.length; i++){
        menuLinks[i].classList.remove('menu__link-active');
    }
    e.classList.add('menu__link-active');
}

export default MenuClickHandler;
