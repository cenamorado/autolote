$(document).ready(function() {

	$('.card-slick').slick({
		infinite: true,
		cssEase: 'linear',
		dots: false,
		arrows: true,
		autoplay: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		nextArrow:
			'<div class="slick-next"><i class="fas fa-chevron-right"></i></i></div>',
		prevArrow:
			'<div class="slick-prev"><i class="fas fa-chevron-left"></i></i></div>',
		responsive: [
			{
				breakpoint: 990,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
    })
})