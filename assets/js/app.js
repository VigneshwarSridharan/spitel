$(document).ready(function () {

    if($('.works-wrpper .row').length) {
        var $grid = $('.works-wrpper .row').isotope();
    
        $('.filter-wrapper .filter-item').on('click', function () {
            $grid.isotope({ filter: $(this).data('filter') })
            $('.filter-wrapper .filter-item').removeClass('active')
            $(this).addClass('active')
        })
    }

    $('.technology-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        //   autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 760,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    })

    $('.slick').slick();


})

$(window).on('load', function () {
    $('.app-preloader').fadeOut(500)
    setTimeout(() => {
        $('.navigation-wrapper').removeClass('is-loaded')
    }, 500);
})

var lastPos = $(window).scrollTop()
$(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll > lastPos) {
        $('.navigation-wrapper').addClass('active')
    }
    else {
        $('.navigation-wrapper').removeClass('active')
    }
    lastPos = scroll;
})


function initMap() {
    // The location of Uluru
    var uluru = { lat: 15.367083, lng: 75.137639 };
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {
        zoom: 4,
        center: uluru,
        styles: mapStyles
    });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({ position: uluru, map: map });
}