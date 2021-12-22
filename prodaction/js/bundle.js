/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/accordion.js":
/*!*************************************!*\
  !*** ./src/js/modules/accordion.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const accordion = (title, content) => {
    const btns = document.querySelectorAll(title);

    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            if(!this.classList.contains('active')){
                btns.forEach(btn => {
                    btn.classList.remove('active', 'active-style');
                    btn.nextElementSibling.style.display = 'none';
                    btn.nextElementSibling.classList.remove('animated','fadeOutUp');
                    
                });
                this.classList.add('active', 'active-style');
                this.nextElementSibling.style.display = 'block';
                btn.nextElementSibling.classList.add('animated','fadeInDown');
            }
        });
    });
};

/* harmony default export */ __webpack_exports__["default"] = (accordion);

/***/ }),

/***/ "./src/js/modules/burgerMenu.js":
/*!**************************************!*\
  !*** ./src/js/modules/burgerMenu.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const burgerMenu = (menu, burger) => {
    const menuElem = document.querySelector(menu),
        burgerElem = document.querySelector(burger);

    menuElem.style.display = 'none';

    burgerElem.addEventListener('click', () => {
        if(menuElem.style.display == 'none' && window.screen.availWidth < 993) {
            menuElem.style.display = 'block';
        } else {
            menuElem.style.display = 'none';
        }
    });

    window.addEventListener('resize', () => {
        if(window.screen.availWidth > 993){
            menuElem.style.display = 'none';
        }
    });
};

/* harmony default export */ __webpack_exports__["default"] = (burgerMenu);


/***/ }),

/***/ "./src/js/modules/calc.js":
/*!********************************!*\
  !*** ./src/js/modules/calc.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services */ "./src/js/services.js");


const calc = (size, mat, options, promo, result) => {
    const sizeBlock = document.querySelector(size),
            matBlock = document.querySelector(mat),
            optionsBlock = document.querySelector(options),
            promoBlock = document.querySelector(promo),
            resultBlock = document.querySelector(result);

    let sum = 0;

    const calcFunc = (resurse) => {
        resurse.forEach(({s, m, l, xl, volocno, len, hlopok, gel, express, deliver}) => {
            let size = 0,
                mat = 0,
                opt = 0,
                promo = 0;

            switch(sizeBlock.value){
                case 's':
                    size = s;
                    break;
                case 'm':
                    size = m;
                    break;
                case 'l':
                    size = l;
                    break;
                case 'xl':
                    size = xl;
                    break;
            }

            switch(matBlock.value){
                case 'volocno':
                    mat = volocno;
                    break;
                case 'len':
                    mat = len;
                    break;
                case 'hlopok':
                    mat = hlopok;
                    break;
            }
            switch(optionsBlock.value){
                case 'gel':
                    opt = gel;
                    break;
                case 'express':
                    opt = express;
                    break;
                case 'deliver':
                    opt = deliver;
                    break;
            }    
            console.log(size);
            console.log(mat);
            console.log(opt);

            sum = Math.round((+size) * (+mat) + (+opt));

            if(size == '' || mat == '') {
                resultBlock.textContent = 'Пожалуйста, выберете все параметры';
            } else if(promoBlock.value === 'IWANTPOPART') {
                resultBlock.textContent = Math.round(sum * 0.7);
            } else {
                resultBlock.textContent = sum;
            }
        });
    };

    sizeBlock.addEventListener('change', () => {
            (0,_services__WEBPACK_IMPORTED_MODULE_0__.getData)('http://localhost:3000/count')
            .then(res => calcFunc(res));
    });
    matBlock.addEventListener('change', () => {
        (0,_services__WEBPACK_IMPORTED_MODULE_0__.getData)('http://localhost:3000/count')
        .then(res => calcFunc(res));
    });
    optionsBlock.addEventListener('change',  () => {
        (0,_services__WEBPACK_IMPORTED_MODULE_0__.getData)('http://localhost:3000/count')
        .then(res => calcFunc(res));
    });
    promoBlock.addEventListener('input',  () => {
        (0,_services__WEBPACK_IMPORTED_MODULE_0__.getData)('http://localhost:3000/count')
        .then(res => calcFunc(res));
    });
};

/* harmony default export */ __webpack_exports__["default"] = (calc);



// const calc = (size, mat, options, promo, result) => {
//     const sizeBlock = document.querySelector(size),
//             matBlock = document.querySelector(mat),
//             optionsBlock = document.querySelector(options),
//             promoBlock = document.querySelector(promo),
//             resultBlock = document.querySelector(result);

//     let sum = 0;

//     const calcFunc = () => {
//         sum = Math.round((+sizeBlock.value) * (+matBlock.value) + (+optionsBlock.value));

