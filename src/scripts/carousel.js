(function() {
  $('.main-carousel-promo').flickity({
    cellAlign: 'left',
    contain: true,
    pageDots: false,
    wrapAround: true,
    autoPlay: 3000
  });

  $('#swipeCatchZone').on('swipeleft', function(e, data) {
    $('.main-carousel-promo').flickity('next');
  });

  $('#swipeCatchZone').on('swiperight', function(e, data) {
    $('.main-carousel-promo').flickity('previous');
  });
})();

(function() {
  $('.tab-pane').flickity({
    cellAlign: 'left',
    contain: true,
    groupCells: true,
    wrapAround: true,
    autoPlay: 3000,
    prevNextButtons: false,
    draggable: true
  });

  $('.nav-tabs').on('shown.bs.tab', 'a', function(event) {
    var selector = event.target.getAttribute('href');
    $(selector).flickity('resize');
  });
})();
