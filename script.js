$(function (){
$(".two-ctn").click(
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
  
})



})
