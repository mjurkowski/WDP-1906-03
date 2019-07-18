(function () {
  var i;

  function mySuperFunc (event) {
    event.preventDefault();

    var parent = event.target.parentNode;
    var boxDataRate = event.target.getAttribute('data-rate');
    var stars = parent.getElementsByTagName('star');
    var j;

    for (j = 0; j < stars.length; j++) {
      var star = stars[j];
      var value = star.getAttribute('data-rate');

      star.className = ''; // remove all classes

      if (value <= boxDataRate) {
        star.classList.add('fill-clicked');
      }
    }
  }

  function setDefaultStars (box) {
    var ratingValue = box.getAttribute('default');
    var j;

    if (ratingValue <= 0) {
      return;
    }
    var stars = box.getElementsByTagName('star');
    var upperBound = Math.min(stars.length, ratingValue);
    for (j = 0; j < upperBound; j++) {
      stars[j].classList.add('fill');
    }
  }

  // Checking clicked star...
  var allStars = document.querySelectorAll('star');
  for (i = 0; i < allStars.length; i++) {
    allStars[i].addEventListener('click', mySuperFunc);
  }

  // Box's with default class fill ranking
  var productBox = document.querySelectorAll('star-rating');

  for (i = 0; i < productBox.length; i++) {
    var box = productBox[i];
    setDefaultStars(box);
  }
})();
