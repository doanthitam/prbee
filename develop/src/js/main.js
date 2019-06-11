$(window).on('resize',function(){
  resize();
})
$(function() {
  $(".menu_btn").click(function() {
    if (!$(this).hasClass('is-active')) {
      $(this).addClass('is-active');
      $('.cv_nav').addClass('active');
    } else {
      $(this).removeClass('is-active');
      $('.cv_nav').removeClass('active');
      ('.cont_r').addClass('hidecontent');
    }
  });

//scroll//

      $(window).scroll(function(){
          var heightcont = $('.cont_r').outerHeight()
          var heightwindown = $( window ).height()
          var heightscreen = heightcont - heightwindown
          if($(this).scrollTop() > 50) {
            $('#header').hide();
            $(".cont_r").show(1000);
            $('.cont_r').addClass('opencontent');
          } else {
            $('.cont_r').removeClass('opencontent');
            $('#header').show();
          }
      });
});
