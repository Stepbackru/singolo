const PortfolioHandler = () => {
    filterClickHandler();
};

const filterClickHandler = () => {
    document.querySelector('.filter').addEventListener('click', (e) => {
        if(e.target.classList.contains('filter__item')) {
            let clickedFilterItem = e.target;
            removeSelectedFilterItem(clickedFilterItem);
            if(clickedFilterItem.getAttribute('data-name') === 'all'){
                showAllWorks();
            } else {
                filterWorksBySelectedButton(clickedFilterItem);
            }
        }
    })
}

const removeSelectedFilterItem = (e) => {
    let filterItems = [...document.querySelectorAll('.filter__item')];
    for(let i = 0; i < filterItems.length; i++){
        filterItems[i].classList.remove('filter__item-active');
    }
    e.classList.add('filter__item-active');
}

const showAllWorks = () => {
    let works = [...document.querySelectorAll('.portfolio__item')];
    for(let i = 0; i < works.length; i++) {
        works[i].removeAttribute('style');
        works[i].style.transition = 'none';
    }
}

const filterWorksBySelectedButton = (e) => {
    let works = [...document.querySelectorAll('.portfolio__item')];
    for(let i = 0; i < works.length; i++) {
        works[i].style.display = 'none';
    }
    switch (e.getAttribute('data-name')) {
        case 'webDesign':
            let worksCopyWebD = works.slice();
            let webDStyled = worksCopyWebD.slice().filter(e => e.getAttribute('data-name') === 'webDesign');
            let webD = worksCopyWebD.filter(e => e.getAttribute('data-name') !== 'webDesign');
            resetStylePortfolioItem(works);
            setTimerOfAnimationDelay(webD);
            styledMarginSortPortfolioItem(webDStyled);
            break;
        case 'graphicDesign':
            let worksCopyGraphD = works.slice();
            let graphDStyled = worksCopyGraphD.filter(e => e.getAttribute('data-name') === 'graphicDesign');
            let graphD = worksCopyGraphD.filter(e => e.getAttribute('data-name') !== 'graphicDesign');
            resetStylePortfolioItem(works);
            setTimerOfAnimationDelay(graphD);
            styledMarginSortPortfolioItem(graphDStyled);
            break;
        case 'artwork':
            let worksCopyArt = works.slice();
            let artWDStyled = worksCopyArt.filter(e => e.getAttribute('data-name') === 'artwork');
            let artW = worksCopyArt.filter(e => e.getAttribute('data-name') !== 'artwork');
            resetStylePortfolioItem(works);
            setTimerOfAnimationDelay(artW);
            styledMarginSortPortfolioItem(artWDStyled);
            break;
        default:
            resetStylePortfolioItem(works);
    }
}

const resetStylePortfolioItem = (arr) => {
    for(let i = 0; i < arr.length; i++){
        arr[i].removeAttribute('style');
    }
}

            
const styledMarginSortPortfolioItem = (arr) => {
    for(let i = 0; i < arr.length; i++){
        arr[i].style.marginRight = '20px';
        
    }
    for(let i = 0; i < arr.length; i+=3){
        if(i !== 0){
            arr[i].style.marginRight = '0';
        }
    }
}

const setTimerOfAnimationDelay = (arr, interval=150, timeout=300) => {
    for(let i = 0; i < arr.length; i++){
        let timer = setInterval(() => {
            arr[i].style.width = 0;
            setTimeout(() => {
                arr[i].style.display = 'none';
                clearInterval(timer);
            }, timeout);
        }, interval);
    }
}

export default PortfolioHandler;