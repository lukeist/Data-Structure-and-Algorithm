// https://www.hackerrank.com/challenges/one-month-preparation-kit-flipping-bits

// p: int
// r: int
// e:

function flippingBits(n) {
  return 2 ** 32 - 1 - n; // dont understand
}

// let binary = Number(n).toString(2);
// let flipped = binary
//   .split("")
//   .map((n) => 1 - n)
//   .join("");
// return parseInt(flipped.padStart(32, 1), 2);
