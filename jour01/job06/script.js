function fizzbuzz() {
  for (let i = 1; i <= 151; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("Fizzbuzz");
    }
    if (i % 3 == 0) {
      console.log("Fizz");
    }
    if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
fizzbuzz();
