$(window).scroll(function() {
    var docscroll = $(document).scrollTop();
    if (window.pageYOffset > 250) {
        $('.header').addClass('fixed');
    } else {
        $('.header').removeClass('fixed');
    }
});




// Slick slider
$('.gallery__sl').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
// Slick slider


$(document).ready(function() {
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        }
    });
    $('.image-popup-vertical-fit').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-img-mobile',
        image: {
            verticalFit: true
        }

    });
    $('.popup-youtube').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });
});


$(function() {
    $('.header a[href^="#"]').on('click', function(event) {
        // отменяем стандартное действие
        event.preventDefault();

        var sc = $(this).attr("href"),
            dn = $(sc).offset().top;
        /*
         * sc - в переменную заносим информацию о том, к какому блоку надо перейти
         * dn - определяем положение блока на странице
         */

        $('html, body').animate({ scrollTop: dn - 100 }, 1000);

        /*
         * 1000 скорость перехода в миллисекундах
         */
    });
});

// Мобильное меню
$(document).ready(function() {
    $('.header_burger').click(function(event) {
        $('.header_burger,.header__menu').toggleClass('active_menu');
    });
});

$(document).ready(function() {
    $('.header__menu a').click(function() {
        $('.header_burger,.header__menu').toggleClass('active_menu');
    });
});
// Мобильное меню