/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// p: array;
// r: array;
// e:
// [1,0,2,1,1,2,0,1,1,1]
//    l
// [0,1,1,1,1,2,0,1,1,2]
//                  r
//        m
//  l
// [1,0,2]
//    r
//    m

var sortColors = function (nums) {
  let m = 0,
    l = 0,
    r = nums.length - 1;
  while (m <= r) {
    if (nums[m] === 0) {
      [nums[m], nums[l]] = [nums[l], nums[m]];
      l++;
      m++;
    } else if (nums[m] === 2) {
      [nums[m], nums[r]] = [nums[r], nums[m]];
      r--;
    } else {
      m++;
    }
  }
};
