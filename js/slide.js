var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "1.5",
    loop: true,
    speed: 600,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 1,
        slideShadows: false,
    },
    pagination: {
        el: ".thing06-1 .swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return index < 3 ? '<span class="' + className + '"></span>' : '';
        },
    },
    navigation: {
        nextEl: ".thing06-1 .swiper-button-next",
        prevEl: ".thing06-1 .swiper-button-prev",
    },
    on: {
        slideChange: function () {
            var bullets = document.querySelectorAll('.thing06-1 .swiper-pagination-bullet');
            var active = this.realIndex % 3;
            bullets.forEach(function (b, i) {
                b.classList.toggle('swiper-pagination-bullet-active', i === active);
            });
        },
    },
});

var swiper2 = new Swiper(".mySwiper2", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "1.65",
    loop: true,
    initialSlide: 0,
    speed: 600,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 1,
        slideShadows: false,
    },
    pagination: {
        el: ".thing07-1 .swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return index < 3 ? '<span class="' + className + '"></span>' : '';
        },
    },
    navigation: {
        nextEl: ".thing07-1 .swiper-button-next",
        prevEl: ".thing07-1 .swiper-button-prev",
    },
    on: {
        slideChange: function () {
            var bullets = document.querySelectorAll('.thing07-1 .swiper-pagination-bullet');
            var active = this.realIndex % 3;
            bullets.forEach(function (b, i) {
                b.classList.toggle('swiper-pagination-bullet-active', i === active);
            });
        },
    },
});

var swiper3 = new Swiper(".mySwiper3", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "1",
    loop: true,
    initialSlide: 0,
    speed: 600,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 1,
        slideShadows: false,
    },
    pagination: {
        el: ".thing24-1 .swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return index < 3 ? '<span class="' + className + '"></span>' : '';
        },
    },
    navigation: {
        nextEl: ".thing24-1 .swiper-button-next",
        prevEl: ".thing24-1 .swiper-button-prev",
    },
    on: {
        slideChange: function () {
            var bullets = document.querySelectorAll('.thing07-1 .swiper-pagination-bullet');
            var active = this.realIndex % 3;
            bullets.forEach(function (b, i) {
                b.classList.toggle('swiper-pagination-bullet-active', i === active);
            });
        },
    },
});


var swiper4 = new Swiper(".mySwiper4", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "1.95",
    loop: true,
    initialSlide: 0,
    speed: 600,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 1,
        slideShadows: false,
    },
    pagination: {
        el: ".thing36-1 .swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return index < 3 ? '<span class="' + className + '"></span>' : '';
        },
    },
    navigation: {
        nextEl: ".thing36-1 .swiper-button-next",
        prevEl: ".thing36-1 .swiper-button-prev",
    },
    on: {
        slideChange: function () {
            var bullets = document.querySelectorAll('.thing36-1 .swiper-pagination-bullet');
            var active = this.realIndex % 3;
            bullets.forEach(function (b, i) {
                b.classList.toggle('swiper-pagination-bullet-active', i === active);
            });
        },
    },
});
