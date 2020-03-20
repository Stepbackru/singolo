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
        works[i].style.display = 'block';
        works[i].style.width = '220px';
    }
}

const filterWorksBySelectedButton = (e) => {
    let works = [...document.querySelectorAll('.portfolio__item')];
    for(let i = 0; i < works.length; i++) {
        works[i].style.display = 'none';
    }
    switch (true) {
        case e.getAttribute('data-name') === 'webDesign':
            let worksCopyWebD = works.slice();
            let webD = worksCopyWebD.filter(e => e.getAttribute('data-name') !== 'webDesign');
            for(let i = 0; i < works.length; i++){
                works[i].style.display = 'block';
                works[i].style.width = '220px';
            }
            for(let i = 0; i < webD.length; i++){
                setInterval(() => {
                    webD[i].style.width = 0;
                }, 300);
                webD[i].addEventListener('transitionend', ()=>{
                    webD[i].style.display = 'none';
                })
            }
            break;
        
        case e.getAttribute('data-name') === 'graphicDesign':
            let worksCopyGraphD = works.slice();
            let graphD = worksCopyGraphD.filter(e => e.getAttribute('data-name') !== 'graphicDesign');
            for(let i = 0; i < works.length; i++){
                works[i].style.display = 'block';
                works[i].style.width = '220px';
            }
            for(let i = 0; i < graphD.length; i++){
                setInterval(() => {
                    graphD[i].style.width = 0;
                }, 300);
                graphD[i].addEventListener('transitionend', ()=>{
                    graphD[i].style.display = 'none';
                })
            }
            break;
        case e.getAttribute('data-name') === 'artwork':
            let worksCopyArt = works.slice();
            let artW = worksCopyArt.filter(e => e.getAttribute('data-name') !== 'artwork');
            for(let i = 0; i < works.length; i++){
                works[i].style.display = 'block';
                works[i].style.width = '220px';
            }
            for(let i = 0; i < artW.length; i++){
                setInterval(() => {
                    for (let j = 0; j < artW.length; j++){
                        artW[j].style.width = 0;
                    }
                }, 300);
                artW[i].addEventListener('transitionend', ()=>{
                    for (let j = 0; j < artW.length; j++){
                        artW[j].style.display = 'none';
                    }
                })
            }
            break;
        default:
            for(let i = 0; i < works.length; i++){
                works[i].style.display = 'block';
                works[i].style.width = '220px';
            }
    }
}

export default PortfolioHandler;