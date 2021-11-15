////////////////////////////////////////////////////////////////
// LAST step's price !== 0
////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
// Framework for solving DP Problems
// 1. Define the objective function
////  f(n) is the cheapest way to get to the last step
// 2. Identify base cases,
////([3, 2, 4, 6, 1, 1, 5, 3]); // => 0--3--2--4--6--1--1--5--3
//// f(0) = 0
//// f(1) = 3
//// f(2) = 2
//// f(3) = 6
// 3. Write down: Recurrence Relation for the optimized objective function
//// f(n) = n + min(fn-1, fn-2)

// 4. What's the order of execution?
//// bottom-up
// 5. Where to look for the answer?
//// f(n)
//////////////////////////////////////////////////////////////// CHEAPEST PATH
// // n steps, k steps, prices
// const minCostStairs = (cost) => {
//   const path = new Set();
//   const costPerStep = [0, cost[0], cost[1]];

//   for (let i = 2; i < cost.length; i++) {
//     cost[i] = cost[i] + Math.min(cost[i - 1], cost[i - 2]);
//     Math.min(cost[i - 1], cost[i - 2]) === cost[i - 1]
//       ? steps.add(i - 1)
//       : steps.add(i - 2);
//   }
//   steps.add(cost[cost.length - 1]);
//   console.log(steps);
// };
// // n = 8 stairs, k = 2 steps,
// minCostStairs([3, 2, 4, 6, 1, 1, 5, 3]); // => 0--3--2--4--6--1--1--5--3

// ABOVE
// OPTIMIZED TO THIS: time O(n), space O(1)
// UNDER
//////////////////////////////////////////////////////////////// CHEAPEST PATH WITH OPTIMIZED COST

// // n steps, k steps, prices
const minCostStairs = (cost) => {
  //   const price = [0, ...cost];
  const path = new Set();
  let count = 0;

  for (let i = 2; i < cost.length; i++) {
    cost[i] = cost[i] + Math.min(cost[i - 1], cost[i - 2]);
    // cost[i - 1] < cost[i - 2] ? (count += cost[i - 1]) : (count += cost[i - 2]);
    cost[i - 1] < cost[i - 2] && path.add(i - 1); // not add  when ===
    cost[i - 1] > cost[i - 2] && path.add(i - 2);
  }

  //   steps.add(cost[cost.length - 1]);
  //   console.log([
  //     price[0],
  //     ...Array.from(path).map((e) => cost[e]),
  //     cost[cost.length - 1],
  //   ]);
  //   console.log(cost);

  console.log([...path, cost[cost.length - 1]]);
};

// for (let i = 1; i < cost.length; i++) {}
// // n = 8 stairs, k = 2 steps,
minCostStairs([3, 2, 4, 6, 1, 1, 5, 3]); // => 0--3--2--4--6--1--1--5--3
// minCostStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1, 0]); //
// // https://leetcode.com/problems/min-cost-climbing-stairs/
// ////////////////////////////////////////////////////////////////
// // LAST step's price !== 0
// ////////////////////////////////////////////////////////////////

// ////////////////////////////////////////////////////////////////
// // Framework for solving DP Problems
// // 1. Define the objective function
// ////  f(n) is the cheapest way to get to the last step
// // 2. Identify base cases,
// ////([3, 2, 4])  => 0--3--2--4
// //// f(0) = 0
// //// f(1) = 3
// //// f(2) = 2
// //// f(3) = 6
// // 3. Write down: Recurrence Relation for the optimized objective function
// //// f(n) = min(fn + fn-1, fn + fn-2)

// // 4. What's the order of execution?
// //// bottom-up
// // 5. Where to look for the answer?
// ////
// ////////////////////////////////////////////////////////////////
// const minCostStairs = (cost) => {
//   for (i = 2; i < cost.length; i++) {
//     cost[i] = cost[i] + Math.min(cost[i - 1], cost[i - 2]);
//   }
//   console.log(cost[cost.length - 1]);
//   return cost[cost.length - 1];
// };

// minCostStairs([3, 2, 4]);
// minCostStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1, 0]);
