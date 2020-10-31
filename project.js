//jshint esversion:6

var windowHeight = $(window).height(),
  gridTop = windowHeight * 0.35,
  gridBottom = windowHeight * 0.55;
  girdMiddle = windowHeight * 0.45;
var prevScrollpos = window.pageYOffset;


$(window).on('scroll', function() {
  // On each scroll check if `li` is in interested viewport
  $('h1').each(function() {
    var thisTop = $(this).offset().top - $(window).scrollTop();


    $(this).css({
      'font-size': 70 * (1 - (0.2 * (Math.abs(girdMiddle - thisTop) / girdMiddle)))
    });
    // Check if this element is in the interested viewport
    if (thisTop <= gridTop) {
      $(this).css({
        'opacity': 1 - 0.9 * (gridTop - thisTop) / gridTop
      });
    } else if ((thisTop + $(this).height()) >= gridBottom) {
      $(this).css({
        'opacity': 1 - 0.9 * (thisTop - gridBottom) / thisTop
      });
    }
  });

//paral scroll
  let scroll = window.pageYOffset;
  document.querySelectorAll(".slo_scroll").forEach(element => {
          let speed = element.dataset.speed;
          console.log(speed);
          element.style.transform = `translateY(${scroll * speed}px)`;
      });

//Hide Navbar on Scroll Down

  var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        $('.nav_project').css('top','0');
      } else {
        $('.nav_project').css('top', '-50px');
      }
      prevScrollpos = currentScrollPos;

});

$('.burger').on('click', function(){
  $('.nav_links').toggleClass('nav-active');
  $('.line1').toggleClass('line1-active');
  $('.line2').toggleClass('line2-active');
  $('.line3').toggleClass('line3-active');
});
