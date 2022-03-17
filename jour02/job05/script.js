document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("scroll", function () {
    var element = document.querySelector("footer");
    let change = Math.round((100 * scrollY) / 4096);

    element.setAttribute("style", "--color:#ee" + change + change);
  });
});
