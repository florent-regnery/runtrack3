jQuery(document).ready(function ($) {
  function jsonValueKey(key, string) {
    for (var i in string) {
      console.log(string[key]);
    }
  }
  jsonValueKey("city", {
    name: "LaPlateforme_",
    address: "8 rue d'Hozier",
    city: "Marseille",
    nb_staff: "11",
    creation: "2019",
  });
});
