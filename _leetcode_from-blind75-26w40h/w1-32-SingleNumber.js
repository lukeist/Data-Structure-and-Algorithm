/**
 * @param {number[]} nums
 * @return {number}
 */

// p: array;
// r: number;
// e:
// [4,1,2,1,2]
var singleNumber = function (nums) {
  let res;
  for (let n of nums) {
    res ^= n;
  }
  return res;
};
