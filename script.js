$(function() {

  $(".two-ctn").click(function() {

    var $finding = $(this).find(".hide-para");
    if ($finding.hasClass("open")) {
      $finding.removeClass("open");
      $finding.fadeOut();
      $(this).find(".sign").css({
        "transform": "none",
        "color": "black",
        "top": "-70px"

      })
    }
    else {
      $(this).find(".sign").css({
        "transform": "rotate(-30deg)",
        "color": "red",
        "top": "-120px",
        "left": "340px"
      });
      $finding.addClass("open");
      $finding.fadeIn();
    }

  })

})











