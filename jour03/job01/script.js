function OnClickBtn() {
  $("p").show();
  $("#supprimer").show();
}

function hideBtn() {
  $("*").hide();
}

$("p").hide();
$("#supprimer").hide();
$("#button").click(OnClickBtn);
$("#supprimer").click(hideBtn);
