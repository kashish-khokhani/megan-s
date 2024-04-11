
// sticky header
$(window).scroll(function(){
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
});

// preloader
  // pre loader
  $(document).ready(function(){
    setTimeout(function(){
      $('.preloader').fadeOut();
    },3000);
});

//   testimonial slider
$('#testi_sec').owlCarousel({
    items: 3,
    loop:true,
    margin:10,
    nav:false,
    center: true,
    center: true,
});

// accordian
$(document).ready(function(){
    $('.accordion-list > li > .answer').hide();
      
    $('.accordion-list > li').click(function() {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active").find(".answer").slideUp();
      } else {
        $(".accordion-list > li.active .answer").slideUp();
        $(".accordion-list > li.active").removeClass("active");
        $(this).addClass("active").find(".answer").slideDown();
      }
      return false;
    });    
});

// bottom to top
$(window).scroll(function(){ 
  if ($(this).scrollTop() > 100) { 
      $('#scroll').fadeIn(); 
  } else { 
      $('#scroll').fadeOut(); 
  } 
}); 
$('#scroll').click(function(){ 
  $("html, body").animate({ scrollTop: 0 }, 600); 
  return false; 
}); 

AOS.init();