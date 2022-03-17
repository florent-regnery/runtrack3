function addone() {
  var compteur = document.getElementById("compteur");
  compteur.innerHTML = nbre++;
}

var button = document.getElementById("button");

button.addEventListener("click", addone);
var nbre = compteur.innerHTML;
