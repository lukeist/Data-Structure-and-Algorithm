// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

function highAndLow(numbers) {
  // ...
  return `${Math.max(...numbers.split(" ").map((n) => +n))} ${Math.min(
    ...numbers.split(" ").map((n) => +n)
  )}`;
}
