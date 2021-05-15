$(function () {
  $('.blog__slider').slick({
    dots: true,
    arrows: false,
  });

  $('.nav__btn, .nav a').on('click', function () {
    $('.header__top-inner').toggleClass('header__top-inner--active');
  });

  $('.nav a, .logo').on('click', function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top - 70;

    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({ scrollTop: top }, 1500);
  });

  var mixer = mixitup('.gallery__content');
});
