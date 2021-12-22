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

export default burgerMenu;
