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
            scrollTop: $target.offset().top,
          },
          800,
          "swing",
          function () {
            window.location.hash = target;
          }
        );
    });
  });