//         if(sizeBlock.value == '' || matBlock.value == '') {
//             resultBlock.textContent = 'Пожалуйста, выберете все параметры';
//         } else if(promoBlock.value === 'IWANTPOPART') {
//             resultBlock.textContent = Math.round(sum * 0.7);
//         } else {
//             resultBlock.textContent = sum;
//         }
//     };

//     sizeBlock.addEventListener('change', calcFunc);
//     matBlock.addEventListener('change', calcFunc);
//     optionsBlock.addEventListener('change', calcFunc);
//     promoBlock.addEventListener('input', calcFunc);
// };

// export default calc;

/***/ }),

/***/ "./src/js/modules/changePicture.js":
/*!*****************************************!*\
  !*** ./src/js/modules/changePicture.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const changePicture = (imgSelector) => {
        const blocks = document.querySelectorAll(imgSelector);

        blocks.forEach(pick => {
            pick.addEventListener('mouseover', (e) => {
                const target = e.target;
                const parent = document.querySelectorAll(`.${e.target.parentNode.className}`);
                function showPar(i = 0) {
                    console.log(parent[i].className);
                    const img = document.querySelectorAll(`.${parent[i].className} img`);
                    img[i].src = img[i].src.replace(/\.[^/.]+$/, "")+'-1.png';

                    const child = document.querySelectorAll(`.${parent[i].className} .parm`);
                    console.log(child);
                    child[i].style.display = 'none';
                }
                parent.forEach((par, i)=> {
                    if(target === par || target.parentNode == par){
                        showPar(i);  
                    }
                });
            });

            pick.addEventListener('mouseout', (e) => {
                const target = e.target;
                const parent = document.querySelectorAll(`.${e.target.parentNode.className}`);
                function hidePar(i = 0) {
                    console.log(parent[i].className);
                    const img = document.querySelectorAll(`.${parent[i].className} img`);
                    img[i].src = img[i].src.slice(0, -6)+'.png';

                    const child = document.querySelectorAll(`.${parent[i].className} .parm`);
                    console.log(child);
                    child[i].style.display = 'block';
                }
                parent.forEach((par, i)=> {
                    if(target === par || target.parentNode == par){
                        hidePar(i);
                    }
                });
            });
        });
};

/* harmony default export */ __webpack_exports__["default"] = (changePicture);

/***/ }),

/***/ "./src/js/modules/checkTextInp.js":
/*!****************************************!*\
  !*** ./src/js/modules/checkTextInp.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const checkTextInp = (selector) => {
    const txtInputs = document.querySelectorAll(selector);
    
    txtInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key.match(/[^а-яё 0-9 , . ! \?]/ig)){
                e.preventDefault();
                input.placeholder = 'Введите на русском языке';
            } 
        });
    });
};

/* harmony default export */ __webpack_exports__["default"] = (checkTextInp);

/***/ }),

/***/ "./src/js/modules/filter.js":
/*!**********************************!*\
  !*** ./src/js/modules/filter.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filter": function() { return /* binding */ filter; }
/* harmony export */ });
const filter = () => {  
    const btnAll = document.querySelectorAll('.portfolio-menu li'),
        cards = document.querySelectorAll('.portfolio-block');

    btnAll.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const target = e.target;
            const type = document.querySelectorAll(`.portfolio-wrapper .${target.classList}`);
            const btnActiv = document.querySelectorAll(`.portfolio-menu .${target.classList}`);

            btnAll.forEach(btn => {
                btn.classList.remove('active');
            });
            btnActiv.forEach(btn => {
                btn.classList.add('active');
            });
            cards.forEach(item => {
                item.style.display = 'none';
                item.classList.remove('animated', 'fadeIn');
            });

            type.forEach(item => {
                if(item.innerHTML == ''){
                    item.innerHTML = 'Таких работ пока что нет';
                    item.classList.add('none_works');
                    item.style.display ='block';
                } else {
                    document.querySelectorAll('.none_works').forEach(itm => {
                        itm.innerHTML = '';
                    });
                    item.classList.remove('none_works');
                    item.style.display = 'block';
                    item.classList.add('animated', 'fadeIn');
                }
            });
        });
    });
};



/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/js/modules/modal.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services */ "./src/js/services.js");




