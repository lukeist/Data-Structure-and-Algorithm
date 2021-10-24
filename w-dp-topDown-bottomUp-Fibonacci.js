//////////////////////////////////////////////////////////// top - down
// // recursion
// Runtime: 145 ms, faster than 14.70% of JavaScript online submissions for Fibonacci Number.
// Memory Usage: 42.1 MB, less than 23.85% of JavaScript online submissions for Fibonacci Number.
// const fibR = (n) => {
//   if (n === 0) return 0;
//   if (n === 1) return 1;

//   return fibR(n - 1) + fibR(n - 2);
// };
// console.log(fibR(8));

// // recursion + memoization
// // Runtime: 107 ms, faster than 35.19% of JavaScript online submissions for Fibonacci Number.
// // Memory Usage: 41.7 MB, less than 70.74% of JavaScript online submissions for Fibonacci Number.
// const fibRM = (n) => {
//   const map = { 0: 0, 1: 1 };
//   return fibRMMap(map, n);
// };

// const fibRMMap = (map, n) => {
//   if (n in map) return map[n];
//   return fibRMMap(map, n - 1) + fibRMMap(map, n - 2);
// };

// // fibRM(1);
// console.log(fibRM(8));

//////////////////////////////////////////////////////////// bottom - up
// forward db
// const fib = (n) => {
//   const arr = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     arr[i] = arr[i - 1] + arr[i - 2];
//   }
//   console.log(arr[n]);
//   return arr[n];
// };
// fib(8);

// backward db  ////////////////////////// NOT WORKING???
const fib = (n) => {
  const dp = [0, 1, 1];
  for (let i = 1; i < n; i++) {
    dp[i + 1] += dp[i];
    dp[i + 2] += dp[i];
  }
  return dp[n];
};
fib(8);
