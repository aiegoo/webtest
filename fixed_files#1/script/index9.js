//jshint: version6;

/* $(".navs").hover(function(){
     $(".submenu", $(this)).stop().slideDown();
}, function(){
     $(".submenu", $(this)).stop().slideUp();
}); */
$(".navs").hover(function(){
     $(".submenu", $(this)).stop().slideDown();
     $(".navs", $(this)).css("z-index", "9999");
}, function(){
     $(".submenu", $(this)).stop().slideUp();
});

var n = 0;
(function ani(){
     $(".banner ul").delay(2000).animate({"left": "-=1200px"}, 2000, function(){
          n++;
          if (n==3) {
               n=0;
               $(this).css("left", "0px");
          }
          ani();
     });
})();

function modalOpen(){
     $("#modal-bg").show(0);
     $("#modal-wrap").css("display", "table-cell");
}

function modalClose() {
     $("#modal-bg").hide();
     $("#modal-wrap").css("display", "none");
}


function popUp() {
     window.open("popUp.html", "tokkiya", "wdith=500, height=500, left=100, top=100, menubar=no, scrollbar=no, toolbar=no, location=no, status=no, resizable=no");
}

var i = 0;
var depth =20;
(function gallery(){
     $(".gallery-wrap li").eq(i).css("z-index", depth++).fadeOut(0);
     $(".gallery-wrap li").eq(i).delay(2000).fadeIn(2000, function(){
          if (i==2) i=0;
          else i++;
          gallery();
     });
});

$(".bts").click(function(){
     var n = $(this).index();
     $(".bts a").css("color", "#6495ed");
     $(".bts a").eq(n).css("color", "#f30");
     $(".partner_info").stop().animate({"left": (-n*360)+"px"}, 2000);
});