const forms = (formSelector, modalSelector, childSelector, modalTimerId, state) => {
    const forms = document.querySelectorAll(formSelector),
        modal = document.querySelector(modalSelector),
        childModal = document.querySelector(childSelector),
        upload = document.querySelectorAll('[name="upload"]'),

        inputPhone = document.querySelectorAll('input[name="user_phone"]');

    (0,_services__WEBPACK_IMPORTED_MODULE_1__.checkNumImputs)(inputPhone);

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

            const sum = document.querySelector('.calc-price').innerHTML;
            console.log(sum);
            const formData = new FormData(form);
            formData.append('sum', sum);
            let api = path.questions;

            form.closest('.popup-design') || form.classList.contains('calc_form') ? api = path.designer : api = path.questions;
            console.log(api);

            (0,_services__WEBPACK_IMPORTED_MODULE_1__.postData)(api, formData)
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
    
            (0,_modal__WEBPACK_IMPORTED_MODULE_0__.openModal)(modalSelector, modalTimerId);
    
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
                (0,_modal__WEBPACK_IMPORTED_MODULE_0__.closeModal)(modalSelector);
            }, 3000);
        }

};
/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./src/js/modules/mask.js":
/*!********************************!*\
  !*** ./src/js/modules/mask.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const mask = (selector) => {

    let setCursorPos = (pos, elem) => {
        elem.focus();

        if(elem.setSelectionRange) {
            elem.setSelectionRange(pos, pos);
        } else if(elem.createTextRange) {
            let range = elem.createTextRange90;

            range.collapse(true);
            range.movieEnd('character', pos);
            range.movieStart('character', pos);
            range.select();
        }

         
    };

    function newMask(event) {
        let matrix = '+7 (___) ___ __ __', 
            i = 0,
            def = matrix.replace(/\D/g, ''),
            val = this.value.replace(/\D/g, '');

        if (def.length >= val.length) {
            val = def;
        }

        this.value = matrix.replace(/./g, function(a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
        });

        if(event.type ===' blure') { 
            if(this.value.length == 2) {
                this.value = '';
            } else {
                setCursorPos(this.value.length, this);
            }
        }
    } 

    let inputs = document.querySelectorAll(selector);

    inputs.forEach(input => {
        input.addEventListener('input', newMask);
        input.addEventListener('focus', newMask);
        input.addEventListener('blur', newMask);
    });
};

/* harmony default export */ __webpack_exports__["default"] = (mask);

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "openModal": function() { return /* binding */ openModal; },
/* harmony export */   "closeModal": function() { return /* binding */ closeModal; },
/* harmony export */   "modal": function() { return /* binding */ modal; }
/* harmony export */ });
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

/* harmony default export */ __webpack_exports__["default"] = (modal);


/***/ }),

/***/ "./src/js/modules/showStyles.js":
/*!**************************************!*\
  !*** ./src/js/modules/showStyles.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services */ "./src/js/services.js");


const showStyles = (triggerBtn, wrapper) => { 
    const btn = document.querySelector(triggerBtn);

    btn.addEventListener('click', function() {
        (0,_services__WEBPACK_IMPORTED_MODULE_0__.getData)('http://localhost:3000/styles')
            .then(res => createCards(res))
                .catch(error => console.log('Error in GetData'));

        this.remove();
    });

    function createCards(resurse) {
        resurse.forEach(({src, title, link}) => {
            let card = document.createElement('div');
            card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1', 'animated', 'fadeInUp');

            card.innerHTML =`
                <div class=styles-block>
                    <img src=${src} alt='style'>
                        <h4>${title}</h4>
                    <a href=${link}>Подробнее</a>
                </div>
            `;

            document.querySelector(wrapper).appendChild(card);
        });
    }

};

/* harmony default export */ __webpack_exports__["default"] = (showStyles);


/***/ }),

/***/ "./src/js/modules/sliders.js":
/*!***********************************!*\
  !*** ./src/js/modules/sliders.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const sliders = (slidesSelector, dir, prevBtn, nextBtn, timeSwitchSlide) => {
    let slideIndex = 1,
        paused = false;
    const items = document.querySelectorAll(slidesSelector);

    function showSlides(n) {
        if(n > items.length) {
            slideIndex = 1;
        }
        if(n < 1) {
            slideIndex = items.length;
        }

        items.forEach(item => {
            item.classList.add('animated');
            item.classList.remove('show');
            item.classList.add('hide');
        });
        items[slideIndex - 1].classList.remove('hide');
        items[slideIndex - 1].classList.add('show');
    }
    showSlides(slideIndex);

    function plusSlides (n) {
        showSlides(slideIndex += n);
    }

    try{
        const prev = document.querySelector(prevBtn),
            next = document.querySelector(nextBtn);

        prev.addEventListener('click', () => {
            plusSlides (-1);
            items[slideIndex - 1].classList.add('slideInLeft');
            items[slideIndex - 1].classList.remove('slideInRight');
        });

        next.addEventListener('click', () => {
            plusSlides (1);
            items[slideIndex - 1].classList.add('slideInRight');
            items[slideIndex - 1].classList.remove('slideInLeft');
        });
    } catch(e) {

    }

    function stopStartSwitchSlide() {
        if(dir === 'vertical') {
                    paused = setInterval(function() {
                        plusSlides (1);
                        items[slideIndex - 1].classList.add('slideInRight');
                    }, timeSwitchSlide);
            } else {
                paused = setInterval(function() {
                    plusSlides (1);
                    items[slideIndex - 1].classList.remove('slideInDown');
                    items[slideIndex - 1].classList.add('slideInUp');
                }, timeSwitchSlide);
            }
        } 
        stopStartSwitchSlide();
        
        items[0].parentNode.addEventListener('mouseenter', () => {
            clearInterval(paused);
        });
        items[0].parentNode.addEventListener('mouseleave', () => {
            stopStartSwitchSlide();
        });
};

/* harmony default export */ __webpack_exports__["default"] = (sliders);

