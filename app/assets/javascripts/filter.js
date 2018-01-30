$(document).ready(function(){
  $('.post').hide();
  $('.history').show();
  $('.filtermenu > li').on('click',function(){
    console.log($(this).html());
    if($(this).html()=='Mission' && !($(this).hasClass('filterbtn'))){
      $('.post').hide();
      $('li').removeClass('z-depth-5 filterbtn');
      $('.mission').fadeIn(3000);
      $(this).addClass('z-depth-5 filterbtn');
    }else if($(this).html()=='History' && !($(this).hasClass('filterbtn'))){
      $('.post').hide();
      $('li').removeClass('z-depth-5 filterbtn');
      $('.history').fadeIn(3000);
      $(this).addClass('z-depth-5 filterbtn');
    }else if($(this).html()=='Concept' && !($(this).hasClass('filterbtn'))){
      $('.post').hide();
      $('li').removeClass('z-depth-5 filterbtn');
      $('.concept').fadeIn(3000);
      $(this).addClass('z-depth-5 filterbtn');
    }
  });

});
