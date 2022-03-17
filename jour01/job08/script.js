function sommenombrespremiers(variable1, variable2) {
  for (var i = 2; i < variable1; i++) {
    if (variable1 % i == 0) {
      return false;
    }
  }

  for (var i = 2; i < variable2; i++) {
    if (variable2 % i == 0) {
      return false;
    }
  }

  var resultat = variable1 + variable2;
  return resultat;
}
