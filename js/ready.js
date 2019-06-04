$(document).ready(function() {
  $('.navbar-menu-btn').click(function (event) {
      event.preventDefault();
    $(".navbar-links").toggleClass("active");
  })
  $(".card-slick").slick({
    infinite: true,
    cssEase: "linear",
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
  });
  $(".car-slick-detail-main").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".car-slick-detail-img"
	});
	$('.car-slick-detail-img').slick({
		infinite: false,
		cssEase: 'linear',
		dots: false,
		arrows: false,
		autoplay: false,
		slidesToShow: 4,
		focusOnSelect: true,
		asNavFor: '.car-slick-detail-main',
	})
});
