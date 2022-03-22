$(document).ready(function () {
  $.ajax({
    type: "get",
    url: "index.php",
    dataType: "JSON",
    success: function (response) {
      $("#button").click(function () {
        $("#list").text(function () {
          let myData = response.lenght;
          for (let i = 0; i < myData; i++) {
            let id = myData[i].id;
            console.log(id);
          }
        });
      });
    },
  });
});
