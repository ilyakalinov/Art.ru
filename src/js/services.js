import { openModal } from "./modules/modal";

const showModalByScroll = (modalSelector, modalTimerId) => {
    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
                openModal(modalSelector, modalTimerId);
                window.removeEventListener('scroll', showModalByScroll);
        }
    }
       if(modalSelector == modalSelector){
           window.addEventListener('scroll', showModalByScroll);
       }
};

function checkNumImputs(slector) {
    slector.forEach(item => {
        item.addEventListener('input', () => {
        if (item.value.match(/\D/g)) {
            item.style.border = '1px solid red';
        } else {
            item.style.border = '1px solid #ccc';
        }
        });
       
    });
}

const postData = async (url, data) => {
    const res = await fetch(url, {
        method: "POST",
        body: data
    });

    return await res.text();
};

const getData = async (url) => {
    let res = await fetch(url);

    if(!res.ok) {
        throw new Error(`Could nod fetch ${url}, status: ${res.status}`)
    }

    return await res.json();
};

export {showModalByScroll, checkNumImputs, postData, getData};