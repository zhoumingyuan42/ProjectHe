//jshint esversion:6
var windowHeight = $(window).height(),
  gridTop = windowHeight * 0.35,
  gridBottom = windowHeight * 0.55;
  girdMiddle = windowHeight * 0.45;



$(window).on('scroll', function() {
  // change formation property on scroll
  $('h3').each(function(){
    var formationTop = $(this).offset().top - $(window).scrollTop();
    console.log(windowHeight*0.4,formationTop,windowHeight*0.35);
    if ((windowHeight*0.4 >= formationTop)){
      $(this).addClass('rise_dis');
    } else {
      $(this).removeClass('rise_dis');
    }
    if ((windowHeight*0.2 >= formationTop)){
      $(this).css('visibility','hidden');
    } else{
      $(this).css('visibility','visible');

    }
  });
  // move text on scroll
  $('h2').css("right",Math.max(0.45 * window.scrollY)+"px");
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

});

$('.burger').on('click', function(){
  $('.nav_links').toggleClass('nav-active');
  $('.line1').toggleClass('line1-active');
  $('.line2').toggleClass('line2-active');
  $('.line3').toggleClass('line3-active');
});
