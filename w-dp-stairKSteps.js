// https://leetcode.com/problems/climbing-stairs/

// STAIR WITH K STEPS////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
// Framework for solving DP Problems
// 1. Define the objective function
//// f(n) is the number of distinct ways => to reach n-th step
// 2. Identify base cases
//// base cases of k: f(0) = 1; f(1) = 1;
//// base cases of n: f(0) = 1; f(1) = 1; f(2) = 2; f(3) = 4; ...; f(k) = f(k-1) + f(k-2) + ... + f(0)
////
// 3. Write down: Recurrence Relation for the optimized objective function
//// f(n) = f(n-1) + f(n-2) + ... + f(n-k)
// 4. What's the order of execution?
//// bottom-up
// 5. Where to look for the answer?
//// f(n)
////////////////////////////////////////////////////////////////

const stairKSteps = (n, k) => {
  // create array of k elements with f(k) = f(k-1) + f(k-2) + ... + f(0)
  // const arr = Array.from(Array(k), (e, i, a) => {
  //   if (i === 0) {
  //     a[i] = 1;
  //   }
  //   if (i === 1) {
  //     a[i] = 1;
  //   }
  //   a[i] = a.reduce((p, c) => p + c, 0);
  // });
  const arr = [1, 1];
  for (let i = 2; i < k; i++) {
    arr[i] = arr.reduce((p, c) => p + c, 0);
  }

  // find n using for loops
  for (let i = k; i <= n; i++) {
    // arr[i] = arr[i-1] +  arr[i-2] + ... + arr[i-k]
    arr[i] = arr.slice(i - k, i).reduce((p, c) => p + c, 0);

    if (i === n) {
      console.log(arr[i]);
      return arr[i];
    }
  }
};

stairKSteps(7, 2);
// STAIR WITH 3 STEPS////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
// 1 1 2 4 7 13
////////////////////////////////////////////////////////////////
// Framework for solving DP Problems
// 1. Define the objective function
//// f(n) is the number of distinct ways => to reach n-th step
// 2. Identify base cases
//// f(0) = 1; f(1) = 1; f(2) = 2; f(3) = 4; f(4) = 7; f(5) = 13
// 3. Write down: Recurrence Relation for the optimized objective function
//// f(n) = f(n-1) + f(n-2) + f(n-3)
// 4. What's the order of execution?
//// bottom-up
// 5. Where to look for the answer?
//// f(n)
////////////////////////////////////////////////////////////////
// DP;
// const stair3Steps = (n) => {
//   if (n === 0) return 1;
//   if (n === 1) return 1;
//   if (n === 2) return 2;

//   //   let arrN = [1, 1, 2];
//   console.log(stair3Steps(n - 1) + stair3Steps(n - 2) + stair3Steps(n - 3));
//   return stair3Steps(n - 1) + stair3Steps(n - 2) + stair3Steps(n - 3);
// };

// stair3Steps(5);

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
