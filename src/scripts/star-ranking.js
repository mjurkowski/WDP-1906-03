(function() {
  function mySuperFunc() {
    event.preventDefault();

    var parent = event.target.parentNode;
    var boxDataRate = event.target.getAttribute('data-rate');
    var stars = parent.getElementsByTagName('star');

    for (var i = 0; i < stars.length; i++) {
      var star = stars[i];
      var value = star.getAttribute('data-rate');
      if (value <= boxDataRate) {
        star.classList.add('fill');
      } else {
        star.classList.remove('fill');
      }
    }
  }

  // Checking clicked star...
  var allStars = document.querySelectorAll('star');
  for (var i = 0; i < allStars.length; i++) {
    allStars[i].addEventListener('click', mySuperFunc);
  }

  // Box's with default class fill ranking
  var productBox = document.querySelectorAll('star-rating');

  for (var i = 0; i < productBox.length; i++) {
    var box = productBox[i];
    setDefaultStars(box);
  }

  function setDefaultStars(box) {
    var ratingValue = box.getAttribute('default');
    if (ratingValue <= 0) {
      return;
    }
    var stars = box.getElementsByTagName('star');
    var upperBound = Math.min(stars.length, ratingValue);
    for (var i = 0; i < upperBound; i++) {
      stars[i].classList.add('fill');
    }
  }
})();
