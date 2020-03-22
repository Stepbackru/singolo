import MenuLinksHandler from './components/menu.js';
import SlideHandler from './components/slider.js';
import PhoneScreenBlockHandler from './components/phonelock.js';
import PortfolioHandler from './components/portfolio.js';
import FormSendingModal from './components/formmodal.js';

window.onload = function () {
    MenuLinksHandler();
    SlideHandler();
    PhoneScreenBlockHandler();
    PortfolioHandler();
    FormSendingModal();
}