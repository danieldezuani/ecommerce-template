$('.slider-principal').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 2500,
    arrows: false
  });

$('.slider-promos').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false
});

$('.slider-marcas').slick({
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: false
});