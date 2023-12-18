/**
 * @param {number[]} nums
 * @return {number}
 */

// p: array,
// r: num
//
// [2,2,1,1,1,2,2]
//
var majorityElement = function (nums) {
  const map = {};
  for (let num of nums) {
    map[num] = (map[num] || 0) + 1;
  }

  for (let key in map) {
    if (map[key] > nums.length / 2) return key;
  }
};
