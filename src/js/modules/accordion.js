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

export default accordion;