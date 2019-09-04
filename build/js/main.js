if ($(window).width() < 768) {
    $('.modal[data-modal="solutions"] .btn').before($('.four.f1 .flex'));
    $('.modal[data-modal="solutions2"] .btn').before($('.four.f2 .flex'));
    $('.modal[data-modal="eskr"] .btn').before($('.icons .flex'));
    $('.modal[data-modal="steps"] .btn').before($('.steps .company__nav'));
    $('.modal[data-modal="steps"] .btn').before($('.steps .company__tab'));
    $('.map-wrap .navigation').remove();
}

let main = new Swiper('.main .swiper-container', {
    loop: true,
    simulateTouch: false,
    autoplay: {
        delay: 10000,
    },
    effect: 'fade',
    navigation: {
        nextEl: '.main-next',
        prevEl: '.main-prev'
    },
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
    // navigation: {
    //     nextEl: '.f3-next',
    //     prevEl: '.f3-prev'
    // },
});

let s1 = new Swiper('.s1 .swiper-container', {
    loop: true,
    effect: 'fade',
    // navigation: {
    //     nextEl: '.s1-next',
    //     prevEl: '.s1-prev'
    // },
});

let s2 = new Swiper('.s2 .swiper-container', {
    loop: true,
    effect: 'fade',
    // navigation: {
    //     nextEl: '.s2-next',
    //     prevEl: '.s2-prev'
    // },
});

let s3 = new Swiper('.s3 .swiper-container', {
    loop: true,
    effect: 'fade',
    // navigation: {
    //     nextEl: '.s3-next',
    //     prevEl: '.s3-prev'
    // },
});

let apartments = new Swiper('.apartments .swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    breakpoints: {
        767: {
            spaceBetween: 10,
            centeredSlides: true
        }
    },
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

let one = new Swiper('.one.swiper-container', {
    loop: true,
    navigation: {
        nextEl: '.view-next',
        prevEl: '.view-prev'
    }
});

let two = new Swiper('.two.swiper-container', {
    loop: true,
    navigation: {
        nextEl: '.view-next',
        prevEl: '.view-prev'
    }
});

let three = new Swiper('.three.swiper-container', {
    loop: true,
    navigation: {
        nextEl: '.view-next',
        prevEl: '.view-prev'
    }
});

let april19 = new Swiper('.company .april19', {
    loop: true,
    effect: 'fade',
    simulateTouch: false,
    navigation: {
        nextEl: '.company-next',
        prevEl: '.company-prev'
    },
});

let may19 = new Swiper('.company .may19', {
    loop: true,
    effect: 'fade',
    simulateTouch: false,
    navigation: {
        nextEl: '.company-next',
        prevEl: '.company-prev'
    },
});

let june19 = new Swiper('.company .june19', {
    loop: true,
    effect: 'fade',
    simulateTouch: false,
    navigation: {
        nextEl: '.company-next',
        prevEl: '.company-prev'
    },
});

let july19 = new Swiper('.company .july19', {
    loop: true,
    effect: 'fade',
    simulateTouch: false,
    navigation: {
        nextEl: '.company-next',
        prevEl: '.company-prev'
    },
});

let marth19 = new Swiper('.company .marth19', {
    loop: true,
    effect: 'fade',
    simulateTouch: false,
    navigation: {
        nextEl: '.company-next',
        prevEl: '.company-prev'
    },
});

let august19 = new Swiper('.company .august19', {
    loop: true,
    effect: 'fade',
    simulateTouch: false,
    navigation: {
        nextEl: '.company-next',
        prevEl: '.company-prev'
    },
});

let modalApartments = new Swiper('.modal .swiper-container', {
    loop: true,
    navigation: {
        nextEl: '.modal-next',
        prevEl: '.modal-prev'
    }
});

$('body').on('click', '.view__nav a', (e) => {
    $('.view__nav a').removeClass('active');
    $(e.currentTarget).addClass('active');
    $('.view .swiper-container').removeClass('active');
    $('.view .swiper-container.' + $(e.currentTarget).attr('data-slider') + '').addClass('active');
});

