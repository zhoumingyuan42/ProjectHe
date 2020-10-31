//jshint esversion:6

$(document).ready(function() {


  // Get viewport height, gridTop and gridBottom
  var windowHeight = $(window).height(),
    gridTop = windowHeight * 0.35,
    gridBottom = windowHeight * 0.55;
  girdMiddle = windowHeight * 0.45;

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
  });

  // Move element to mid of screen on click
  $('h1').on('click', function() {
    const elementRect = this.getBoundingClientRect();
    const absoluteElementTop = elementRect.top + window.pageYOffset;
    const middle = absoluteElementTop - (girdMiddle);
    window.scrollTo({
      left: 0,
      top: middle,
      behavior: 'smooth'
    });

    // change background color & font color on click
    var origFontColor = $(this).css('color');

    $('body').css('background', origFontColor);
    if ($('h1').not(this).hasClass('click')) {
      $('h1').removeClass('click');
    }
    $(this).toggleClass('click');


  });


  $('.to_project').click(function() {
    var newUrl = 'project.html';
    setTimeout(function() {
      location.href = newUrl;
    }, 1000);
    return false;
  });

  $('.to_about').click(function() {
    var newUrl = 'about_me.html';
    setTimeout(function() {
      location.href = newUrl;
    }, 1000);
    return false;
  });
  $('.contact').click(function() {
    var newUrl = 'contact.html';
    setTimeout(function() {
      location.href = newUrl;
    }, 1000);
    return false;
  });



});
