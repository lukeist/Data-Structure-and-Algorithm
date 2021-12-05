// https://leetcode.com/problems/climbing-stairs/

// p: int +
// r: int +
// e:
// 0 => 1
// 1 => 1
// 2 => 1 1
//      2
// 3 => 1 1 1
//      1 2
//      2 1
//      3
// 4 => 1 1 1 1
//      1 1 2
//      1 2 1
//      2 1 1
//      2 2
//      1 3
//      3 1
// 5 => 1 1 1 1 1
//      1 1 1 2
//      1 1 2 1
//      1 2 1 1
//      2 1 1 1
//      1 2 2
//      2 1 2
//      2 2 1
//      2 3
//      3 2
//      1 1 3
//      1 3 1
//      3 1 1

// 0 1 2 3 4 5
// 1 1 2 4 7 16
////////////////////////////////////////////////////////////////
// Framework for solving DP Problems
// 1. Define the objective function
//// f(n) is the number of distinct ways => to reach n-th step
// 2. Identify base cases
//// f(0) = 1; f(1) = 1; f(2) = 2; f(3) = 4; f(4) = 7; f(5) = 13
// 3. Write down: Recurrence Relation for the optimized objective function
//// f(n) = f(n-1) + f(n-2) + ... + f(1) + f(0)
// 4. What's the order of execution?
//// bottom-up
// 5. Where to look for the answer?
//// f(n)
////////////////////////////////////////////////////////////////
// DP
const stair3Steps = (n) => {
  if (n === 0) return 1;
  if (n === 1) return 1;
  if (n === 2) return 2;

  //   let arrN = [1, 1, 2];
  console.log(stair3Steps(n - 1) + stair3Steps(n - 2) + stair3Steps(n - 3));
  return stair3Steps(n - 1) + stair3Steps(n - 2) + stair3Steps(n - 3);
};

stair3Steps(5);

// // DP
// const stair3Steps = (n) => {
//   let arrN = [1, 1, 2];

//   for (let i = 3; i <= n; ++i) {
//     arrN[i] = arrN[i - 1] + arrN[i - 2] + arrN[i - 3];

//     if (i === n) {
//       console.log(arrN[i]);
//       return arrN[i];
//     }
//   }
// };

// stair3Steps(55);
