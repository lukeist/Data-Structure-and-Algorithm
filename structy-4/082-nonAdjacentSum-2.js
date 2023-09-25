// p: array;
// r: number;

// e:
//  0  1  2  3   4
// [2, 4, 5, 12, 7]
// [2, 4, 7, 16, 14]

// [7, 5, 5, 12, 17, 29]
// [7, 5, 12,19, 29, ]

// TABULATION;
const nonAdjacentSum = (nums) => {
  const arr = [nums[0], nums[1], nums[2] + nums[0]];

  for (let i = 3; i < nums.length; i++) {
    arr[i] = nums[i] + Math.max(arr[i - 2], arr[i - 3]);
  }

  return Math.max(...arr);
};

// MEMOIZATION
// const nonAdjacentSum = (nums, i = nums.length - 1, memo = {}) => {
//   if (i === 0 || i === 1) return nums[i];
//   if (i < 0) return 0;
//   if (i in memo) return memo[i];
//   const a =
//     nums[i] +
//     Math.max(
//       nonAdjacentSum(nums, i - 2, memo),
//       nonAdjacentSum(nums, i - 3, memo)
//     );
//   const b =
//     nums[i - 1] +
//     Math.max(
//       nonAdjacentSum(nums, i - 3, memo),
//       nonAdjacentSum(nums, i - 4, memo)
//     );

//   memo[i] = Math.max(a, b);
//   return Math.max(a, b);
// };
