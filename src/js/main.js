let main = new Swiper('.main .swiper-container', {
    loop: true,
    autoplay: true,
    effect: 'fade'
});

let f1 = new Swiper('.f1 .swiper-container', {
    loop: true,
    effect: 'fade',
    navigation: {
        nextEl: '.f1-next',
        prevEl: '.f1-prev'
    },
});

let f2 = new Swiper('.f2 .swiper-container', {
    loop: true,
    effect: 'fade',
    navigation: {
        nextEl: '.f2-next',
        prevEl: '.f2-prev'
    },
});

let f3 = new Swiper('.f3 .swiper-container', {
    loop: true,
    effect: 'fade',
    navigation: {
        nextEl: '.f3-next',
        prevEl: '.f3-prev'
    },
});

let s1 = new Swiper('.s1 .swiper-container', {
    loop: true,
    effect: 'fade',
    navigation: {
        nextEl: '.s1-next',
        prevEl: '.s1-prev'
    },
});

let s2 = new Swiper('.s2 .swiper-container', {
    loop: true,
    effect: 'fade',
    navigation: {
        nextEl: '.s2-next',
        prevEl: '.s2-prev'
    },
});

let s3 = new Swiper('.s3 .swiper-container', {
    loop: true,
    effect: 'fade',
    navigation: {
        nextEl: '.s3-next',
        prevEl: '.s3-prev'
    },
});

let apartments = new Swiper('.apartments .swiper-container', {
    loop: true,
    effect: 'fade',
    simulateTouch: false,
    navigation: {
        nextEl: '.apartments-next',
        prevEl: '.apartments-prev'
    }
});

let design = new Swiper('.design .swiper-container', {
    loop: true,
    effect: 'fade',
    simulateTouch: false,
    navigation: {
        nextEl: '.design-next',
        prevEl: '.design-prev'
    }
});

$('body').on('click', '.ways__nav a:not(.active)', (e) => {
    $('.ways__nav a').removeClass('active');
    $('.ways__tab').removeClass('active');
    $(e.currentTarget).addClass('active');

    $('.ways__tab[data-tab="' + $(e.currentTarget).attr('data-tab') + '"]').addClass('active');
});

$('.ways').height($('.ways').height() + 40);
