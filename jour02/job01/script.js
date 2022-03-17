document.addEventListener("DOMContentLoaded", (event) => {
  var cit = document.getElementById("citation");
  var button = document.getElementById("button");

  button.addEventListener("click", function citation() {
  console.log(cit);
  });
});
