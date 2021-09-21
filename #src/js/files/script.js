document.addEventListener('DOMContentLoaded', () => {

    // slider
    if(document.querySelector('.hero__slider')){
        new Swiper('.hero__slider', {
            slidesPerView: 1,
            watchOverflow: true,
            loop: true,
            preloadImages: false,
            effect: 'fade',

            // Arrows
            navigation: {
                nextEl: '.hero__button_next',
                prevEl: '.hero__button_prev',
            },
        });
    }

}); // end