$(".navs").hover(function(){
     $(".submenu", $(this)).stop().slideDown();
}, function(){
     $(".submenu", $(this)).stop().slideUp();     
});

var n = 0;
(function ani(){
     $(".banner ul").delay(2000).animate({
          "left": "-=1000px"
     }, 2000, function(){
          n++;
          if (n==3) {
               n=0;
               $(this).css("left", "0px");
          }
          ani();
     });
});