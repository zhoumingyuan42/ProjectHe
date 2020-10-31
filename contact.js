var windowHeight = $(window).height(),
  gridTop = windowHeight * 0.35,
  gridBottom = windowHeight * 0.55;
  girdMiddle = windowHeight * 0.45;

  $(window).on('scroll', function() {
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



    });
$('.burger').on('click', function(){
      $('.nav_links').toggleClass('nav-active');
      $('.line1').toggleClass('line1-active');
      $('.line2').toggleClass('line2-active');
      $('.line3').toggleClass('line3-active');
});
