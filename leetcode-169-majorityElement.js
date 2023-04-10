function majorityElement(nums) {
  let majority = nums[0];
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === majority) {
      count++;
    } else {
      count--;
      if (count === 0) {
        majority = nums[i];
        count = 1;
      }
    }
  }

  return majority;
}
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */

// // p: arr
// // r: num
// // 2,2,1,1,1,2,2
// // 2:
// // 1:
// var majorityElement = function (nums) {
//   const n = nums.length;
//   const map = {};
//   for (let num of nums) {
//     map[num] = (map[num] || 0) + 1;
//   }

//   for (let k in map) {
//     if (map[k] > n / 2) return k;
//   }
// };
