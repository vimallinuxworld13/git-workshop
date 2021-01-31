const responsive = {
    0: {
        items: 1
    },
    560: {
        items: 1
    },
    900: {
        items: 2
    },
    1200: {
        items: 3
    }
}

$(document).ready(function() {
    //owl-crousel for blog
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
    });

})