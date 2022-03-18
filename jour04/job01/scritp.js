$(document).ready(function () {
  $("#button").click(function () {
    $.ajax({
      url: "expression.txt",
      method: "get",
      //data: { },

      success: (data) => {
        $("p").html(data);
      },
    });
  });
});
