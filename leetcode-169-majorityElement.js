/**
 * @param {number[]} nums
 * @return {number}
 */

// p: arr
// r: num
// 2,2,1,1,1,2,2
// 2:
// 1:
var majorityElement = function (nums) {
  const n = nums.length;
  const map = {};
  for (let num of nums) {
    map[num] = (map[num] || 0) + 1;
  }

  for (let k in map) {
    if (map[k] > n / 2) return k;
  }
};
