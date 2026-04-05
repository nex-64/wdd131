const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('nav');
const mediaQuery = window.matchMedia("(min-width: 800px)");

function toggleMenu() {
    menu.classList.toggle('hidden');
    menuBtn.classList.toggle('change');
};

function handleSize(size) {
    if (size.matches) {
        menu.classList.remove('hidden');
    }
    else {
        menu.classList.add('hidden');
    };
};

function init() {
    handleSize(mediaQuery);
};

init();

mediaQuery.addEventListener("change", handleSize);
menuBtn.addEventListener('click', toggleMenu);