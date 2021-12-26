// https://leetcode.com/problems/fibonacci-number/

// p: int > 1
// r: int
// e:

// Example 1:
// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

// Example 2:
// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.

// Example 3:
// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

////////////////////////////////////////////////////////////////
// Framework for solving DP Problems
// 1. Define the objective function
//// f(n) is the number at the index n in the Fibonacci
// 2. Identify base cases
//// f(0) = 0; f(1) = 1
// 3. Write down: Recurrence Relation for the optimized objective function
//// f(n) = f(n-1) + f(n-2)
// 4. What's the order of execution?
//// bottom-up
// 5. Where to look for the answer?
//// f(n)
////////////////////////////////////////////////////////////////
//
// 0 1 1 2 3 5 8 13 21
// a b
//   a b
//     a b
//       a b
// Runtime: 83 ms, faster than 64.58% of JavaScript online submissions for Fibonacci Number.
// Memory Usage: 42 MB, less than 47.33% of JavaScript online submissions for Fibonacci Number.
var fib = function (n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  let a = 0,
    b = 1;
  for (let i = 2; i <= n; i++) {
    b = a + b;
    a = b - a;

    if (i === n) {
      console.log(b);
      return b;
    }
  }
};

// O(n)
// 0 1 1 2 3 5 8 13 21
// a b c
//   a b c
//     a b c
//       a b c
// Runtime: 65 ms, faster than 88.35% of JavaScript online submissions for Fibonacci Number.
// Memory Usage: 41.9 MB, less than 59.97% of JavaScript online submissions for Fibonacci Number.
// var fib = function (n) {
//   if (n === 0) return 0;
//   if (n === 1) return 1;
//   let a = 0,
//     b = 1;
//   for (let i = 2; i <= n; i++) {
//     c = b + a;

//     a = b;
//     b = c;

//     if (i === n) {
//       console.log(c);
//       return c;
//     }
//   }
// };

fib(2);

// // recursion
// Runtime: 179 ms, faster than 8.18% of JavaScript online submissions for Fibonacci Number.
// Memory Usage: 41.8 MB, less than 71.71% of JavaScript online submissions for Fibonacci Number.
// var fib = function (n) {
//   if (n === 0) return 0;
//   if (n === 1) return 1;
//   console.log(fib(n - 1) + fib(n - 2));
//   return fib(n - 1) + fib(n - 2);
// };

// // DP
// Runtime: 60 ms
// Memory Usage: 41.8 MB
// var fib = function (n) {
//     if (n === 0) return 0;
//     if (n === 1) return 1;

//     let arr = [0, 1];

//     for (i = 2; i <= n; i++) {
//       arr[i] = arr[i - 1] + arr[i - 2];

//       if (i === n) {
//         console.log(arr[i]);
//         return arr[i];
//       }
//     }
//   };
