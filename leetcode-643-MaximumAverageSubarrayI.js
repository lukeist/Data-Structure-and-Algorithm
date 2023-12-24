/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// p: array; number int
// r: number float/;
// e:
//
//      i          j
// [ 1,12,-5,-6,50, 3]
//
//
//
var findMaxAverage = function (nums, k) {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  let max = Math.max(max, sum / k);
  let i = 0,
    j = k;
  while (j < nums.length) {
    sum = sum - nums[i] + nums[j];
    max = Math.max(max, sum / k);
    i++;
    j++;
  }

  return max;
};
