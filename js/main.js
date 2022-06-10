$(function () {
    $('.fairy-tail__slider').slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-prev.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/arrow-next.svg" alt=""></button>',
        autoplay: true,
        fade: true
    });

    $('.our-trip__slider').slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-prev.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/arrow-next.svg" alt=""></button>',
        autoplay: true,
        fade: true,
        responsive: [
            {
                breakpoint: 601,
                settings: {
                    arrows: false
                }
            }
        ]
    });
    $(".menu , .our-trip__body").on("click", "a", function (event) {

        event.preventDefault();
        let id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });


});

let arr = [];
arr.push('images/1.jpg', 'images/2.jpg', 'images/3.png', 'images/4.jpg',)
$.each(arr, function (i, val) {
    let imag = document.createElement('IMG');
    imag.setAttribute('class', 'photo');
    imag.src = val;
    $('.hotel__content').append(imag)
})



// function test1(src) {
//     var image = document.createElement("IMG");
//     image.alt = "Alt information for image";
//     image.setAttribute('class', 'photo');
//     // image.src = "images/1.jpg";
//     image.src = src;
//     $(".hotel__content").append(image);
// }
// test1('images/1.jpg');
// test1('images/2.jpg');
// test1('images/3.png');
// test1('images/4.jpg')


