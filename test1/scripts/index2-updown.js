$(".nav").hover(function(){
     $(".submenu", $(this)).stop().slideDown();
}, function(){
     $(".submenu", $(this)).stop().slideUp();
});

var n = 0;
(function ani(){
     $(".slide li").delay(2000).eq(0).animate({"margin-top": "-=400px"}, 2000, function(){
          n++;
          if (n==3) {
               n=0;
               $(this).css("margin-top", "0px");
          }
          ani();
     });
})();

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
