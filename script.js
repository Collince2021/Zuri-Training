$(function(){

$(".two-ctn").click(function(){

var $finding=$(this).find(".hide-para");
                  if($finding.hasClass("open") ){
                    $(".sign").text("-");
                    $finding.removeClass("open");
                    $finding.fadeOut();
                   
                                      }
                     else{
                    $(".sign").text("+");
                    $finding.addClass("open");
                    $finding.fadeIn();
                   
                       
                        }





})












})
