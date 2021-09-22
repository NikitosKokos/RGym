document.addEventListener('DOMContentLoaded', () => {
    // slider
    if (document.querySelector('.hero__slider')) {
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

    // header
    const header = document.querySelector('.header');

    const callback = function (entries, observer) {
        if (entries[0].isIntersecting) {
            header.classList.remove('_scroll');
        } else {
            header.classList.add('_scroll');
        }
    };

    const headerObserver = new IntersectionObserver(callback);
    headerObserver.observe(header);
    
}); // end