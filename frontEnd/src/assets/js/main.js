$(function () {
  "use strict";
  $(window).on("load", function (event) {
    $("#preloader").delay(500).fadeOut(500);
  });
  $(".navbar-toggler").on("click", function () {
    $(this).toggleClass("active");
  });
  $(".navbar-nav a").on("click", function () {
    $(".navbar-toggler").removeClass("active");
  });
  $(".navbar-nav a").on("click", function () {
    $(".navbar-collapse").removeClass("show");
  });
  $(window).on("scroll", function (event) {
    var scroll = $(window).scrollTop();
    if (scroll < 10) {
      $(".navgition").removeClass("sticky");
    } else {
      $(".navgition").addClass("sticky");
    }
  });
  var scrollLink = $(".page-scroll");
  $(window).scroll(function () {
    var scrollbarLocation = $(this).scrollTop();
    scrollLink.each(function () {
      var sectionOffset = $(this.hash).offset().top - 90;
      if (sectionOffset <= scrollbarLocation) {
        $(this).parent().addClass("active");
        $(this).parent().siblings().removeClass("active");
      }
    });
  });
  $(".video-popup").magnificPopup({ type: "iframe" });
  $(".testimonial-active").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 800,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 576, settings: { slidesToShow: 1, arrows: false } },
    ],
  });
  $(window).on("scroll", function (event) {
    if ($(this).scrollTop() > 600) {
      $(".back-to-top").fadeIn(200);
    } else {
      $(".back-to-top").fadeOut(200);
    }
  });
  $(".back-to-top").on("click", function (event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 1500);
  });
});
