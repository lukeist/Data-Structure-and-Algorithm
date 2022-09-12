// p: num
// r: num

// recursion O(n) O(n)
const fib = (n, memo = {}) => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n in memo) return memo[n];

  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};

// // iteration O(n - 2) O(n)
// const fib = (n) => {
//   const arr = [0 , 1]

//   for (let i = 2; i <= n; i++) {
//     arr[i] = arr[i-1] + arr[i - 2]
//   }

//   return arr[n];
// };

module.exports = {
  fib,
};

// 0 1 1 2 3 5 8
//
