// p: number;
// r: number;
// e:
// 0 1 1 2 3 5 8 13 21
// 0 1 2 3 4 5 6 7  8
//

// const fib = (n) => {
//   if (n === 0) return 0;
//   const arr = [0, 1];

//   for (let i = 2; i <= n; i++) {
//     arr[i] = arr[i - 1] + arr[i - 2];
//   }

//   return arr[arr.length - 1];
// };

const fib = (n, memo = {}) => {
  if (n === 0 || n === 1) return n;
  if (n in memo) return memo[n];

  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};
