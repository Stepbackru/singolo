const PhoneScreenBlockHandler = () => {
    verticalPhoneLockHandler();
};

const verticalPhoneLockHandler = () => {
    document.querySelector('.slide__item-vertical').addEventListener('click', (e) => {
        if(e.target.classList.contains('item-vertical__touchButton')) {
            removeScreenBlockVertical();
        }
        if(e.target.classList.contains('item-horizontal__touchButton')) {
            removeScreenBlockHorizontal();
        }
    })
    document.querySelector('.slide__item-horizontal').addEventListener('click', (e) => {
        if(e.target.classList.contains('item-horizontal__touchButton')) {
            removeScreenBlockHorizontal();
        }
    })
}

const removeScreenBlockVertical = () => {
    let screen = document.querySelector('.item-vertical__screenBlocker');
    let computedStyle = getComputedStyle(screen)
    if(computedStyle.opacity === '0') {
        screen.style.opacity = '1';
    } else {
        screen.style.opacity = '0';
    }
}
const removeScreenBlockHorizontal = () => {
    let screen = document.querySelector('.item-horizontal__screenBlocker');
    let computedStyle = getComputedStyle(screen)
    if(computedStyle.opacity === '0') {
        screen.style.opacity = '1';
    } else {
        screen.style.opacity = '0';
    }
}

export default PhoneScreenBlockHandler;