$(document).ready(function () {
  var tableau = [];

  $.ajax({
    url: "pokemon.json",
    method: "get",

    success: (data) => {
      var array_types = [];
      for (pokemons of data) {
        for (types of pokemons.type) {
          if (array_types.includes(types) === false) {
            array_types.push(types);
          }
        }
      }
      for (info of array_types) {
        $("select").append(
          '<option  value="' + info + '">' + info + "</option>"
        );
      }

      $("#filter").click(function () {
        var id = $("#id").val();
        var nom = $("#nom").val();
        var type = $("#select").val();

        for (pokemon of data) {
          if (pokemon.id == id) {
            $("div").html(
              "<p>L'id numero " +
                pokemon["id"] +
                " ===> " +
                pokemon["name"]["french"] +
                "<br /> type ==> " +
                pokemon["type"] +
                " <br /> base ==> <br> HP=>" +
                pokemon.base["HP"] +
                "<br> Attaque => " +
                pokemon.base["Attack"] +
                " <br>Défence => " +
                pokemon.base["Defense"] +
                "<br> Sp. Attack: " +
                pokemon.base["Sp. Attack"] +
                "<br> Sp. Defense:" +
                pokemon.base["Sp. Defense"] +
                "<br>Speed:" +
                pokemon.base["Speed"] +
                "  </p>"
            );
          }

          if (
            pokemon.name.french.toLowerCase() === nom.toLowerCase() ||
            pokemon.name.english.toLowerCase() === nom.toLowerCase() ||
            pokemon.name.japanese.toLowerCase() === nom.toLowerCase() ||
            pokemon.name.japanese.toLowerCase() === nom.toLowerCase()
          ) {
            $("div").html(
              "<p>L'id numero " +
                pokemon["id"] +
                " ===> " +
                pokemon["name"]["french"] +
                "<br /> type ==> " +
                pokemon["type"] +
                " <br /> base ==> <br> HP=>" +
                pokemon.base["HP"] +
                "<br> Attaque => " +
                pokemon.base["Attack"] +
                " <br>Défence => " +
                pokemon.base["Defense"] +
                "<br> Sp. Attack: " +
                pokemon.base["Sp. Attack"] +
                "<br> Sp. Defense:" +
                pokemon.base["Sp. Defense"] +
                "<br>Speed:" +
                pokemon.base["Speed"] +
                "  </p>"
            );
          }

          if (pokemon.type == type) {
            tableau.push(pokemon);
            console.log(pokemon.base["HP"]);

            for (let i = 0; i < tableau.length; i++) {
              console.log("ok");
              $("body").append(
                "<p>L'id numero " +
                  tableau[i].id +
                  " ===> " +
                  tableau[i].name.french +
                  "<br /> type ==> " +
                  tableau[i].type +
                  " <br /> base ==> <br> HP:" +
                  tableau[i].base["HP"] +
                  "<br> Attaque :" +
                  tableau[i].base["Attack"] +
                  ", <br>defence:" +
                  tableau[i].base["Defense"] +
                  "<br> Sp. Attack: " +
                  tableau[i].base["Sp. Attack"] +
                  "<br> Sp. Defense:" +
                  tableau[i].base["Sp. Defense"] +
                  "<br>Speed:" +
                  tableau[i].base["Speed"] +
                  " </p>"
              );
            }
          }
        }
      });
    },
  });
});
