
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slideshow = document.getElementsByClassName("slideshow");
  var slideshow = document.getElementsByClassName("slideshow");
  if (n > slideshow.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slideshow.length
  }
  for (i = 0; i < slideshow.length; i++) {
    slideshow[i].slideshow.display = "none";
  }
  for (i = 0; i < slideshow.length; i++) {
    slideshow[i].className = slideshow[i].className.replace(" active", "");
  }
  slideshow[slideIndex - 1].style.display = "block";
  slideshow[slideIndex - 1].className += " active";
}


$(document).ready(function(){    
  var sudoSlider = $("#celebs").sudoSlider({fade: true,
auto:true});
});   