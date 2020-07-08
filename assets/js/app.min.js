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


    $('#contact-us').on('submit', function (e) {
        e.preventDefault();
        let data = $(this).serializeArray()
        let form = this
        $.ajax({
            url: './mail/mail.php',
            method: 'POST',
            data,
            success: function (res) {
                $('#form-result').html(`
                <div class="alert alert-success alert-dismissible fade show mt-3" role="alert">
                    <strong>Success!</strong> We will contact soon.
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                `)
                form.reset()
            },
            error: function (res) {
                $('#form-result').html(`
                <div class="alert alert-error alert-dismissible fade show mt-3" role="alert">
                    <strong>Sorry!</strong> Something went wrong.
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                `)
            },
        })
    })

    $('.navbar .nav-item .nav-link, footer .anchor').on('click', function (e) {
        e.preventDefault();
        var id = $(this).attr('href');
        var $elm = $(id)
        if ($elm.length) {
            
            let pos = $elm.offset().top;
            $("html, body").animate({
                scrollTop: pos - 100
            })
        }

    })
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


// if ('serviceWorker' in navigator) {
//     console.log('CLIENT: service worker registration in progress.');
//     navigator.serviceWorker.register('./service-worker.js').then(function () {
//         console.log('CLIENT: service worker registration complete.');
//     }, function () {
//         console.log('CLIENT: service worker registration failure.');
//     });
// } else {
//     console.log('CLIENT: service worker is not supported.');
// }