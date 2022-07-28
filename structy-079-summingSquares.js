// https://structy.net/problems/summing-squares

// p: num
// r: num
// For example: 1, 4, 9, 16 are perfect squares, but 8 is not perfect square.
// summingSquares(12) -> 2x2 + 2x2 + 2x2 = 3 squares

const summingSquares = (n) => {
  const sqrtN = Math.floor(Math.sqrt(n));
  const arr = Array.from(Array(sqrtN), (_, i) => (i + 1) ** 2);
  const min = Infinity;
  const memo = {};

  const r = explore(n, arr, min, memo);
  return r;
};

const explore = (n, nums, min, memo) => {
  if (n < 0) return Infinity;
  if (n === 0) return 0;
  if (n in memo) return memo[n];

  for (const num of nums) {
    min = Math.min(min, explore(n - num, nums, min, memo));
  }

  memo[n] = min + 1;
  return memo[n];
};

// // without momoization
// const summingSquares = (n) => {
//   const sqrtN = Math.floor(Math.sqrt(n));
//   const arr = Array.from(Array(sqrtN), (_, i) => (i + 1) ** 2);
//   const min = Infinity;

//   const r = explore(n, arr, min);
//   return r;
// };

// const explore = (n, nums, min) => {
//   if (n < 0) return Infinity;
//   if (n === 0) return 0;

//   for (const num of nums) {
//     min = Math.min(min, explore(n - num, nums, min));
//   }

//   return min + 1;
// };

// Given 12:

// summingSquares(12) -> 3

// The minimum squares required for 12 is three, by doing 4 + 4 + 4.

// Another way to make 12 is 9 + 1 + 1 + 1, but that requires four perfect squares.

console.log(summingSquares(8)); // -> 2
console.log(summingSquares(9)); // -> 1
console.log(summingSquares(12)); // -> 3
console.log(summingSquares(1)); // -> 1
console.log(summingSquares(31)); // -> 4
console.log(summingSquares(50)); // -> 2
