function bisextile(years) {
  var years;
  if (years % 4 == 0 || (years % 100 != 0 && years % 400 == 0)) {
    return true;
  } else {
    return false;
  }
}
console.log(bisextile(2000));
