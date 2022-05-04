$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 4,
        arrows: false,
        dots: true,
        speed: 1000,
        easing: 'ease',
        infinit: false,
        autoplay: false,
        autoplaySpeed: 500,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        touchThreshold: 10,
        waitForAnimate: false,
        centerMode: false,
        variableWidth: false,
        responsive:[
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 710,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
});