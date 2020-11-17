// let tab = function() {
//     let tabNav = document.querySelectorAll('.tabs-nav__item'),
//         tabContent = document.querySelectorAll('.tab'),
//         tabName;

//     tabNav.forEach(item => {
//         item.addEventListener('click', selectTabNav)
//     });

//     function selectTabNav() {
//         tabNav.forEach(item => {
//             item.classList.remove('is-active');
//         });
//         this.classList.add('is-active');
//         tabName = this.getAttribute('data-tab-name');
//         selectTabContent(tabName);
//     }

//     function selectTabContent(tabName) {
//         tabContent.forEach(item => {
//             item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
//         })
//     }

// };


// tab();

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