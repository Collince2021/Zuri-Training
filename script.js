$(function() {

  $(".two-ctn").click(function() {

    var $finding = $(this).find(".hide-para");
    if ($finding.hasClass("open")) {
      $finding.removeClass("open");
      $finding.fadeOut();
      $(this).find(".sign").text("+").css({
        "color": "black",

      })
    }
    else {
      $(this).find(".sign").text("-").css({
        "color": "red",

      });
      $finding.addClass("open");
      $finding.fadeIn();
    }

  })

})











