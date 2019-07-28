/* global Flickity */

(function () {
  var elem = document.querySelector('.main-carousel-promo');
  /* eslint-disable-next-line */
  var flkty = new Flickity(elem, {
    cellAlign: 'left',
    contain: true,
    pageDots: false,
    wrapAround: true
  });

  var ClickCatch = document.getElementById('swipeCatchZone');

  ClickCatch.addEventListener('swipeleft', function (e) {
    flkty.next();
  });

  ClickCatch.addEventListener('swiperight', function (e) {
    flkty.previous();
  });
})();

var caro1 = document.querySelectorAll('.tab-pane');
caro1.forEach(function (index) {
  /* eslint-disable-next-line */
  var flkty = new Flickity(index, {
    cellAlign: 'left',
    contain: true,
    groupCells: true,
    wrapAround: true,
    autoPlay: 3000,
    prevNextButtons: false,
    draggable: true
  });

  document.querySelector('#bed-carousel-init').addEventListener('click', function () {
    flkty.resize();
  });

  document.querySelector('#chair-carousel-init').addEventListener('click', function () {
    flkty.resize();
  });

  document.querySelector('#sofa-carousel-init').addEventListener('click', function () {
    flkty.resize();
  });

  document.querySelector('#table-carousel-init').addEventListener('click', function () {
    flkty.resize();
  });

  document.querySelector('#dining-carousel-init').addEventListener('click', function () {
    flkty.resize();
  });

  /*
  // TEST 1
  document.querySelector('.nav-tabs').addEventListener('shown.bs.tab', function() {
    event.target.flkty.resize();
  });
  */

  /*
  // TEST 2
  document.querySelector('.nav-tabs').addEventListener('shown.bs.tab', function() {
    var selector = event.target.getAttribute('href');
    selector.flkty.resize();
  });
  */
});

/*
// ROZWIĄZNIE AUTORA FLICKITY W JQUERY
$('.nav-tabs').on( 'shown.bs.tab', 'a', function( event ) {
  // get tab pane
  var selector = event.target.getAttribute('href');
  // trigger resize on tab pane
  $( selector ).flickity('resize');
});
*/
