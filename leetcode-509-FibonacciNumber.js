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
var fib = function (n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  let arr = [0, 1];
  for (i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];

    if (i === n) {
      console.log(arr[i]);
      return arr[i];
    }
  }
};

fib(0);