/***/ }),

/***/ "./src/js/services.js":
/*!****************************!*\
  !*** ./src/js/services.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showModalByScroll": function() { return /* binding */ showModalByScroll; },
/* harmony export */   "checkNumImputs": function() { return /* binding */ checkNumImputs; },
/* harmony export */   "postData": function() { return /* binding */ postData; },
/* harmony export */   "getData": function() { return /* binding */ getData; }
/* harmony export */ });
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js");


const showModalByScroll = (modalSelector, modalTimerId) => {
    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
                (0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__.openModal)(modalSelector, modalTimerId);
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



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services */ "./src/js/services.js");
/* harmony import */ var _modules_sliders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/sliders */ "./src/js/modules/sliders.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");
/* harmony import */ var _modules_mask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/mask */ "./src/js/modules/mask.js");
/* harmony import */ var _modules_checkTextInp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/checkTextInp */ "./src/js/modules/checkTextInp.js");
/* harmony import */ var _modules_showStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/showStyles */ "./src/js/modules/showStyles.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/calc */ "./src/js/modules/calc.js");
/* harmony import */ var _modules_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/filter */ "./src/js/modules/filter.js");
/* harmony import */ var _modules_changePicture__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/changePicture */ "./src/js/modules/changePicture.js");
/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/accordion */ "./src/js/modules/accordion.js");
/* harmony import */ var _modules_burgerMenu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/burgerMenu */ "./src/js/modules/burgerMenu.js");














window.addEventListener('DOMContentLoaded', () => {
    const modalTimerId = setTimeout(() => (0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__.openModal)('.popup-consultation', modalTimerId), 60000);

    (0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__["default"])('.button-design', '.popup-design', modalTimerId);
    (0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__["default"])('.button-consultation', '.popup-consultation', modalTimerId);
    (0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__["default"])('.fixed-gift', '.popup-gift', modalTimerId);
    

    (0,_modules_sliders__WEBPACK_IMPORTED_MODULE_2__["default"])('.feedback-slider-item', 'vertical', '.main-prev-btn', '.main-next-btn', 5000);
    (0,_modules_sliders__WEBPACK_IMPORTED_MODULE_2__["default"])('.main-slider-item', '', '', '', 5000);

    (0,_modules_forms__WEBPACK_IMPORTED_MODULE_3__["default"])('.popup-consultation  form', '.popup-consultation', '.popup-consultation .popup-content div', modalTimerId);
    (0,_modules_forms__WEBPACK_IMPORTED_MODULE_3__["default"])('.popup-design  form', '.popup-design', '.popup-design .popup-content div', modalTimerId);
    (0,_modules_forms__WEBPACK_IMPORTED_MODULE_3__["default"])('.calc form', '.popup-consultation', '.popup-consultation .popup-content div', modalTimerId);
    (0,_modules_forms__WEBPACK_IMPORTED_MODULE_3__["default"])('.consultation form', '.popup-consultation', '.popup-consultation .popup-content div', modalTimerId);

    (0,_modules_mask__WEBPACK_IMPORTED_MODULE_4__["default"])('[name="phone"]');

    (0,_modules_checkTextInp__WEBPACK_IMPORTED_MODULE_5__["default"])('[name="name"]');
    (0,_modules_checkTextInp__WEBPACK_IMPORTED_MODULE_5__["default"])('[name="message"]');

    (0,_modules_showStyles__WEBPACK_IMPORTED_MODULE_6__["default"])('.button-styles', '#styles .row');

    (0,_modules_calc__WEBPACK_IMPORTED_MODULE_7__["default"])('#size', '#material', '#options', '.promocode', '.calc-price');

    (0,_modules_filter__WEBPACK_IMPORTED_MODULE_8__.filter)();

    (0,_modules_changePicture__WEBPACK_IMPORTED_MODULE_9__["default"])('.sizes-block');

    (0,_modules_accordion__WEBPACK_IMPORTED_MODULE_10__["default"])('.accordion-heading', '.accordion-block');

    (0,_modules_burgerMenu__WEBPACK_IMPORTED_MODULE_11__["default"])('.burger-menu', '.burger');

    (0,_services__WEBPACK_IMPORTED_MODULE_1__.showModalByScroll)('.popup-consultation', modalTimerId);
});
}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map