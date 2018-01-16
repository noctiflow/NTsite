# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
$ ->
  $('.titlebox').mouseenter ->
    $(this).css('background-color','yellow','margin-top','5px')
    $(this).find('span').css('color','blue')
  $('.titlebox').mouseleave ->
    $(this).css('background-color','#ccc','margin-top','25px')
    $(this).find('span').css('color','#222')