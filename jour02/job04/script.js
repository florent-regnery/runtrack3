document.addEventListener("DOMContentLoaded", () => {
  let key = "";
  
  window.addEventListener("keydown", function (event) {
    let value = document.getElementById("keylogger").value;
    key = value + event.key;
    document.getElementById("keylogger").value = key;
  });
});
