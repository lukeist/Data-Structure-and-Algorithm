/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// p: array, number int;
// r: number;
// e: 9
//             se
// [-1,0,3,5,9,12]
//   0 1 2 3 4 5
// se
// [5]
//
//     se
// [-1,0,3,5,9,12]
//   0 1 2 3 4 5
//   m
var search = function (nums, target) {
  let s = 0,
    e = nums.length - 1;

  while (s <= e) {
    let m = Math.floor((s + e) / 2);
    let num = nums[m];
    if (num === target) return m;
    if (target < num) {
      e = m - 1;
    } else {
      s = m + 1;
    }
  }

  return -1;
};
