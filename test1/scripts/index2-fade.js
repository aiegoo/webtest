$(".nav").hover(function(){
     $(".submenu", $(this)).stop().slideDown();
}, function(){
     $(".submenu", $(this)).stop().slideUp();
});

/* var n = 0;
(function ani(){
     $(".slide").delay(2000).animate({"left": "-=960px"}, 2000, function(){
          n++;
          if (n==3) {
               n=0;
               $(this).css("left", "0px");
          }
          ani();
     });
})(); */

var i = 0;
var depth = 20;
(function ani(){
      $(".slide li").eq(i).css("z-index", depth++).fadeOut(500);
      $(".slide li").eq(i).delay(2000).fadeIn(2000, function(){
            if (i ==2) i = 0;
            else i++;
            ani();
      });
})();

/* var n = 0;
var depth = 20;
(function ani(){
     $(".slide li").eq(n).css("z-index", depth++).fadeOut(0);
     $(".slide li").eq(n).delay(500).fadeIn(2000, function(){
          if (n==2) n=0;
          else n++;
          ani();
     });
})(); */

var Content = $(".content > div");
$(Content).hide();
$(Content).last().slideDown();
$(".tab-buttons span").click(function(){
     var Tabs = $(this).attr("class");
     $("#lamp").removeClass().addClass("#lamp").addClass(Tabs);
     $(Content).each(function(){
 if($(this).hasClass(Tabs)){
          $(this).fadeIn(800);
     }else{
          $(this).hide();
    }
});
});
