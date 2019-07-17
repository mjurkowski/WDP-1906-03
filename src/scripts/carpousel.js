/* global Flickity */

var elem = document.querySelector('.main-carousel');
/* eslint-disable-next-line */
var flkty = new Flickity(elem, {
  cellAlign: 'left',
  contain: true,
  groupCells: true,
  wrapAround: true,
  autoPlay: 3000
});
