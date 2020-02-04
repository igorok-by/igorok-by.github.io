$(function () {

  var $objectFitImages = $('.carousel-item > img');
  objectFitImages($objectFitImages);
  
  function nekoAnimAppear() {
    $("[data-nekoanim]").each(function () {

      var $this = $(this);

      $this.addClass("nekoAnim-invisible");

      if ($(window).width() > 767) {

        $this.appear(function () {

          var delay = ($this.data("nekodelay") ? $this.data("nekodelay") : 1);
          if (delay > 1) $this.css("animation-delay", delay + "ms");

          $this.addClass("nekoAnim-animated");
          $this.addClass('nekoAnim-' + $this.data("nekoanim"));

          setTimeout(function () {
            $this.addClass("nekoAnim-visible");
          }, delay);

        }, {
          accX: 0,
          accY: -150
        });

      } else {
        setTimeout(function(){
          $this.animate({
            opacity: 1
          }, 500, function () {});
        }, 5000);
      };
    });
  };
  
  $('.promo .carousel').carousel({
    interval: false
  });

  var btnStart = $('#btnStart'),
      carousel = $('#carouselPromo');

  btnStart.click(function() {
    carousel.removeClass('d-none position-absolute');
    nekoAnimAppear();
    setTimeout(function() {
      btnStart.parent().removeClass('d-flex').addClass('d-none');
    }, 5000);
  });
});