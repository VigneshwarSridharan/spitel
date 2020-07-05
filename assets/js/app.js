$(document).ready(function () {

    setTimeout(() => {
        hideLoader()
    }, 3000);

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

function hideLoader() {
    $('.app-preloader').fadeOut(500)

    setTimeout(() => {
        $('.navigation-wrapper').removeClass('is-loaded')
    }, 500);
}

$(window).on('load', function () {
    hideLoader();

    if ($('.works-wrpper .row').length) {
        var $grid = $('.works-wrpper .row').isotope();

        $('.filter-wrapper .filter-item').on('click', function () {
            $grid.isotope({ filter: $(this).data('filter') })
            $('.filter-wrapper .filter-item').removeClass('active')
            $(this).addClass('active')
        })
    }
})


if ('serviceWorker' in navigator) {
    console.log('CLIENT: service worker registration in progress.');
    navigator.serviceWorker.register('/service-worker.js').then(function () {
        console.log('CLIENT: service worker registration complete.');
    }, function () {
        console.log('CLIENT: service worker registration failure.');
    });
} else {
    console.log('CLIENT: service worker is not supported.');
}