import {openModal, closeModal} from "./modal";
import {postData} from '../services';
import {checkNumImputs} from "../services";

const forms = (formSelector, modalSelector, childSelector, modalTimerId, state) => {
    const forms = document.querySelectorAll(formSelector),
        modal = document.querySelector(modalSelector),
        childModal = document.querySelector(childSelector),
        upload = document.querySelectorAll('[name="upload"]'),

        inputPhone = document.querySelectorAll('input[name="user_phone"]');

    checkNumImputs(inputPhone);

    const message = {
        load: './img/spinner.svg',
        success: 'Спасибо! Скоро наш специалист с Вами свяжется',
        error: 'Что то пошло не так...'
    };

    const path = {
        designer: './server.php',
        questions: './design.php'
    };

    forms.forEach(item => {
        bindPostData(item);
    });

    upload.forEach(item => {
        item.addEventListener('input', () => {
            // console.log(item.files[0]);
            let dots;
            const arr = item.files[0].name.split('.');
            item.files[0].name.split('.')[0].length > 5 ? dots = '...' : dots = '.';
            const nameFile = arr[0].substring(0, 6) + dots + arr[1];
            item.previousElementSibling.textContent = nameFile;
        });
    });

    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const loadModal = document.createElement('img');
            loadModal.src = message.load;
            loadModal.style.cssText = 'margin: 0 auto;';

            form.insertAdjacentElement('afterend', loadModal);

            const formData = new FormData(form);
            let api = path.questions;

            form.closest('.popup-design') || form.classList.contains('calc_form') ? api = path.designer : api = path.questions;
            console.log(api);

            postData(api, formData)
                .then(data => {
                    console.log(data);
                    // успешно
                    modal.classList.remove('show');
                    showModal(message.success);
                    loadModal.remove();
                })
                .catch(() => {
                    //  неудача
                    modal.classList.remove('show');
                    showModal(message.failure);
                    loadModal.remove();
                })
                .finally(() => {
                    form.reset();
                });
        });
    }
        function showModal(message) {
            childModal.classList.add('hide');
            childModal.classList.remove('show');
    
            openModal(modalSelector, modalTimerId);
    
            const thanksModal = document.createElement('div');
            thanksModal.innerHTML = `   
                        <form class="form" action="#">
                        <h2>${message}</h2>
                        </form>
                `;
    
            childModal.parentNode.append(thanksModal);
    
            setTimeout(() => {
                thanksModal.remove();
                childModal.classList.remove('hide');
                childModal.classList.add('show');
                document.querySelector('form input').value = '';
                upload.forEach(item => {
                    item.previousElementSibling.textContent = 'Файл не выбран';
                });
                closeModal(modalSelector);
            }, 3000);
        }

};
export default forms;