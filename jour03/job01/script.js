jQuery(document).ready(function ($) {
  $("p").hide();
  $("#button").click(function () {
    $("p").show();
  });
  $("#cacher").click(function () {
    $("p").hide();
  });
});
