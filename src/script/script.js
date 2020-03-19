'use strict';

var Carousel = (function() {
  function Carousel() {
    this.options = {
      arrows: false,
      autoPlay: true,
      autoplaySpeed: 5000
    }
  }

  Carousel.prototype = {
    init: function() {
      $('.carousel').slick(this.options);
    }
  }

  return Carousel;
})();

$(function() {
  var carousel = new Carousel();
  carousel.init();
});
