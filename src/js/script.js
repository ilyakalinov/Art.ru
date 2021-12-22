import modal from './modules/modal';
import{openModal, closeModal} from './modules/modal';
import {showModalByScroll} from './services';
import sliders from './modules/sliders';
import forms from './modules/forms';
import mask from './modules/mask';
import checkTextInp from './modules/checkTextInp';
import showStyles from './modules/showStyles';
import calc from './modules/calc';
import {filter} from './modules/filter';
import changePicture from './modules/changePicture';
import accordion from './modules/accordion';
import burgerMenu from './modules/burgerMenu';

window.addEventListener('DOMContentLoaded', () => {
    const modalTimerId = setTimeout(() => openModal('.popup-consultation', modalTimerId), 60000);

    modal('.button-design', '.popup-design', modalTimerId);
    modal('.button-consultation', '.popup-consultation', modalTimerId);
    modal('.fixed-gift', '.popup-gift', modalTimerId);
    

    sliders('.feedback-slider-item', 'vertical', '.main-prev-btn', '.main-next-btn', 5000);
    sliders('.main-slider-item', '', '', '', 5000);

    forms('.popup-consultation  form', '.popup-consultation', '.popup-consultation .popup-content div', modalTimerId);
    forms('.popup-design  form', '.popup-design', '.popup-design .popup-content div', modalTimerId);
    forms('.calc form', '.popup-consultation', '.popup-consultation .popup-content div', modalTimerId);
    forms('.consultation form', '.popup-consultation', '.popup-consultation .popup-content div', modalTimerId);

    mask('[name="phone"]');

    checkTextInp('[name="name"]');
    checkTextInp('[name="message"]');

    showStyles('.button-styles', '#styles .row');

    calc('#size', '#material', '#options', '.promocode', '.calc-price');

    filter();

    changePicture('.sizes-block');

    accordion('.accordion-heading', '.accordion-block');

    burgerMenu('.burger-menu', '.burger');

    showModalByScroll('.popup-consultation', modalTimerId);
});