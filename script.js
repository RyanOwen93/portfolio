/*---------------------- Menu Overlay -------------------*/

$(document).ready(function() {
    $('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
  }); 

/*---------------------- Homepage Header ---------------*/    
    
// Wrap every letter in a span
$('.ml12').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({loop: true})
  .add({
    targets: '.ml12 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: function(el, i) {
      return 500 + 30 * i;
    }
  }).add({
    targets: '.ml12 .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 5100,
    delay: function(el, i) {
      return 100 + 30 * i;
    }
  });
    
    $('.ml13').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({loop: true})
  .add({
    targets: '.ml13 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1500,
    delay: function(el, i) {
      return 500 + 30 * i;
    }
  }).add({
    targets: '.ml13 .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 5100,
    delay: function(el, i) {
      return 100 + 30 * i;
    }
  });
    
/*---------------------- Bio FadeIn -------------------*/    
    
$(function() {
    $('body').removeClass('fade-out');
});

$('.menu span:last-child').click(function(){
    $('.menu span').not(':last-child').toggleClass('hidden show') ;
  })
    
});


    