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

export {filter};