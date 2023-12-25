/**
 * @param {number[]} nums
 * @return {number}
 */

// p: array;
// r: num;
// e:
//                   i
//       [-2,1,-3,4,-1,2,1,-5,4]
//cur max -2 1 -2 4  3 5 6 1
//  max   -2 1  1 4  4 5 6 6

var maxSubArray = function (nums) {
  let max = nums[0];
  let curMax = nums[0];
  for (let i = 1; i < nums.length; i++) {
    curMax = Math.max(curMax + nums[i], nums[i]);
    max = Math.max(curMax, max);
  }

  return max;
};
