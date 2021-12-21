function openModal(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector);

    modal.classList.add('show');
    modal.classList.add('fade_time');
    document.body.style.padding = '0 calc(20px - (100vw - 100%)) 0 0';
    document.body.style.overflowY = 'hidden';

    if (modalTimerId) {
        clearInterval(modalTimerId);
    }
}

function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);

    modal.classList.remove('show');
    modal.classList.remove('fade_time');
    document.body.style.overflow = '';
}

function modal(triggerSelector, modalSelector, modalTimerId, swichTimer = true) {
    const modalTrigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector);
        modalTrigger.forEach(item => {
           item.addEventListener('click', () => {
               openModal(modalSelector, modalTimerId);
               console.log('OK');
           });
        });

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal(modalSelector);
        }
    });

    document.addEventListener('keydown', (e) => {
        const newLocal = e.code === 'Escape' && modal.classList.contains('show');
        if (newLocal) {
            closeModal(modalSelector);
        }
    });


       
   
}

export default modal;
export {
    openModal,
    closeModal,
    modal
};