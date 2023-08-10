const menuBtn = document.querySelector('.menu__btn');
const menuMobile = document.querySelector('.header__menu-list');

menuBtn.addEventListener('click', () => {
    menuMobile.classList.toggle('menu--open');
    if(menuMobile.classList.contains('menu--open')){
        const headerHeight = document.querySelector('header').offsetHeight;
        menuMobile.style.top = `${headerHeight}px`;
    } else {
        menuMobile.style.top = '0px';
    };
});


const swiperOne = new Swiper('.feedback__slider', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
const swiperTwo = new Swiper('.certificates__slider', {
    slidesPerView: 1,
    breakpoints: {
        360: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        1000: {
            slidesPerView: 2.25,
        },
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

const accordeon = document.querySelector('.accordeon');
const accordeonTitles = accordeon.querySelectorAll('.accordeon__title');

accordeonTitles.forEach.call(accordeonTitles, function(accordeonTitle){
    accordeonTitle.addEventListener('click', function(){
        const currentText = accordeonTitle.parentElement.querySelector('.accordeon__text');

        accordeonTitle.classList.toggle('accordeon__title--active');
        currentText.classList.toggle('accordeon__text--visible');

        if(currentText.classList.contains('accordeon__text--visible')){
            currentText.style.maxHeight = currentText.scrollHeight + 'px';
        } else {
            currentText.style.maxHeight = null;
        }
    })
})