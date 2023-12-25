/**
 * @param {number[]} nums
 * @return {number}
 */

// p: array
// r: number
//
//  i
// [1]
//     j
// max = 1;
//               i
//        [-2,1,-3,4,-1,12,1,-5,4]
//  c      -2 1 -2 4 3  15 16 11 15
//  max    -2 1  1 4 4  15 16 16
//
//
var maxSubArray = function (nums) {
  let currentMax = nums[0];
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentMax = Math.max(nums[i], currentMax + nums[i]);
    max = Math.max(currentMax, max);
  }

  return max;
};
