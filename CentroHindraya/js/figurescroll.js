window.onscroll = function() {
  //call functions
  funcNavbar();
  funcFigure();
}

//On Scroll for Navbar
function funcNavbar(){
  var navbar = document.querySelector('nav');
    // pageYOffset or scrollY
  if (window.pageYOffset > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

//On Scroll for Figure
function funcFigure(){
  var figure = document.querySelector('figure');
    // pageYOffset or scrollY
  if (window.pageYOffset > 500) {
    figure.classList.add('scrolled');
  } else {
    figure.classList.remove('scrolled');
  }
}
