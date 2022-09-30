// p: num
// r: num

//  8: 1x1 2x2
//  9: 1x1 2x2 3x3
// 12: 1x1 2x2 3x3
//               12
//   1x1         2x2        3x3
//   11          8          3
//1x1 2x2 3x3                 1x1 2x2 3x3
//10  7   2                    2  -1    -6
//                          1x1 2x2 3x3
//                          1
//                      1x1 2x2 3x3
//                       0

// recursive W memo: O(n * sqrt(n)) O(n)
const summingSquares = (n, memo = {}) => {
  // if (n < 0) return Infinity;
  if (n === 0) return 0;
  if (n in memo) return memo[n];

  let min = Infinity;

  for (let i = 1; i <= Math.sqrt(n); i++) {
    min = Math.min(min, 1 + summingSquares(n - i * i, memo));
  }

  memo[n] = min;
  return min;
};
