$(document).ready(function(){
  $('.post').hide();
  $('.mission').show();
  $('.filtermenu > li').on('click',function(){
    console.log($(this).html());
    if($(this).html()=='Mission' && !($(this).hasClass('filterbtn'))){
      $('.post').hide();
      $('li').removeClass('z-depth-5 filterbtn');
      $('.mission').fadeIn();
      $(this).addClass('z-depth-5 filterbtn');
    }else if($(this).html()=='History' && !($(this).hasClass('filterbtn'))){
      $('.post').hide();
      $('li').removeClass('z-depth-5 filterbtn');
      $('.history').fadeIn();
      $(this).addClass('z-depth-5 filterbtn');
    }else if($(this).html()=='Concept' && !($(this).hasClass('filterbtn'))){
      $('.post').hide();
      $('li').removeClass('z-depth-5 filterbtn');
      $('.concept').fadeIn();
      $(this).addClass('z-depth-5 filterbtn');
    }else if($(this).html()=='Question' && !($(this).hasClass('filterbtn'))){
      $('.post').hide();
      $('li').removeClass('z-depth-5 filterbtn');
      $('.question').fadeIn();
      $(this).addClass('z-depth-5 filterbtn');
    }
  });

});