$('body').on('click', '.ways__nav a:not(.active)', (e) => {
    $('.ways__nav a').removeClass('active');
    $('.ways__tab').removeClass('active');
    $(e.currentTarget).addClass('active');

    $('.ways__tab[data-tab="' + $(e.currentTarget).attr('data-tab') + '"]').addClass('active');
});

$('body').on('click', '.company__nav a:not(.active)', (e) => {
    $(e.currentTarget).parent().find('a').removeClass('active');
    $(e.currentTarget).parent().siblings('.company__tab').removeClass('active');
    $(e.currentTarget).addClass('active');

    $('.company__tab[data-tab="' + $(e.currentTarget).attr('data-tab') + '"]').addClass('active');
});

$('body').on('click', '.modal[data-modal="steps"] .month a', (e) => {
    $(e.currentTarget).parent().find('a').removeClass('active');
    $('.modal[data-modal="steps"] .company__tab').removeClass('active');
    $(e.currentTarget).addClass('active');

    $('.modal[data-modal="steps"] .company__tab[data-tab="' + $(e.currentTarget).attr('data-tab') + '"]').addClass('active');
});

$('body').on('click', '.documents__toggle', (e) => {
    $(e.currentTarget).next().slideToggle();
});

$('body').on('click', '.header__hamburger', (e) => {
    $(e.currentTarget).toggleClass('active');
    $('.menu').toggleClass('active');
    $('.header').toggleClass('active');
});

