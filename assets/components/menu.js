const MenuLinksHandler = () => {
    initMenuHandler();
    menuLinksClickHandler();
    menuLinksScrollHandler();
};

const initMenuHandler = () => {
    let activeLink = document.querySelector('.menu__link-active');
    let menuLinks = [...document.querySelectorAll('.menu__link')];
    menuLinks[0].classList.remove('menu__link-active');
    if (activeLink === null) {
        menuLinks[0].classList.add('menu__link-active');
    }
}

const menuLinksClickHandler = () => {
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

const menuLinksScrollHandler = () => {
    document.addEventListener('scroll', () => {
        let currentPos = window.scrollY;
        let sections = [...document.querySelectorAll('.header, .main > section')];
        let menuLinks = [...document.querySelectorAll('.menu__link')];

        for(let i = 0; i < sections.length; i++){
            if(sections[i].offsetTop <= currentPos + 95 && (sections[i].offsetTop + sections[i].offsetHeight) > currentPos + 95) {
                for(let j = 0; j < menuLinks.length; j++) {
                    menuLinks[j].classList.remove('menu__link-active');
                    if (sections[i].getAttribute('id') === menuLinks[j].getAttribute('href').substring(1)) {
                        menuLinks[j].classList.add('menu__link-active');
                    } else if(document.documentElement.scrollTop === document.documentElement.scrollHeight-document.documentElement.clientHeight) {
                        menuLinks[menuLinks.length - 2].classList.remove('menu__link-active');
                        menuLinks[menuLinks.length - 1].classList.add('menu__link-active');
                    } else {
                        initMenuHandler();
                    }
                }
            }
        }
    })
}

export default MenuLinksHandler;
