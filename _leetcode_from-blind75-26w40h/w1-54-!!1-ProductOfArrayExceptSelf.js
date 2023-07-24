/**
 * @param {number[]} nums
 * @return {number[]}
 */

// p: array;
// r: array;
// e:
//          0  1 2 3
// nums   [ 1, 2,3,4]
//          i
// result [24,12,8,6]
// prefix: 24

function productExceptSelf(nums) {
  const n = nums.length;
  const result = new Array(n);
  result[0] = 1;

  for (let i = 1; i < n; i++) {
    result[i] = nums[i - 1] * result[i - 1];
  }

  let prefix = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= prefix;
    prefix *= nums[i];
  }

  return result;
}
