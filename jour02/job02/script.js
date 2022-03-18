document.addEventListener("DOMContentLoaded", (event) => {
  var cit = document.querySelector("article");
  var button = document.getElementById("button");

  button.addEventListener("click", function showhide() {
    if (cit.style.display == "block") cit.style.display = "none";
    else cit.style.display = "block";
  });
});
