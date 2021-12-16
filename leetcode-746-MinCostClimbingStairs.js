// https://leetcode.com/problems/min-cost-climbing-stairs/
////////////////////////////////////////////////////////////////
// LAST step's price !== 0
////////////////////////////////////////////////////////////////
const minCostStairs = (cost) => {};

// p: array of int
// r: num int
// e:
// Example 1:
// Input: cost = [10,15,20]
// Output: 15
// Explanation: You will start at index 1.
// - Pay 15 and climb two steps to reach the top.
// The total cost is 15.

// Example 2:
// Input: cost = [1,100,1,1,1,100,1,1,100,1]
// Output: 6
// 1,100,1,1,1,100,1,1,100,1
// x     x   x     x x     x
// 100,1,1,1,1,100,1,1,100,1
//     x x x x     x x     x
//    x   x x     x

// 100,1,1,1,1,100,1,1,100,1
// x     x   x     x   x
// x     x x   x     x     x
// x     x x x
// 100,1,3,1,5,100,1,2,100,1
// x     m m m     m m     m

// 0 => x
// 1 => x
// 2 => x 0
//      0 x
// 3 => x 0 x
//      x x 0
//      0 x x
//      0 x 0
// 4 => x 0 x 0
//      0 x 0 x
//      0 x x 0

// Explanation: You will start at index 0.
// - Pay 1 and climb two steps to reach index 2.
// - Pay 1 and climb two steps to reach index 4.
// - Pay 1 and climb two steps to reach index 6.
// - Pay 1 and climb one step to reach index 7.
// - Pay 1 and climb two steps to reach index 9.
// - Pay 1 and climb one step to reach the top.
// The total cost is 6.

////////////////////////////////////////////////////////////////
// Framework for solving DP Problems
// 1. Define the objective function
//// f(i) is the min cost => cost[i] = cost at ith step
// 2. Identify base cases
////
//// f(0) = cost[0]
//// f(1) = cost[1]
// 3. Write down: Recurrence Relation for the optimized objective function
//// f(i) = min(f(i)+f(i+1), f(i)+f(i+2))

// 4. What's the order of execution?
//// bottom-up
// 5. Where to look for the answer?
//// min(sum from f(0), sum from f(1))
////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
// LAST step's price = 0
////////////////////////////////////////////////////////////////
// [3, 2, 0]
// [10, 15, 20, 0];
// [1, 100, 1, 1, 1, 100, 1, 1, 100, 1, 0 ]
//
var minCostClimbingStairs = function (cost) {
  cost.push(0);

  for (let i = cost.length - 3; i > -1; i--) {
    cost[i] = Math.min(cost[i] + cost[i + 1], cost[i] + cost[i + 2]);
    // console.log(cost[i]);
  }

  //   console.log(Math.min(cost[0], cost[1]));
  console.log(cost);
  return Math.min(cost[0], cost[1]);
};

//   // compare i & i + 1 to choose where to go nextStep // always take 2 steps if there's a chance
//   console.log(Math.min(cost[0], cost[2]));
//   console.log(sumFromI(0, cost));
// if step from firstStep to nextStep = 2 => set nextStep = firstStep
// if step from firstStep to nextStep = 1 => set nextStep = temp => temp >= new nextStep => new nextStep = firstStep

// minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]);
// minCostClimbingStairs([10, 15, 20]);
