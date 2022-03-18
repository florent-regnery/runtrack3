// $(document).ready(function () {
//   $("#button").click(function () {
//     $.ajax({
//       url: "expression.txt",
//       method: "get",
//       //data: { },

//       success: (data) => {
//         $("p").html(data);
//       },
//     });
//   });
// });

jQuery(document).ready(function ($){
  $('button').click(function (){
      fetch('expression.txt')
      .then(response => response.text())
      .then(data =>{
          $('body').append('<p>'+data + '</p>')
      })
  })
  })
