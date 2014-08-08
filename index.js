$(function() {
  var $frame = $('.frame');
  var $wrap  = $frame.parent();

  $frame.sly({
    horizontal: 1,
    itemNav: 'forceCentered',
    smart: 1,
    activateMiddle: 1,
    mouseDragging: 1,
    touchDragging: 1,
    releaseSwing: 1,
    startAt: 0,
    scrollBar: $wrap.find('.scrollbar'),
    scrollBy: 1,
    speed: 300,
    elasticBounds: 1,
    dragHandle: 1,
    dynamicHandle: 1,
    clickBar: 1,
    nextPage: $('.forward'),
    prevPage: $('.backward')
  });

  $(window).resize(function(e) {
        $frame.sly('reload');
  });

  $('a[href^="#"]').on('click',function (e) {
    e.preventDefault();

    var target = this.hash,
    $target = $(target);

    // Scroll to inline links
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 700, 'swing', function () {
      window.location.hash = target;
    });
  });


  // Fullscreen thumbnails
  $('#icann-stewardship-thumbnails').Chocolat();

  $(window).on('resize', function() {
    $('.frame .slidee li').width($('.frame').width()-30);
  });
});
