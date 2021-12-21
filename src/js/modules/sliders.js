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

export default sliders;