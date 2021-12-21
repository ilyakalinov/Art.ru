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

export default mask;