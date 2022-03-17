function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

var tab = [
  "arc1.png",
  "arc2.png",
  "arc3.png",
  "arc4.png",
  "arc5.png",
  "arc6.png",
];
var images = [
  "arc1.png",
  "arc2.png",
  "arc3.png",
  "arc4.png",
  "arc5.png",
  "arc6.png",
];
var newTab = [];
var nbr = 0;
var point = 0;

for (var i = 0; i < images.length; i++) {
  $("#melangees").append("<img class='img' src='" + images[i] + "' />");
}
$(document).ready(function () {
  $("#button").click(function () {
    $("img").remove("");
    $("#button").hide();
    shuffle(images);

    for (var i = 0; i < images.length; i++) {
      $("#melangees").append("<img class='img' src='" + images[i] + "' />");
    }

    $(".img").click(function () {
      $(this).css("display", "none");
      var src = $(this).attr("src");
      $("#rangees").append("<img  src='" + src + "' />");

      newTab[nbr] = src;
      nbr++;

      if (newTab.length === 6) {
        for (let i = 0; i < newTab.length; i++) {
          if (tab[i] === newTab[i]) {
            point++;
          }
        }
        if (point === 6) {
          $("#rangees").append("<h1>Vous avez gagné</h1>");
          $("h1").css("color", "green");
        } else {
          $("#rangees").append("<h1>Vous avez perdu</h1>");
          $("h1").css("color", "red");
        }
      }
    });
  });
});