var myMap = null;
ymaps.ready(function () {
    var myMapFooter = new ymaps.Map('footer', {
            center: [58.010016, 56.262016],
            zoom: 16.3    
        }, {
            searchControlProvider: 'yandex#search'
        }),

        myPlacemark = new ymaps.Placemark([58.010016, 56.262016], {
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/point.svg',
            // Размеры метки.
            iconImageSize: [93, 134],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-46, -134]
        });


    myMapFooter.geoObjects.add(myPlacemark);
    myMapFooter.behaviors.disable('scrollZoom'); 

    myMap = new ymaps.Map('map', {
            center: [58.037296, 56.031996],
            zoom: 15.5
        }, {
            searchControlProvider: 'yandex#search'
        }),

        shop1 = new ymaps.Placemark([58.038118, 56.032042], {category: 'shop'}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/shop2.svg', iconImageSize: [38, 38], iconImageOffset: [-16, -16], });
        shop2 = new ymaps.Placemark([58.039357, 56.025136], {category: 'shop'}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/shop2.svg', iconImageSize: [38, 38], iconImageOffset: [-16, -16], });
        shop3 = new ymaps.Placemark([58.038535, 56.029513], {category: 'shop'}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/shop2.svg', iconImageSize: [38, 38], iconImageOffset: [-16, -16], });
        shop4 = new ymaps.Placemark([58.036072, 56.022655], {category: 'shop'}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/shop2.svg', iconImageSize: [38, 38], iconImageOffset: [-16, -16], });
        shop5 = new ymaps.Placemark([58.034599, 56.023633], {category: 'shop'}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/shop2.svg', iconImageSize: [38, 38], iconImageOffset: [-16, -16], });
        shop6 = new ymaps.Placemark([58.035764, 56.029896], {category: 'shop'}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/shop2.svg', iconImageSize: [38, 38], iconImageOffset: [-16, -16], });
        shop7 = new ymaps.Placemark([58.034659, 56.024409], {category: 'shop'}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/shop2.svg', iconImageSize: [38, 38], iconImageOffset: [-16, -16], });
        shop8 = new ymaps.Placemark([58.039590, 56.027315], {category: 'shop'}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/shop2.svg', iconImageSize: [38, 38], iconImageOffset: [-16, -16], });
        shop9 = new ymaps.Placemark([58.034636, 56.030551], {category: 'shop'}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/shop2.svg', iconImageSize: [38, 38], iconImageOffset: [-16, -16], });
        shop10 = new ymaps.Placemark([58.034662, 56.031614], {category: 'shop'}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/shop2.svg', iconImageSize: [38, 38], iconImageOffset: [-16, -16], });
        shop11 = new ymaps.Placemark([58.034653, 56.032624], {category: 'shop'}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/shop2.svg', iconImageSize: [38, 38], iconImageOffset: [-16, -16], });
        shop12 = new ymaps.Placemark([58.034677, 56.033664], {category: 'shop'}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/shop2.svg', iconImageSize: [38, 38], iconImageOffset: [-16, -16], });
        shop13 = new ymaps.Placemark([58.034604, 56.036577], {category: 'shop'}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/shop2.svg', iconImageSize: [38, 38], iconImageOffset: [-16, -16], });
        shop14 = new ymaps.Placemark([58.036198, 56.035630], {category: 'shop'}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/shop2.svg', iconImageSize: [38, 38], iconImageOffset: [-16, -16], });
        shop15 = new ymaps.Placemark([58.036826, 56.034624], {category: 'shop'}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/shop2.svg', iconImageSize: [38, 38], iconImageOffset: [-16, -16], });
        stadium = new ymaps.Placemark([58.039882, 56.034070], {category: 'stadium'}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/stadium2.svg', iconImageSize: [38, 38], iconImageOffset: [-16, -16], });
        saloon1 = new ymaps.Placemark([58.039287, 56.027594], {category: 'saloon'}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/barber2.svg', iconImageSize: [38, 38], iconImageOffset: [-16, -16], });
        saloon2 = new ymaps.Placemark([58.039287, 56.027594], {category: 'saloon'}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/barber2.svg', iconImageSize: [38, 38], iconImageOffset: [-16, -16], });
        saloon3 = new ymaps.Placemark([58.033363, 56.020714], {category: 'saloon'}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/barber2.svg', iconImageSize: [38, 38], iconImageOffset: [-16, -16], });
        saloon4 = new ymaps.Placemark([58.034684, 56.029507], {category: 'saloon'}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/barber2.svg', iconImageSize: [38, 38], iconImageOffset: [-16, -16], });
        saloon5 = new ymaps.Placemark([58.032692, 56.028813], {category: 'saloon'}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/barber2.svg', iconImageSize: [38, 38], iconImageOffset: [-16, -16], });
        saloon6 = new ymaps.Placemark([58.034085, 56.032750], {category: 'saloon'}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/barber2.svg', iconImageSize: [38, 38], iconImageOffset: [-16, -16], });
        saloon7 = new ymaps.Placemark([58.034163, 56.034133], {category: 'saloon'}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/barber2.svg', iconImageSize: [38, 38], iconImageOffset: [-16, -16], });
        saloon8 = new ymaps.Placemark([58.035683, 56.036193], {category: 'saloon'}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/barber2.svg', iconImageSize: [38, 38], iconImageOffset: [-16, -16], });
        saloon9 = new ymaps.Placemark([58.036733, 56.034946], {category: 'saloon'}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/barber2.svg', iconImageSize: [38, 38], iconImageOffset: [-16, -16], });
        coffee1 = new ymaps.Placemark([58.039651, 56.027246], {category: 'coffee'}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/cafe2.svg', iconImageSize: [38, 38], iconImageOffset: [-16, -16], });
        coffee2 = new ymaps.Placemark([58.039681, 56.026263], {category: 'coffee'}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/cafe2.svg', iconImageSize: [38, 38], iconImageOffset: [-16, -16], });
        coffee3 = new ymaps.Placemark([58.034159, 56.021893], {category: 'coffee'}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/cafe2.svg', iconImageSize: [38, 38], iconImageOffset: [-16, -16], });
        coffee4 = new ymaps.Placemark([58.034641, 56.025579], {category: 'coffee'}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/cafe2.svg', iconImageSize: [38, 38], iconImageOffset: [-16, -16], });
        coffee5 = new ymaps.Placemark([58.035288, 56.025701], {category: 'coffee'}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/cafe2.svg', iconImageSize: [38, 38], iconImageOffset: [-16, -16], });
        coffee6 = new ymaps.Placemark([58.036063, 56.038523], {category: 'coffee'}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/cafe2.svg', iconImageSize: [38, 38], iconImageOffset: [-16, -16], });
        bank1 = new ymaps.Placemark([58.039269, 56.025066], {category: 'banks'}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/card2.svg', iconImageSize: [38, 38], iconImageOffset: [-16, -16], });
        bank2 = new ymaps.Placemark([58.037904, 56.032292], {category: 'banks'}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/card2.svg', iconImageSize: [38, 38], iconImageOffset: [-16, -16], });
        bank3 = new ymaps.Placemark([58.036875, 56.034821], {category: 'banks'}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/card2.svg', iconImageSize: [38, 38], iconImageOffset: [-16, -16], });
        bank4 = new ymaps.Placemark([58.034707, 56.028667], {category: 'banks'}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/card2.svg', iconImageSize: [38, 38], iconImageOffset: [-16, -16], });
        bank5 = new ymaps.Placemark([58.034647, 56.036881], {category: 'banks'}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/card2.svg', iconImageSize: [38, 38], iconImageOffset: [-16, -16], });
        bank6 = new ymaps.Placemark([58.034667, 56.024451], {category: 'banks'}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/card2.svg', iconImageSize: [38, 38], iconImageOffset: [-16, -16], });
        bank7 = new ymaps.Placemark([58.032691, 56.028875], {category: 'banks'}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/card2.svg', iconImageSize: [38, 38], iconImageOffset: [-16, -16], });
        bank8 = new ymaps.Placemark([58.034687, 56.030212], {category: 'banks'}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/card2.svg', iconImageSize: [38, 38], iconImageOffset: [-16, -16], });
        bus1 = new ymaps.Placemark([58.039048, 56.025877], {category: 'bus'}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/bus2.svg', iconImageSize: [38, 38], iconImageOffset: [-16, -16], });
        bus2 = new ymaps.Placemark([58.038888, 56.027541], {category: 'bus'}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/bus2.svg', iconImageSize: [38, 38], iconImageOffset: [-16, -16], });
        bus3 = new ymaps.Placemark([58.039131, 56.030283], {category: 'bus'}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/bus2.svg', iconImageSize: [38, 38], iconImageOffset: [-16, -16], });
        bus4 = new ymaps.Placemark([58.038963, 56.033022], {category: 'bus'}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/bus2.svg', iconImageSize: [38, 38], iconImageOffset: [-16, -16], });
        baby1 = new ymaps.Placemark([58.039554, 56.030242], {category: 'baby'}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/baby2.svg', iconImageSize: [38, 38], iconImageOffset: [-16, -16], });
        baby2 = new ymaps.Placemark([58.038135, 56.024039], {category: 'baby'}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/baby2.svg', iconImageSize: [38, 38], iconImageOffset: [-16, -16], });
        baby3 = new ymaps.Placemark([58.033464, 56.032918], {category: 'baby'}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/baby2.svg', iconImageSize: [38, 38], iconImageOffset: [-16, -16], });
        school1 = new ymaps.Placemark([58.038563, 56.040285], {category: 'school'}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/school2.svg', iconImageSize: [38, 38], iconImageOffset: [-16, -16], });
        school2 = new ymaps.Placemark([58.038683, 56.035456], {category: 'school'}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/school2.svg', iconImageSize: [38, 38], iconImageOffset: [-16, -16], });
        school3 = new ymaps.Placemark([58.037200, 56.036230], {category: 'school'}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/school2.svg', iconImageSize: [38, 38], iconImageOffset: [-16, -16], });
        school4 = new ymaps.Placemark([58.035368, 56.035608], {category: 'school'}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/school2.svg', iconImageSize: [38, 38], iconImageOffset: [-16, -16], });
        school5 = new ymaps.Placemark([58.033444, 56.035229], {category: 'school'}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/school2.svg', iconImageSize: [38, 38], iconImageOffset: [-16, -16], });
        school6 = new ymaps.Placemark([58.035640, 56.032475], {category: 'school'}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/school2.svg', iconImageSize: [38, 38], iconImageOffset: [-16, -16], });
        school7 = new ymaps.Placemark([58.035003, 56.027563], {category: 'school'}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/school2.svg', iconImageSize: [38, 38], iconImageOffset: [-16, -16], });
        school8 = new ymaps.Placemark([58.035283, 56.023799], {category: 'school'}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/school2.svg', iconImageSize: [38, 38], iconImageOffset: [-16, -16], });
        school9 = new ymaps.Placemark([58.036737, 56.024646], {category: 'school'}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/school2.svg', iconImageSize: [38, 38], iconImageOffset: [-16, -16], });
        ambulance1 = new ymaps.Placemark([58.037506, 56.023601], {category: 'ambulance'}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/ambulance2.svg', iconImageSize: [38, 38], iconImageOffset: [-16, -16], });
        ambulance2 = new ymaps.Placemark([58.039426, 56.025685], {category: 'ambulance'}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/ambulance2.svg', iconImageSize: [38, 38], iconImageOffset: [-16, -16], });
        ambulance3 = new ymaps.Placemark([58.035861, 56.024696], {category: 'ambulance'}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/ambulance2.svg', iconImageSize: [38, 38], iconImageOffset: [-16, -16], });
        ambulance4 = new ymaps.Placemark([58.037976, 56.031916], {category: 'ambulance'}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/ambulance2.svg', iconImageSize: [38, 38], iconImageOffset: [-16, -16], });
        ambulance5 = new ymaps.Placemark([58.038167, 56.034725], {category: 'ambulance'}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/ambulance2.svg', iconImageSize: [38, 38], iconImageOffset: [-16, -16], });
        ambulance6 = new ymaps.Placemark([58.036905, 56.034821], {category: 'ambulance'}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/ambulance2.svg', iconImageSize: [38, 38], iconImageOffset: [-16, -16], });
        ambulance7 = new ymaps.Placemark([58.034657, 56.032314], {category: 'ambulance'}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/ambulance2.svg', iconImageSize: [38, 38], iconImageOffset: [-16, -16], });
        ambulance8 = new ymaps.Placemark([58.034626, 56.035102], {category: 'ambulance'}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/ambulance2.svg', iconImageSize: [38, 38], iconImageOffset: [-16, -16], });
        stepa = new ymaps.Placemark([58.038414, 56.038119], {category: 'stepa'}, { iconLayout: 'default#imageWithContent', iconImageHref: 'img/stepa.svg', iconImageSize: [101, 50], iconImageOffset: [-50, -50], });

    myMap.geoObjects
        .add(stepa)
        .add(ambulance1)
        .add(ambulance2)
        .add(ambulance3)
        .add(ambulance4)
        .add(ambulance5)
        .add(ambulance6)
        .add(ambulance7)
        .add(ambulance8)
        .add(shop1)
        .add(shop2)
        .add(shop3)
        .add(shop4)
        .add(shop5)
        .add(shop6)
        .add(shop7)
        .add(shop8)
        .add(shop9)
        .add(shop10)
        .add(shop11)
        .add(shop12)
        .add(shop13)
        .add(shop14)
        .add(shop15)
        .add(stadium)
        .add(saloon1)
        .add(saloon2)
        .add(saloon3)
        .add(saloon4)
        .add(saloon5)
        .add(saloon6)
        .add(saloon7)
        .add(saloon8)
        .add(saloon9)
        .add(coffee1)
        .add(coffee2)
        .add(coffee3)
        .add(coffee4)
        .add(coffee5)
        .add(coffee6)
        .add(bank1)
        .add(bank2)
        .add(bank3)
        .add(bank4)
        .add(bank5)
        .add(bank6)
        .add(bank7)
        .add(bank8)
        .add(bus1)
        .add(bus2)
        .add(bus3)
        .add(bus4)
        .add(baby1)
        .add(baby2)
        .add(baby3)
        .add(school1)
        .add(school3)
        .add(school4)
        .add(school5)
        .add(school6)
        .add(school7)
        .add(school8)
        .add(school9)
        .add(school2);

    myMap.behaviors.disable('scrollZoom'); 
});

$('body').on('click', '.all', (e) => {
    ymaps.geoQuery(myMap.geoObjects).setOptions('visible', true);
    $('.map-wrap .navigation a').removeClass('active');
    $(e.currentTarget).addClass('active');
});

$('body').on('click', '.shop', (e) => {
    ymaps.geoQuery(myMap.geoObjects).setOptions('visible', false);
    ymaps.geoQuery(myMap.geoObjects).search('properties.category = "shop"').setOptions('visible', true);
    ymaps.geoQuery(myMap.geoObjects).search('properties.category = "stepa"').setOptions('visible', true);
    $('.map-wrap .navigation a').removeClass('active');
    $(e.currentTarget).addClass('active');
});

$('body').on('change', 'select', (e) => {
    if ($(e.currentTarget).val() === 'all') {
        ymaps.geoQuery(myMap.geoObjects).setOptions('visible', true);
    }

    if ($(e.currentTarget).val() === 'shop') {
        ymaps.geoQuery(myMap.geoObjects).setOptions('visible', false);
        ymaps.geoQuery(myMap.geoObjects).search('properties.category = "shop"').setOptions('visible', true);
        ymaps.geoQuery(myMap.geoObjects).search('properties.category = "stepa"').setOptions('visible', true);
    }

    if ($(e.currentTarget).val() === 'school') {
        ymaps.geoQuery(myMap.geoObjects).setOptions('visible', false);
        ymaps.geoQuery(myMap.geoObjects).search('properties.category = "school"').setOptions('visible', true);
        ymaps.geoQuery(myMap.geoObjects).search('properties.category = "stepa"').setOptions('visible', true);
    }

    if ($(e.currentTarget).val() === 'baby') {
        ymaps.geoQuery(myMap.geoObjects).setOptions('visible', false);
        ymaps.geoQuery(myMap.geoObjects).search('properties.category = "baby"').setOptions('visible', true);
        ymaps.geoQuery(myMap.geoObjects).search('properties.category = "stepa"').setOptions('visible', true);
    }

    if ($(e.currentTarget).val() === 'bus') {
        ymaps.geoQuery(myMap.geoObjects).setOptions('visible', false);
        ymaps.geoQuery(myMap.geoObjects).search('properties.category = "bus"').setOptions('visible', true);
        ymaps.geoQuery(myMap.geoObjects).search('properties.category = "stepa"').setOptions('visible', true);
    }

    if ($(e.currentTarget).val() === 'ambulance') {
        ymaps.geoQuery(myMap.geoObjects).setOptions('visible', false);
        ymaps.geoQuery(myMap.geoObjects).search('properties.category = "ambulance"').setOptions('visible', true);
        ymaps.geoQuery(myMap.geoObjects).search('properties.category = "stepa"').setOptions('visible', true);
    }

    if ($(e.currentTarget).val() === 'banks') {
        ymaps.geoQuery(myMap.geoObjects).setOptions('visible', false);
        ymaps.geoQuery(myMap.geoObjects).search('properties.category = "banks"').setOptions('visible', true);
        ymaps.geoQuery(myMap.geoObjects).search('properties.category = "stepa"').setOptions('visible', true);
    }

    if ($(e.currentTarget).val() === 'coffee') {
        ymaps.geoQuery(myMap.geoObjects).setOptions('visible', false);
        ymaps.geoQuery(myMap.geoObjects).search('properties.category = "coffee"').setOptions('visible', true);
        ymaps.geoQuery(myMap.geoObjects).search('properties.category = "stepa"').setOptions('visible', true);
    }

    if ($(e.currentTarget).val() === 'saloon') {
        ymaps.geoQuery(myMap.geoObjects).setOptions('visible', false);
        ymaps.geoQuery(myMap.geoObjects).search('properties.category = "saloon"').setOptions('visible', true);
        ymaps.geoQuery(myMap.geoObjects).search('properties.category = "stepa"').setOptions('visible', true);
    }

    if ($(e.currentTarget).val() === 'stadium') {
        ymaps.geoQuery(myMap.geoObjects).setOptions('visible', false);
        ymaps.geoQuery(myMap.geoObjects).search('properties.category = "stadium"').setOptions('visible', true);
        ymaps.geoQuery(myMap.geoObjects).search('properties.category = "stepa"').setOptions('visible', true);
    }
});

$('body').on('click', '.school', (e) => {
    ymaps.geoQuery(myMap.geoObjects).setOptions('visible', false);
    ymaps.geoQuery(myMap.geoObjects).search('properties.category = "school"').setOptions('visible', true);
    ymaps.geoQuery(myMap.geoObjects).search('properties.category = "stepa"').setOptions('visible', true);
    $('.map-wrap .navigation a').removeClass('active');
    $(e.currentTarget).addClass('active');
});

$('body').on('click', '.baby', (e) => {
    ymaps.geoQuery(myMap.geoObjects).setOptions('visible', false);
    ymaps.geoQuery(myMap.geoObjects).search('properties.category = "baby"').setOptions('visible', true);
    ymaps.geoQuery(myMap.geoObjects).search('properties.category = "stepa"').setOptions('visible', true);
    $('.map-wrap .navigation a').removeClass('active');
    $(e.currentTarget).addClass('active');
});

$('body').on('click', '.bus', (e) => {
    ymaps.geoQuery(myMap.geoObjects).setOptions('visible', false);
    ymaps.geoQuery(myMap.geoObjects).search('properties.category = "bus"').setOptions('visible', true);
    ymaps.geoQuery(myMap.geoObjects).search('properties.category = "stepa"').setOptions('visible', true);
    $('.map-wrap .navigation a').removeClass('active');
    $(e.currentTarget).addClass('active');
});

$('body').on('click', '.ambulance', (e) => {
    ymaps.geoQuery(myMap.geoObjects).setOptions('visible', false);
    ymaps.geoQuery(myMap.geoObjects).search('properties.category = "ambulance"').setOptions('visible', true);
    ymaps.geoQuery(myMap.geoObjects).search('properties.category = "stepa"').setOptions('visible', true);
    $('.map-wrap .navigation a').removeClass('active');
    $(e.currentTarget).addClass('active');
});

$('body').on('click', '.banks', (e) => {
    ymaps.geoQuery(myMap.geoObjects).setOptions('visible', false);
    ymaps.geoQuery(myMap.geoObjects).search('properties.category = "banks"').setOptions('visible', true);
    ymaps.geoQuery(myMap.geoObjects).search('properties.category = "stepa"').setOptions('visible', true);
    $('.map-wrap .navigation a').removeClass('active');
    $(e.currentTarget).addClass('active');
});

$('body').on('click', '.coffee', (e) => {
    ymaps.geoQuery(myMap.geoObjects).setOptions('visible', false);
    ymaps.geoQuery(myMap.geoObjects).search('properties.category = "coffee"').setOptions('visible', true);
    ymaps.geoQuery(myMap.geoObjects).search('properties.category = "stepa"').setOptions('visible', true);
    $('.map-wrap .navigation a').removeClass('active');
    $(e.currentTarget).addClass('active');
});

$('body').on('click', '.saloon', (e) => {
    ymaps.geoQuery(myMap.geoObjects).setOptions('visible', false);
    ymaps.geoQuery(myMap.geoObjects).search('properties.category = "saloon"').setOptions('visible', true);
    ymaps.geoQuery(myMap.geoObjects).search('properties.category = "stepa"').setOptions('visible', true);
    $('.map-wrap .navigation a').removeClass('active');
    $(e.currentTarget).addClass('active');
});

$('body').on('click', '.stadium', (e) => {
    ymaps.geoQuery(myMap.geoObjects).setOptions('visible', false);
    ymaps.geoQuery(myMap.geoObjects).search('properties.category = "stadium"').setOptions('visible', true);
    ymaps.geoQuery(myMap.geoObjects).search('properties.category = "stepa"').setOptions('visible', true);
    $('.map-wrap .navigation a').removeClass('active');
    $(e.currentTarget).addClass('active');
});

$('body').on('click', '[data-tab="tradein"]', () => {
    $('.ways .btn').text('Отправить заявку').attr('data-modal', 'tradein');
});

$('body').on('click', '[data-tab="installment"]', () => {
    $('.ways .btn').text('Отправить заявку').attr('data-modal', 'installment');
});

$('body').on('click', '[data-tab="gos"]', () => {
    $('.ways .btn').text('Отправить заявку').attr('data-modal', 'request');
});

$('body').on('click', '[data-tab="mortgage"]', () => {
    $('.ways .btn').text('Рассчитать').attr('data-modal', 'mortgage');
});

$('.modal').hide();

$('body').on('click', 'a[data-modal], div[data-modal]:not(.modal)', (e) => {
    $('.modal').removeClass('active');
    $('.modals').addClass('active');
    $('.modal[data-modal="' + $(e.currentTarget).attr('data-modal') + '"]').addClass('active');
});

$('body').on('click', '.modal__close', () => {
    $('.modals').removeClass('active');
    $('.modal').removeClass('active');
});

$('body').on('click', '.modal[data-modal="success"] .btn', () => {
    $('.modals').removeClass('active');
    $('.modal').removeClass('active');
});

$('body').on('click', '.modals', (e) => {
    if ($(e.target).is('.modals')) {
        $('.modals').removeClass('active');
        $('.modal').removeClass('active');
    }
});

$(window).on('load', () => {
    if ($(window).width >= 768) {
        $('.ways__body').height($('.ways__body').height() + 40);
    }

    $('.loader').animate({ opacity: 0 }, 500, () => { $('.loader').remove() })
    $('html').removeClass('loading');
});

$('body').on('submit', 'form', (e) => {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "../form.php",
        data: $(e.currentTarget).serialize(),
        success: () => {
            $('.modal').removeClass('active');
            $('.modal[data-modal="success"]').addClass('active');
        }					
    });
});

$("a[data-scroll]").click((e) => {
    $([document.documentElement, document.body]).animate({
        scrollTop: $('section[data-scroll="' + $(e.currentTarget).attr('data-scroll') + '"]').offset().top
    }, 2000);
});

$(window).on('scroll', () => {
    if ($(window).scrollTop() >= $('.f2').offset().top && $(window).widht >= 1280) {
        $('.scrolltop').fadeIn();
    } else {
        $('.scrolltop').fadeOut();
    }
});

$('body').on('click', '.scrolltop', () => {
    $('html, body').animate({scrollTop:0}, 'slow');
});

$('body').on('click', '.design nav a', (e) => {
    $('.design .swiper-container').removeClass('active');
    $('.design nav a').removeClass('active');
    $(e.currentTarget).addClass('active');
    $(`.design .swiper-container[data-slider="${$(e.currentTarget).attr('data-slider')}"]`).addClass('active');
});


$('body').on('click', '.press__arrow:not(.active)', (e) => {
    $(e.currentTarget).toggleClass('active').html('<img src="img/left-arrow.svg" alt=""><span>Вернуться к списку</span>').css('margin-left', '-20px');
    $(e.currentTarget).parent().find('.press__full').slideToggle(300);
});

$('body').on('click', '.press__arrow.active', (e) => {
    $(e.currentTarget).toggleClass('active').html('<span>Читать далее</span> <img src="img/right-arrow.svg" alt="">').css('margin-left', '0');
    $(e.currentTarget).parent().find('.press__full').slideToggle(300);
});

$('body').on('click', (e) => {
    if ($('.menu').hasClass('active') && !$(e.target).is('.menu') && !$(e.target.offsetParent).is('.menu') && !$(e.target.offsetParent).is('.header') && !$(e.target).is('.header')) {
        $('.menu').removeClass('active');
        $('.header').removeClass('active');
        $('.header__hamburger').removeClass('active');
    }
});

$('body').on('click', '.variants .toggle', (e) => {
    if ($(e.currentTarget).hasClass('active')) {
        $(e.currentTarget).removeClass('active');
        $(`.variants .item[data-toggle="${$(e.currentTarget).attr('data-toggle')}"]`).slideUp().removeClass('active');
    } else {
        $(e.currentTarget).addClass('active');
        $(`.variants .item[data-toggle="${$(e.currentTarget).attr('data-toggle')}"]`).slideDown().addClass('active');
    }
});

$('body').on('click', '.ways .toggle', (e) => {
    if ($(e.currentTarget).hasClass('active')) {
        $(e.currentTarget).removeClass('active');
        $(`.ways .ways__tab[data-toggle="${$(e.currentTarget).attr('data-toggle')}"]`).slideUp().removeClass('active');
    } else {
        $(e.currentTarget).addClass('active');
        $(`.ways .ways__tab[data-toggle="${$(e.currentTarget).attr('data-toggle')}"]`).slideDown().addClass('active');
    }
});