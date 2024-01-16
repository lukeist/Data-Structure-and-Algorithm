/**
 * @param {number[]} nums
 * @return {number}
 */
// p: array;
// r: number;
// e:
// [1,2,3,1]
// [1,2,4,3]
//
// nums [2,7,9,3,1]
//           i
// arr  [2,7,]

var rob = function (nums) {
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);
  const arr = [nums[0], nums[1], nums[2] + nums[0]];

  for (let i = 3; i < nums.length; i++) {
    arr[i] = nums[i] + Math.max(arr[i - 2], arr[i - 3]);
  }

  return Math.max(arr[arr.length - 1], arr[arr.length - 2]);
};

// var rob = function(nums, i = nums.length - 1, memo = {}) {
//     if (i < 0) return -Infinity;
//     if (i === 0) return nums[i];
//     if (i === 1) return Math.max(nums[0], nums[1]);
//     if (i === 2) return Math.max(nums[0] + nums[2], nums[1]);
//     if (i in memo) return memo[i];

//     const atI = nums[i] + Math.max(rob(nums, i - 2, memo), rob(nums, i - 3, memo));
//     const atJ = nums[i - 1] + Math.max(rob(nums, i - 3, memo), rob(nums, i - 4, memo));
//     memo[i] = Math.max(atI, atJ);

//     return Math.max(atI, atJ)
// };
