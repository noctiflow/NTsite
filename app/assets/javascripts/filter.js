$(document).ready(function(){
  $('.post').hide();
  $('.mission').show();
  $('.filtermenu > li').on('click',function(){
    console.log($(this).html());
    if($(this).hasClass('bt1') && !($(this).hasClass('filterbtn'))){
      $('.post').hide();
      $('li').removeClass('z-depth-5 filterbtn');
      $('.mission').fadeIn();
      $(this).addClass('z-depth-5 filterbtn');
    }else if($(this).hasClass('bt2') && !($(this).hasClass('filterbtn'))){
      $('.post').hide();
      $('li').removeClass('z-depth-5 filterbtn');
      $('.history').fadeIn();
      $(this).addClass('z-depth-5 filterbtn');
    }else if($(this).hasClass('bt3') && !($(this).hasClass('filterbtn'))){
      $('.post').hide();
      $('li').removeClass('z-depth-5 filterbtn');
      $('.concept').fadeIn();
      $(this).addClass('z-depth-5 filterbtn');
    }else if($(this).hasClass('bt4') && !($(this).hasClass('filterbtn'))){
      $('.post').hide();
      $('li').removeClass('z-depth-5 filterbtn');
      $('.question').fadeIn();
      $(this).addClass('z-depth-5 filterbtn');
    }
  });

});
