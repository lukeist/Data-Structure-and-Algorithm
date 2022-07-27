// https://structy.net/problems/non-adjacent-sum

// p: arr of nums
// r: num (max sum)
// e: [2, 4, 5, 12, 7] => 4 + 12 = 16
//     2     5      7
//     2        12
//        4     12
//           5      7

// e: [7, 5, 5, 12, 17, 29] => 7 + 12 + 29 = 48
//     7  x  5  x   17  x
//     7  x  x  12  x   29
//     7  x  x  x   17  x

// // recursion: decision tree // top down // Alvin's solution
const nonAdjacentSum = (nums, memo = {}, i = 0) => {
  if (i >= nums.length) return 0;

  if (i in memo) return memo[i];

  const include = nums[i] + nonAdjacentSum(nums, memo, i + 2);
  const exclude = nonAdjacentSum(nums, memo, i + 1);

  memo[i] = Math.max(include, exclude);

  return memo[i];
};

// // recursion: decision tree // top down // slice() makes it slow
// const nonAdjacentSum = (nums, memo = {}) => {
//   if (nums.length === 1) return nums[0];
//   if (nums.length === 2) return Math.max(nums[0], nums[1]);

//   if (nums.length in memo) return memo[nums.length];

//   memo[nums.length] = Math.max(
//     nums[0] + nonAdjacentSum(nums.slice(2), memo),
//     nonAdjacentSum(nums.slice(1), memo)
//   );

//   return memo[nums.length];
// };

// const nonAdjacentSum = (nums) => {
//   let max = -Infinity;
//   const memo = {};

//   for (let i = 0; i < nums.length; i++) {
//     max = Math.max(findMax(nums, i, max, memo));
//   }
// };

// const findMax = (nums, i, max, memo) => {
//   if (i === 0 || i === 1) return nums[i];
// };
/////////////////////////////////////////////////////////////
// // iteration
// // f(n) return max sum of non-adj-numbers
// // base cases: arr.length = 3 => max = (n+ f(1),  f(2))
// // base cases: arr.length = 4 => max = (n+ f(2),  f(3))

// // recurrent func f(n) =  maxSum(n + f(n-2), n + f(n-3),... , n + f(1), f(n-1) )
// // order: bottom up
// // f(n)

// const nonAdjacentSum = (nums) => {
//   const arr = [nums[0], nums[1]];
//   for (let i = 2; i < nums.length; i++) {
//     let max = -Infinity;

//     for (let j = i; j > 1; j--) max = Math.max(nums[i] + arr[i - j], max);

//     arr[i] = Math.max(max, arr[i - 1]);
//   }

//   return arr[arr.length - 1];
// };

const nums = [2, 4, 5, 12, 7]; // -> 16
// const nums = [7, 5, 5, 12]; // -> 19
// const nums = [3, 5, 3];
// //           [7, 5, 12, 12]; // -> 19
console.log(nonAdjacentSum(nums));
