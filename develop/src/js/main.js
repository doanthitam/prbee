$(window).on('resize',function(){
  // resize();
})
var backtotop = $('#scrollTop');
$(window).scroll(function(){
  if ($(window).scrollTop() >= 300) {
    $('.header').addClass('fixed-header');
    $('.header .logo').addClass('visible-title');
    backtotop.addClass('show');
  }
  else {
      $('.header').removeClass('fixed-header');
      $('.header .logo').removeClass('visible-title');
      backtotop.removeClass('show');
  }
});
backtotop.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

// Anchor
$('a[href^="#"]').click(function(){
  var hasttop = $(this.hash).offset().top;
  var headerheight = $("#header").innerHeight();
  var hasttopNew = hasttop - headerheight
  $('html, body').animate({
    scrollTop: hasttopNew
  }, 500);
  return false;
});

//animation content//
function animation(){
  $('.fadeInUp').each(function(){
    //ターゲットの位置を取得
    var target = $(this).offset().top;
    //スクロール量を取得
    var scroll = $(window).scrollTop();
    //ウィンドウの高さを取得
    var windowHeight = $(window).height();
    //ターゲットまでスクロールするとフェードインする
    if (scroll > target - windowHeight){
      $(this).css('opacity','1');
      $(this).css('transform','translateY(0)');
    }
  });
}
  animation();
$(window).scroll(function (){
  animation();
});
