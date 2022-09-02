$(function(){

$(".two-ctn").click(function(){

var $finding=$(this).find(".hide-para");
                  if($finding.hasClass("open") ){
                       $finding.removeClass("open");
                       $finding.fadeOut();
                       $(this).children().hasClass(".sign").text("+");
                   
                                      }
                     else{
                    $(this).children().hasClass(".sign").text("-");
                    $finding.addClass("open");
                    $finding.fadeIn();
                   
                       
                        }





})












})
