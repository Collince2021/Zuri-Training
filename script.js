$(function (){
$(".para").click(
  function (){
  var $find=$(this).find(".hide-para");
  if ($find.hasClass("open")){
   $find.removeClass("open");
   $find.slideDown();
   $(this).find(".sign").text("-");}
    else {
      $find.addClass("open");
      $find.slideUp();
       $(this).find(".sign").text("+");
      


}
  
})



})
