/* global Flickity */

var elem = document.querySelector('.main-carousel-promo');
/* eslint-disable-next-line */
var flkty = new Flickity(elem, {
  cellAlign: 'left',
  contain: true,
  pageDots: false,
  wrapAround: true,
  autoPlay: 3000
});
