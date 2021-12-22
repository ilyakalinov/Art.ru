import { getData } from "../services";

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
            getData('http://localhost:3000/count')
            .then(res => calcFunc(res));
    });
    matBlock.addEventListener('change', () => {
        getData('http://localhost:3000/count')
        .then(res => calcFunc(res));
    });
    optionsBlock.addEventListener('change',  () => {
        getData('http://localhost:3000/count')
        .then(res => calcFunc(res));
    });
    promoBlock.addEventListener('input',  () => {
        getData('http://localhost:3000/count')
        .then(res => calcFunc(res));
    });
};

export default calc;



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