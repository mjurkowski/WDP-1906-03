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

  /*
  // DZIAŁA PRZY DWÓCH KLIKNIĘCIACH W TAB
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
  */

  /*
  // TEST 1 - NIE DZIAŁA
  document.querySelector('.nav-tabs').addEventListener('shown.bs.tab', function() {
    event.target.flkty.resize();
  });
  */

  /*
  // TEST 2 - NIE DZIAŁA
  document.querySelector('.nav-tabs').addEventListener('shown.bs.tab', function() {
    var selector = event.target.getAttribute('href');
    document.querySelector(selector).flkty.resize();
    console.count();
  });
  */
});

/*
// NIE DZIAŁA 1
$(document).ready(function(){
  $('.nav-tabs a').click(function(){
      $(this).tab('show');
  });
  $('.nav-tabs a').on('shown.bs.tab', function(){
      alert('New tab is now visible!');
  });
});
*/

/*
// NIE DZIAŁA 2 - ROZWIĄZNIE AUTORA FLICKITY W JQUERY
$('.nav-tabs').on('shown.bs.tab', 'a', function( event ) {
  console.log('event fired');
});
*/

/*
// NIE DZIAŁA 2 - ZMODYFIKOWANE ROZWIĄZNIE AUTORA FLICKITY W JQUERY
$('.nav-tabs a').on('shown.bs.tab', function( event ) {
  console.log('event fired');
});
*/

/*
// NIE DZIAŁA 2 - ZMODYFIKOWANE ROZWIĄZNIE AUTORA FLICKITY W JQUERY
$('a[data-toggle="tab"]').on('shown.bs.tab', function( event ) {
  console.log('event fired');
  alert(event.target.href);
});
*/
