// p: number;
// r: number;
// e: 8 => 2x2 2x2
// 12 => 2x2 2x2 2x2 2x2

//                                   8
//                              1*1/  \2*2
//                              7        4
//                           1/ 2\      1/ \2
//                           6   3      3   0
//

const summingSquares = (n, memo = {}) => {
  if (n === 0) return 0;
  if (n in memo) return memo[n];
  let min = Infinity;

  for (let i = 1; i * i <= n; i++) {
    min = Math.min(min, summingSquares(n - i * i, memo));
  }

  memo[n] = min + 1;
  return min + 1;
};
