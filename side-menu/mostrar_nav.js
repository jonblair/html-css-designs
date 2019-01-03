$(document).ready(function(){ 
  $('.hamburger').click(function(event) {
    $('.hamburger').toggleClass('is-active');
    $('nav').toggleClass('active');
  });
});
