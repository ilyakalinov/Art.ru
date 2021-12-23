const drop = () => {
    const fileInputs = document.querySelectorAll('[name="upload"]');

    ['dragenter', 'dradleave',  'dradover', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, preventDefault, false);
        });
    });

    function preventDefault(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function highLight(item) {
        item.closest('.file__upload').style.border = "px solid yellow";
        item.closest('.file__upload').style.borderRadius = "20px";
        item.closest('.file__upload').style.backgroundColor = "rgba(0,0,0, .7)";
    }

    function unhighLight(item) {
        item.closest('.file__upload').style.border = "none";
        item.closest('.file__upload').style.borderRadius = "none";
        
        if(item.closest('.calc_form')) {
            item.closest('.file__upload').style.backgroundColor = "#fff"; 
        } else { 
            item.closest('.file__upload').style.backgroundColor = "#ededed";
        }
    }

    ['dragenter', 'dradover'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => highLight(input), false);
        });
    });
    ['dradleave', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => unhighLight(input), false);
        });
    });

    fileInputs.forEach(input => {
        input.addEventListener('drop', (e) => {
            input.files = e.dataTransfer.files;

            let dots;
            const arr = input.files[0].name.split('.');

            input.files[0].name.split('.')[0].length > 5 ? dots = '...' : dots = '.';
            const nameFile = arr[0].substring(0, 6) + dots + arr[1];
            input.previousElementSibling.textContent = nameFile;
        });
    });
};

export default drop;

    // drag *
    // dragend *
    // dragenter - объект на dropArea
    // dragexit *
    // dradleave - объект за пределами dropArea
    // dradover - объект зависает над dropArea
    // dragstart *
    // drop - объект отправлен