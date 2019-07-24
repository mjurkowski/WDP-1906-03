(function () {
  var i;

  function clickedFunc (event) {
    event.preventDefault();

    var parent = event.target.parentNode;
    var isClicked = parent.getAttribute('param');
    var boxDataRate = parseInt(event.target.getAttribute('data-rate'));
    var stars = parent.getElementsByTagName('star');
    var j;

    if (isClicked === 'clicked') {
      return;
    } else {
      parent.setAttribute('param', 'clicked');
    }

    for (j = 0; j < stars.length; j++) {
      var star = stars[j];
      var value = parseInt(star.getAttribute('data-rate'));

      star.className = ''; // remove all classes
      star.classList.add('nohover');

      if (value <= boxDataRate) {
        star.classList.add('fill-clicked');
      }
    }
  }

  function mouseoverFunc (event) {
    event.preventDefault();

    var parent = event.target.parentNode;
    var boxDataRate = parseInt(event.target.getAttribute('data-rate'));
    var stars = parent.getElementsByTagName('star');
    var j;

    var isClicked = parent.getAttribute('param');

    if (isClicked === 'clicked') {
    } else {
      for (j = 0; j < stars.length; j++) {
        var star = stars[j];
        var value = parseInt(star.getAttribute('data-rate'));

        star.className = ''; // remove all classes

        if (value <= boxDataRate) {
          star.classList.add('fill-clicked');
        }
        star.addEventListener('click', clickedFunc);
      }
    }
  }
  
  // Checking onmouseover star...
  var allStars = document.querySelectorAll('star');
  for (i = 0; i < allStars.length; i++) {

    allStars[i].addEventListener('click', mySuperFunc);

  }

  function mouseoverFuncRemove (event) {
    event.preventDefault();

    var parent = event.target.parentNode;
    var stars = parent.getElementsByTagName('star');
    var j;
    var value = parseInt(parent.getAttribute('default'));
    var upperBound = Math.min(stars.length, value);

    var isClicked = parent.getAttribute('param');

    if (isClicked !== 'clicked') {
      for (j = 0; j < stars.length; j++) {
        var star = stars[j];
        star.className = '';
      }

      for (j = 0; j < upperBound; j++) {
        stars[j].classList.add('fill');
      }
    }
  }

  function setDefaultStars (box) {
    var ratingValue = parseInt(box.getAttribute('default'));
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

  // Checking onmouseover star...
  var allStars = document.querySelectorAll('star');
  for (i = 0; i < allStars.length; i++) {
    allStars[i].addEventListener('mouseover', mouseoverFunc);
    allStars[i].addEventListener('mouseout', mouseoverFuncRemove);
  }

  // Box's with default class fill ranking
  var productBox = document.querySelectorAll('star-rating');
  for (i = 0; i < productBox.length; i++) {
    setDefaultStars(productBox[i]);
  }

})();
