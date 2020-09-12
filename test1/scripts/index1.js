$(".nav").hover(function(){
     $("ul", $(this)).stop().slideDown();
}, function(){
     $("ul", $(this)).stop().slideUp();
});

var n = 0;
(function ani(){
     $(".slide").delay(2000).animate({"left": "-=960px"}, 2000, function(){
          n++;
          if (n==3) {
               n = 0;
               $(this).css("left", "0px");
          }
          ani();
     });
})();


var Content = $(".content > div");
$(Content).hide();
$(Content).last().slideDown(500);
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