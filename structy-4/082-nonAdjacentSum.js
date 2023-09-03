// p: array
// r: number;
// e:
//  x         x
//  x            x
//  x     x      x
//     x      x
//     x         x
// [2, 4, 5, 12, 7]
// => 16
// [2, 4, 7, 16, 14]
// [7, 5, 12, 19]
// [7, 5, 5, 12, 17, 29]
// [7, 5  5  ]
//  0  1  2
// // tabulation O(n^2) O(n)
// const nonAdjacentSum = (nums) => {
//   const arr = [nums[0], nums[1]];
//   for (let i = 2; i < nums.length; i++) {
//     arr[i] = nums[i] + Math.max(...arr.slice(0, i - 1));
//   }
//   return Math.max(...arr);
// };
//                      [2, 4, 5, 12, 7]
//                      2 /           \
//                [5, 12, 7]           [4, 5, 12, 7]
//             5 /          \                 4/    \
//          [7]          [12, 7]    [12, 7]       [5, 12, 7]
//         7/  \          12/   \
//         []   []        []    [7]
// memoization
const nonAdjacentSum = (nums, i = 0, memo = {}) => {
  if (i >= nums.length) return 0;
  // if (i > nums.length - 1) return 0;
  // if (i === nums.length - 1) return nums[i];
  if (i in memo) return memo[i];
  const wFirst = nums[i] + nonAdjacentSum(nums, i + 2, memo);
  const woFirst = nonAdjacentSum(nums, i + 1, memo);

  memo[i] = Math.max(wFirst, woFirst);
  return memo[i];
};
