$('.owl-carousel-1').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        400: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})

var typed = new Typed('.type', {
    strings: [
        'Mobile App Template',
        'User Friendly ',
        'Use Your Business..',
        'App system !! ',
    ],
    typeSpeed: 50,
    smartBackspace: true,
    backSpeed: 100,
    shuffle: false,
    startDelay: 0,
    stringsElement: null,
});

$('.owl-carousel-2').owlCarousel({
    loop: true,
    margin: 40,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        400: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})

$('.owl-carousel-3').owlCarousel({
    loop: true,
    margin: 20,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})

$('.owl-carousel-4').owlCarousel({
    loop: true,
    margin: 20,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    },
    
})
AOS.init();