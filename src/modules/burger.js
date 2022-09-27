const burger = document.querySelector('.burger');
const menu = document.querySelector('.header');
const body = document.querySelector('body');
const headerNav = document.querySelector('.header-nav');

headerNav.addEventListener('click', function() {
    if(menu.classList.contains('active')) {
        menu.classList.remove('active');
        body.classList.remove('lock');
    }
});

burger.addEventListener('click', function() {
    menu.classList.toggle('active');
    body.classList.toggle('lock');
});