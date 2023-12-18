/**
 * @param {number[]} nums
 * @return {boolean}
 */

// p: array
// r: boolean;
// e: [1,1,1,3,3,4,3,2,4,2]

var containsDuplicate = function(nums) {
  const map = {};
  for (let n of nums) {
      map[n] = (map[n] || 0) + 1;
  }
  for (let key in map) {
      if (map[key] > 1) return true;
  }
  return false;
};