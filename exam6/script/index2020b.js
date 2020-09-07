$(".navs").hover(
  function () {
    $(".submenu", $(this)).stop().slideDown();
  },
  function () {
    $(".submenu", $(this)).stop().slideUp();
  }
);

var n = 0;
(function ani() {
  $(".banner ul")
    .delay(2000)
    .animate({ left: "-=1000px" }, 2000, function () {
      n++;
      if (n == 2) {
        n = 0;
        $(this).css("left", "0px");
      }
      ani();
    });
})();

function modalOpen() {
  // you need only to change css porperty
  // $("#modal-bg").show(0);
  $("#modal-bg").css("display", "block");
}
// you need to make btn when you clicked on it close the popup
$("#btn-close").on("click", function () {
  $("#modal-bg").css("display", "none");
});

// this is wrong way to do the hide and show

// function modalClose() {
//   $("#modal-bg").hide();
//   $("#modal-bg").css("display", "none");
// }

function popUp() {
  window.open(
    "popUp2020.html",
    "hello-popup",
    "width=400, height=400, left=200, top=300, menubar=no, scrollbars=no, toolbar=no, location=no, status=no, resizable=no"
  );
}

var i = 0;
var depth = 20;
(function gallery() {
  $(".gallery-wrap li")
    .eq(i)
    .css("z-index", depth++)
    .fadeOut(0);
  $(".gallery-wrap li")
    .eq(i)
    .delay(2000)
    .fadeIn(2000, function () {
      if (i == 2) i = 0;
      else i++;
      gallery();
    });
}); //() not necessary?

$(".bts").click(function () {
  var x = $(this).index();
  // to rest all colors
  $(".bts").css("color", "cornflowerblue");
  $(this).css("color", "#f30");
  $(".partner_info a")
    .eq(x)
    .animate({ marginLeft: -x * 100 + "px" }, 2000);
});

var tabs = $(".tabs li a");

tabs.click(function () {
  var content = this.hash.replace("/", "");
  tabs.removeClass("active");
  $(this).addClass("active");
  $("#content").find("p").hide();
  $(content).fadeIn(200);
});
