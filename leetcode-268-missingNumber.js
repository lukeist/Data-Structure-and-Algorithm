/**
 * @param {number[]} nums
 * @return {number}
 */

// p: array;
// r: num;
// num => 0 --> array.length
//
// [9,6,4,2,3,5,7,0,1]
//  mid = (len + 1) / 2
//
// 1 2 3 4 5 6 7 8 9
var missingNumber = function (nums) {
  let n = nums.length;
  let sum = (n * (n + 1)) / 2;
  for (let num of nums) {
    sum -= num;
  }
  return sum;
};

// var missingNumber = function(nums) {
//    const setNums = new Set(nums);
//    for (let i = 0; i <= nums.length; i++) {
//        if (!setNums.has(i)) return i;
//    }
// };
