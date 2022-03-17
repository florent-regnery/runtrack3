function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

var pieces = [
  "img/1.PNG",
  "img/2.PNG",
  "img/3.PNG",
  "img/4.PNG",
  "img/5.PNG",
  "img/6.PNG",
  "img/7.PNG",
  "img/8.PNG",
  "img/9.PNG",
];
var nouveau_jeu = [
  "img/1.PNG",
  "img/2.PNG",
  "img/3.PNG",
  "img/4.PNG",
  "img/5.PNG",
  "img/6.PNG",
  "img/7.PNG",
  "img/8.PNG",
  "img/9.PNG",
];

shuffle(nouveau_jeu);

for (let i = 0; i < pieces.length; i++) {
  $(`#${i}`).append("<img src='" + nouveau_jeu[i] + "' />");
}

$("img").click(function () {
  console.log(this);
  console.log($(this).parent().attr("id"));
});
