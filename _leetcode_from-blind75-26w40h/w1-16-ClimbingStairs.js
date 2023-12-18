/**
 * @param {number} n
 * @return {number}
 */

// p: number
// r: number
//                                  n
//                             /        \
//                          n-1       n-2
//                       /    \        /    \
//                    n-2   n-3        n-3   n-4

//                                  5
//                             /        \
//                          4            3
//                       /    \        /    \
//                      3      2       2    1
//                     / \    / \          /  \
//                    2   1   1  0        0

// tabulation
var climbStairs = function (n) {
  const arr = [1, 1];
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[arr.length - 1];
};

// memoization
// var climbStairs = function(n, memo = {}) {
//     if (n === 0 || n === 1) return 1;
//     if (n in memo) return memo[n];
//     memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
//     return memo[n];
// };
