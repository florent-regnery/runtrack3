var textarea = document.getElementById("keylogger");

document.addEventListener("keypress", function () {
  var ancienmot = textarea.value;
  var lettre = event.key;
  textarea.value = ancienmot + lettre;
});
