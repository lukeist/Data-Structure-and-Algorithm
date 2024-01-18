/**
 * @param {number[]} nums
 * @return {number}
 */
// p: array;
// r: number int;
//                   i
// e: [2,3,-2, 4, 2, 5]
//
// min -496
// max 40
// r   40
//                 i
// e: [2,3,-2, 4, -2, 5]
//
// min -8
// max 96
// r   96
//
//
//  0 2
//  0

// [-2,3,-4]
//  -2 3
//
function maxProduct(nums) {
  if (nums.length === 0) return 0;
  let min = nums[0];
  let max = nums[0];
  let r = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < 0) [min, max] = [max, min];

    max = Math.max(nums[i], max * nums[i]);
    min = Math.min(nums[i], min * nums[i]);

    r = Math.max(r, max);
  }

  return r;
}
