const indentHeight = 100;
const pageHeight = document.body.clientHeight;

const footer = document.querySelector('.footer');
const footerHeight = footer.offsetHeight;

const screenHeight = window.innerHeight;

const positionStart = (pageHeight - indentHeight) - (screenHeight + footerHeight);
const positionEnd = pageHeight - screenHeight;

const wrapper = document.querySelector('.wrapper');
const wrapperHeight = wrapper.offsetHeight;

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => wrapper.classList.contains('hide');

window.addEventListener('scroll', () => {
    if (scrollPosition() > positionStart) {
        wrapper.classList.add('hide');
    }
    else if(scrollPosition() < positionStart) {
        wrapper.classList.remove('hide');
    }
})


// 


"use strict"


const menuLinks = document.querySelectorAll('.go_up[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

            if (iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}


// Burger Menu

const iconMenu = document.querySelector('.menu__icon');
const headerNav = document.querySelector('.header__nav');
if (iconMenu){
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        headerNav.classList.toggle('_active');
    });
}