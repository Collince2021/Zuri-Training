$(function(){

$(".two-ctn").click(function(){

var $finding=$(this).find(".hide-para");
                  if($finding.hasClass("open") ){
                       $finding.removeClass("open");
                       $finding.fadeOut();
                       $(this).contents().hasClass("sign").text("+");
                   
                                      }
                     else{
                    $(this).contents().hasClass("sign").text("-");
                    $finding.addClass("open");
                    $finding.fadeIn();
                        }

})

})











