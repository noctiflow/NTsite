// $(document).ready(function(){
//   // MODAL
//   $('.modal').modal();
//   // DROPDOWNS
//   $(".dropdown-button").dropdown(
//     {
//       belowOrigin: true
//     }
//   );
//   // TABS
//   $('ul.tabs').tabs();
//   // SCROLLSPY
//   $('.scrollspy').scrollSpy();
//   //SIDENAV
//   $(".button-collapse").sideNav();
// });

// NAVBAR JQUERY========================

$(document).ready(function() {
  function checkScroll(){
      var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

      if($(window).scrollTop() > startY){
          $('.navbar').addClass("scrolled");
      }else{
          $('.navbar').removeClass("scrolled");
      }
  }

  if($('.navbar').length > 0){
      $(window).on("scroll load resize", function(){
          checkScroll();
      });
  }

    $('.footer2').on('mouseenter',function(event){
      $('.footer').css('visibility','visible')
      $('.footer2').css('visibility','hidden')
    })
    $('.footer').on('mouseleave',function(event){
      $('.footer2').css('visibility','visible')
      $('.footer').css('visibility','hidden')
    })

});
