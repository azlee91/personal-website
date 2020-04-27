// Fixes navbar up top when scrolling past it
$(window).scroll(function () {
  if ($(this).scrollTop() > $("#main-header").height()) {
    $("#navbar-row").addClass("sticky");
  } else {
    $("#navbar-row").removeClass("sticky");
  }
});

// Smooth scrolling
$(document).ready(function ($) {
  $(".smoothscroll").on("click", function (e) {
    e.preventDefault();

    var target = this.hash,
      $target = $(target);

    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top
        },
        800,
        "swing",
        function () {
          window.location.hash = target;
        }
      );
  });
});

// Photo slideshow
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function nextSlide(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("photo-slide");
  //var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  //for (i = 0; i < dots.length; i++) {
  //  dots[i].className = dots[i].className.replace(" active", "");
  //}
  slides[slideIndex - 1].style.display = "block";
  //dots[slideIndex - 1].className += " active";
}
