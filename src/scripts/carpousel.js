/* global Flickity */

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
