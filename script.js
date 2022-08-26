$(function (){
$(".two-ctn").hover(
  function (){
  var $find=$(this).find(".hide-para");
  if ($find.hasClass("open")){
   $find.removeClass("open");
   $find.slideDown();
   $(".sign").text("-");}
    else {
      $find.addClass("open");
      $find.slideUp();
       $(".sign").text("+");
     
}
  
}, function (){
var $find=$(this).find(".hide-para");
$find.removeClass("open");
$find.fadeOut();
$(".sign").text("+");

})



})
