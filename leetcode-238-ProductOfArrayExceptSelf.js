/**
 * @param {number[]} nums
 * @return {number[]}
 */

// p: array;
// r: array;
// e:
//           [1,2,3,4]
//
//           [1,1,2,6]
// prefix 24
//
//           [-1,1,0,-3,3]
//           [1,0,9,0 ,0]
// prefix 0
var productExceptSelf = function (nums) {
  // create new array result with first index = 1
  const result = new Array(nums.length);
  result[0] = 1;
  // loops thru result to get first values
  for (let i = 1; i < nums.length; i++) {
    result[i] = result[i - 1] * nums[i - 1];
  }
  // create prefix = 1
  let prefix = 1;

  // lopps thru result backwards to get results;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] = result[i] * prefix;
    prefix = prefix * nums[i];
  }

  return result;
};
