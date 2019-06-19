$(window).on('resize',function(){
  resize();
})
$(function() {
  $(window).scroll(function(){
    if ($(window).scrollTop() >= 300) {
      $('.header').addClass('fixed-header');
      $('.header .logo').addClass('visible-title');
    }
    else {
        $('.header').removeClass('fixed-header');
        $('.header .logo').removeClass('visible-title');
    }
  });
  // Anchor
  $('a[href^="#"]').click(function(){
    var hasttop = $(this.hash).offset().top;
    var hasttopNew = hasttop - 123
    $('html, body').animate({
      scrollTop: hasttopNew
    }, 500);
    return false;
  });
});
