$(function(){

$(".two-ctn").click(function(){

var $finding=$(this).find(".hide-para");
                  if($finding.hasClass("open") ){
                       $finding.removeClass("open");
                       $finding.fadeOut();
                       $(".sign").text("+");
                   
                                      }
                     else{
                    $(".sign").text("-");
                    $finding.addClass("open");
                    $finding.fadeIn();
                   
                       
                        }





})












})
