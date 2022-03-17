function tri(numbers, order) {
  if (order == "asc") {
    var temp = numbers.sort(function (a, b) {
      return a - b;
    });

    return temp;
  }

  if (order == "desc") {
    var temp = numbers.sort(function (a, b) {
      return b - a;
    });

    return temp;
  }
}
tableau = [1, 2, 13, 14, 50];
console.log(tri(tableau, asc));
