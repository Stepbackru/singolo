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
    switch (e.getAttribute('data-name')) {
        case 'webDesign':
            let worksCopyWebD = works.slice();
            let webDStyled = worksCopyWebD.slice().filter(e => e.getAttribute('data-name') === 'webDesign');
            let webD = worksCopyWebD.filter(e => e.getAttribute('data-name') !== 'webDesign');
            for(let i = 0; i < works.length; i++){
                works[i].style.display = 'block';
                works[i].style.width = '220px';
            }
            for(let i = 0; i < webDStyled.length; i++){
                webDStyled[i].style.marginRight = '20px';
                
            }
            for(let i = 0; i < webDStyled.length; i+=3){
                if(i !== 0){
                    webDStyled[i].style.marginRight = '0';
                }
                
            }
            for(let i = 0; i < webD.length; i++){
                let timerWebD = setInterval(() => {
                    webD[i].style.width = 0;
                }, 300);
                webD[i].addEventListener('transitionend', ()=>{
                    webD[i].style.display = 'none';
                    clearInterval(timerWebD);
                })
            }
            break;
        case 'graphicDesign':
            let worksCopyGraphD = works.slice();
            let graphDStyled = worksCopyGraphD.filter(e => e.getAttribute('data-name') === 'graphicDesign');
            let graphD = worksCopyGraphD.filter(e => e.getAttribute('data-name') !== 'graphicDesign');
            for(let i = 0; i < works.length; i++){
                works[i].style.display = 'block';
                works[i].style.width = '220px';
            }
            for(let i = 0; i < graphDStyled.length; i++){
                graphDStyled[i].style.marginRight = '20px';
                
            }
            for(let i = 0; i < graphDStyled.length; i+=3){
                if(i !== 0){
                    graphDStyled[i].style.marginRight = '0';
                }
                
            }
            for(let i = 0; i < graphD.length; i++){
                let timerGraphD = setInterval(() => {
                    graphD[i].style.width = 0;
                }, 300);
                graphD[i].addEventListener('transitionend', ()=>{
                    graphD[i].style.display = 'none';
                    clearInterval(timerGraphD);
                })
            }
            break;
        case 'artwork':
            let worksCopyArt = works.slice();
            let artWDStyled = worksCopyArt.filter(e => e.getAttribute('data-name') === 'artwork');
            let artW = worksCopyArt.filter(e => e.getAttribute('data-name') !== 'artwork');
            for(let i = 0; i < works.length; i++){
                works[i].style.display = 'block';
                works[i].style.width = '220px';
            }
            for(let i = 0; i < artWDStyled.length; i++){
                artWDStyled[i].style.marginRight = '20px';
                
            }
            for(let i = 0; i < artWDStyled.length; i+=3){
                if(i !== 0){
                    artWDStyled[i].style.marginRight = '0';
                }
                
            }
            for(let i = 0; i < artW.length; i++){
                let timerArt = setInterval(() => {
                    artW[i].style.width = 0;
                }, 300);
                artW[i].addEventListener('transitionend', ()=>{
                        artW[i].style.display = 'none';
                        clearInterval(timerArt);
                })
            }
            break;
        default:
            for(let i = 0; i < works.length; i++){
                works[i].style.display = 'block';
                works[i].style.width = '220px';
                clearInterval(timerWebD);
                clearInterval(timerGraphD);
                clearInterval(timerArt);
            }
    }
}

export default PortfolioHandler;