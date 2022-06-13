// https://leetcode.com/problems/climbing-stairs/

// p: int +
// r: int +
// e:
// Example 1:
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Example 2:
// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

////////////////////////////////////////////////////////////////
// Framework for solving DP Problems
// 1. Define the objective function
//// f(n) is the number of distinct ways => to reach n-th step
// 2. Identify base cases
//// f(0) = 1; f(1) = 1
// 3. Write down: Recurrence Relation for the optimized objective function
//// f(n) = f(n-1) + f(n-2)
// 4. What's the order of execution?
//// bottom-up
// 5. Where to look for the answer?
//// f(n)
////////////////////////////////////////////////////////////////

// var climbStairs = function (n) {
//   const arr = [];
//   arr[0] = 1;
//   arr[1] = 1;
//   for (let i = 2; i <= n; ++i) {
//     arr[i] = arr[i - 2] + arr[i - 1];
//   }
//   console.log(arr[n]);
//   return arr[n];
// };

var climbStairs = function (n) {
  a = b = 1;
  while (n--) {
    // a = (b += a) - a;
    b += a;
    a = b - a;
  }
  console.log(a);
  return a;
};

climbStairs(6);
// f(n) = f(n-1) + f(n-2)
// 0 =>    0xxx =>>> 1
// 1 =>    1
// 2 =>    1 1
//         2
// 3 =>    1 1 1
//         1 2
//         2 1
// 4 =>    1 1 1 1
//         1 1 2
//         1 2 1
//         2 1 1
//         2 2
// 5 =>    1 1 1 1 1
//         1 1 1 2
//         1 1 2 1
//         1 2 1 1
//         2 1 1 1
//         1 2 2
//         2 1 2
//         2 2 1
// 6 =>    1 1 1 1 1 1
//         1 1 1 1 2
//         1 1 1 2 1
//         1 1 2 1 1
//         1 2 1 1 1
//         2 1 1 1 1
//         1 1 2 2
//         1 2 2 1
//         2 2 1 1
//         1 2 1 2
//         2 1 2 1
//         2 1 1 2
//         2 2 2
